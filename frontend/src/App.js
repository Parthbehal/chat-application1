//front -awesome for icons
// bootstrap
//socket.io-client  for client

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import {io} from "socket.io-client";
import React,{useState} from "react"
import Login from "./components/Login";
import Chat from "./components/Chat";


function App() {
  const [newUser,setNewUser]=useState("");
  const[user,setUser]=useState("");
  const handleChange = (e) => {
    setNewUser(e.target.value);
  };

  function logNewUser(){
    setUser(newUser);
  }
  //username put karna ha
  return (
   <main  className="content">
    <div className="container mt-3">
      {user && <Chat user={user}/>}
      {!user &&(
        <Login
        newUser={newUser}
        handleChange={handleChange}
        logNewUser={logNewUser}
        />
        
        )}
      
      </div>
   

   </main>
  );
}

export default App;
