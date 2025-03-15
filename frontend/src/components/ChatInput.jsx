import React from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

const ChatInput=({message,setMessage,sendMessage})=>{
    return(
        <div className=" mt-auto align-items-end border-info py-3 px-4 border-top d-lg-block">
  <div className="input-group flex-fill">
    <input 
      type="text" 
      className="form-control " 
      name="message" 
      valut={message}
      placeholder="Type your Message..."
      onChange={({currentTarget:input})=>setMessage(input.value)}
      onKeyPress={(e)=>e.code==="Enter"? sendMessage():null}
    />
    <button className="btn btn-info w-100">Send</button> {/* ✅ Full-width button */}
  </div>
</div>
  

    )
}