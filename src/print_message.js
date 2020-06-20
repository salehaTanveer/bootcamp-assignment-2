import React from "react";

function PrintMessage(props){
    return(
        <div>
            <h1> The message is shown using functions</h1>
            <h2>{props.message} </h2>
        </div>
    )
}
export default PrintMessage;