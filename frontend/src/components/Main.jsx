
import React, { useState,useEffect } from "react";
import Login from "./Login";
import Chat from "./Chat";

const Main=({socket})=>{
   const [newUser,setNewUser]=useState("");
     const[user,setUser]=useState({});
     const[message,setMessage]=useState("");//empty array
     const [users,setUsers]=useState([]);//empty array
     const[messages,setMessages]=useState("");
     
     useEffect(()=>{
      socket.on("users",(users)=>{//listen to users event which carries unique userId and username
          const messagesArr=[];
          for(const {userId,username}of users){
              const newMessage={type:"userStatus",userId,username};
              messagesArr.push(newMessage);
          }
          setMessages([...messages,...messagesArr])
          setUsers(users);
         
      });


        socket.on("session",({userId,username})=>{
            setUser({userId,username});
        });
        socket.on("user connected",({ userId,username})=>{
          const newMessage={type:"userStatus",userId,username};
          setMessage([...messages,newMessage])
        })
        socket.on("new message",({userId,username,message})=>{
          const newMessage={type:"message"
            ,userId:user.userId
            ,username:user.username,
          message,};
          setMessages([...messages,newMessage]);
        })

     },[socket,messages]);
     function logNewUser(){
       setUser(newUser);
       socket.auth={username:newUser};//authentication??  agara auth hoga toh ni aage jayega
       socket.connect()
     }
     function handleChange({currentTarget:input}){
      setNewUser(input.value);
     }
     function  sendMessage(){
      socket.emit("new message" , message);


      const newMessage={type:"message"
        ,userId:user.userId
        ,username:user.username,
      message,};
      setMessages([...messages,newMessage]);
      setMessage("");


     }


    //🔹 If user.userId exists, show the Chat component.
    //🔹 If user.userId doesn't exist, show the Login component.

   return(
       <main  className="content">
   <div className="container mt-3">
     {user.userId &&
      <Chat user={user} message={message}
     messages={messages}
     sendMessage={sendMessage}
     setMessage={setMessage}
     />}
     {!user.userId &&(
       <Login
       newUser={newUser}
       handleChange={handleChange}
       logNewUser={logNewUser}
       />
       
       )}
     
     </div>
  

  </main>
   )
}

export default Main