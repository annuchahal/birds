import React from "react";
import Button from "./component/Button";
import InputFields from "./component/InputFields";
import "./App.css";
import "./index.css";
import Homepage from "./Screens/Homepage";





function App() {
  return (
    <div >
      
      <div className="header">
       <h1> Lovebirds</h1>
      </div>
      <h1 className="heading">Welcome to Lovebirds </h1>
      {/* <div >
       <form>
     <InputFields/>
     <Button/>
     </form>
     </div> */}
     
    <Homepage/>
    
    </div>
  );
}

export default App;
