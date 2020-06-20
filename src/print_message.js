import React from "react";

function PrintMessage(props){
    return(
        <div>
            <h1> The message is " {props.message} "</h1>
        </div>
    )
}
export default PrintMessage;