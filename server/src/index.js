import {createServer} from "http";
import {Server} from "socket.io";// Initializes a WebSocket server.
//import {v4 as uuidv4} from "uuid";
const httpServer=createServer();
const io=new Server(httpServer,{
    cors:{
        origin:"http://localhost:3006",//(Frontend URL)connection from  basically we are creating a separate server for http and our websocket and linking thewm
        methods:["GET","POST"],
    },
});//A new Server instance is created and attached to httpServer.
//CORS (Cross-Origin Resource Sharing) is enabled:
//origin: "http://localhost:3000" → Only allows requests from this specific frontend URL.


io.use((socket,next)=>{
    const username=socket.handshake.auth.username;//for authentication ke liye
    if(!username){
        return next(new Error("invalid username"));
    }
   socket.username=username;//if auth ho gya toh ye de do
    socket.userId=uuidv4();
    next();
})
io.on("connection",async(socket)=>{
    //all connected users
    const users=[];
    for(let [id,socket] of io.of("/").sockets){
        users.push({
            userId:socket.userId,
            username:socket.username,
        })
    }
    //all users event
    socket.emit("users",users);
    
socket.emit("session",{userId:socket.userId,username:socket.username});
});
//Sends session details to the connected user → Using socket.emit("session", {...}), the server sends:
//userId: The unique ID assigned to the user.
//username: The username the user provided during authentication.

socket.broadcast.emit("user connected",{
    userId:socket.userId,
    username:socket.userId,
});

//new message event
socket.on("new message",(message)=>{
    socket.broadcast.emit("new message",{
        userId:socket.userId,
        username:socket.username,
        message,
    })

})

console.log("Listening to PORT...");
httpServer.listen(process.env.PORT || 4000);//Logs "Listening to PORT..." when the server starts.


