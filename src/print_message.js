import React from "react";

function Print_Message(props){
    return(
        <div>
            <h1> The message is " {props.message} "</h1>
        </div>
    )
}
export default Print_Message;