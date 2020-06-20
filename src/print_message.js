import React from "react";

function Print_Message(props){
    return(
        <div>
            <h1> The message is <br/> {props.message} </h1>
        </div>
    )
}