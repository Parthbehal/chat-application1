import React from 'react';
 
const Chat= ({user})=>{
    return(
        <div className="card border-2 border-info w-100">
        <div className="row vh-95">
          <div className="d-flex flex-coloumn col-12 col-lg-12 col-xl-12">
            {/*chat Header*/}
            <div className="align-items-start py-2 px-2 w-100 border-info  border-bottom d-lg-block sticky-top bg-white">
              <div className="d-flex align-items-center pd-1">
                <div className="position-relative ">
                  <img 
                  src="https://bootdey.com/img/Content/avatar/avatar3.png"
                  className="rounded-circle mx-2 " 
                  alt={user?.name || "User Avatar"} // ✅ Fixed alt
                  width="40"
                  height="40"/>
                  

                </div>
                <div className="flex-grow-1">
                <strong>Logged in as {user?.name || "Guest"}</strong> {/* ✅ Fixed rendering */}
                </div>
              </div>
            
          </div>
          {/*Chat Header*/}
          <div className="align-items-end border-info py-3 px-4 border-top d-lg-block">
  <div className="w-100">
    <input 
      type="text" 
      className="form-control mb-2 w-100" 
      name="message" 
      placeholder="Type your Message..."
    />
    <button className="btn btn-info w-100">Send</button> {/* ✅ Full-width button */}
  </div>
</div>
  

        </div>


        </div>
        
        
        </div>
    );
}

export default Chat;
