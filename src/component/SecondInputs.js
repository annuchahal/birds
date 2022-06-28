import React from "react";

function SecondInputs(){

    return(
        <div>
        <div className="content">
            <label>FullName</label>
            <input type="text" placeholder="" required="true"/>
            <label>Address</label>
            <input type="text" placeholder="" required="true"/>
            <label>Contact no</label>
            <input type="text" placeholder="" required="true"/>
        </div>
        <div>
            <button type="submit">Submit Details</button>
        </div>
        </div>  
    );
}
export default SecondInputs;