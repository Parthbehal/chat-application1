import {createServer} from "http";
import {Server} from "socket.io";


const httpServer=createServer();
const io=new Server(httpServer,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"],
    },
});//A new Server instance is created and attached to httpServer.
//CORS (Cross-Origin Resource Sharing) is enabled:
//origin: "http://localhost:3000" → Only allows requests from this specific frontend URL.

io.on("connection",async(socket)=>{
    //socket events
});


console.log("Listening to PORT...");
httpServer.listen(process.env.PORT || 4000);


