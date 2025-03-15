import React from "react";



const ChatHeader=({user})=>{
    return(
        <div className="align-items-start py-2 px-2 w-100 border-info  border-bottom d-lg-block sticky-top bg-white">
        <div className="d-flex align-items-center pd-1">
          <div className="position-relative ">
            <img 
            src="https://bootdey.com/img/Content/avatar/avatar3.png"
            className="rounded-circle mx-2 " 
            alt={user.username ?.name || "User Avatar"}
            width="40"
            height="40"/>
            

          </div>
          <div className="flex-grow-1">
          <strong>Logged in as {user?.name || "Guest"}</strong> 
          </div>
        </div>
      
    </div>
    
    )
}


export default ChatHeader;