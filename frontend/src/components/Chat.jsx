import React from 'react'; 
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatContainer from './ChatContainer';
//import ScrollableFeed  from "react-scrollable-feed"
const Chat= ({user,message,sendMessage,setMessage,messages})=>{
    return(
      <ChatContainer>
        <ChatHeader user={user}/>
          <div className="position-relative chat-height overflow-auto">
            <div className="d-flex flex-column p-4">
            {messages.map((message, index) =>
  message.type === "User-Status" && user ? (
    <div key={index} className="text-center">
      <span className="badge bg-info">
        {message.userId === user?.userId ? "You have joined!" : `${message.username} has joined!!`}
      </span>
    </div>
  ) : <div key={index} classname={message.userId===user.userId ? "chat-message-right pb-4 ": "chat-message-left pb-4"}>
    <div >
      <img src="https://bootdey.com/img/Content/avatar/avatar3.png"
      className="rounded-circle mr-1"
      alt={message.username}
      title={message.username}
      width="40"
      height="40"
      />
      <div classname="text-muted small text-nowrap mt-2">
        12:00 AM
      </div>
    </div>
    <div classname="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
      <div classname="font-weight-bold mb-1 ">
        {message.userId===user.userId? "You":message.username}
      </div>
      {message.message}
    </div>
  </div>
)}


            </div>
          </div>
        <ChatInput message={message} setMessage={setMessage}  sendMessage={sendMessage}/>
      </ChatContainer>  
  

       
    );
}

export default Chat;
