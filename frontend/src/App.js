//front -awesome for icons
// bootstrap
//socket.io-client  for client                   

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import {io} from "socket.io-client";
import Main from "./components/Main";

//app.js should contain only your MIDDLEWARE and database connections
const socket=io("http://localhost:4000");
function App() {
  return <Main socket={socket}/>;//for authentication  now go to main.jsx and update in lognewUser
  } 

export default App;
