import React from "react";

const ChatContainer=(props)=>{
    return(
        <div className="card border-2 border-info w-100">
        <div className="row vh-95">
          <div className="d-flex flex-coloumn col-12 col-lg-12 col-xl-12">{props.children}
          </div>


          </div>
          
          
          </div>
    )
}

export default ChatContainer;