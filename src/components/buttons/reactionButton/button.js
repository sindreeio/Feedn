import React from "react";
import '../customButtons/standardButton.css';


function Button(props){

    if(props.reacted){
        return(
            <div class="standardButton" style={{backgroundColor: '#1ABDA5', color:' #eeeeee'}} onClick={props.action}>
            {props.text} <div className="number">{props.number}</div>
            </div>
        )
    }
    else{
        return(
            <div class="standardButton" onClick={props.action}>
            <div>{props.text}</div> {(props.number > 0)  ? <div className="number">{props.number}</div> : null }
            </div>
        )
    }


}

export default Button;