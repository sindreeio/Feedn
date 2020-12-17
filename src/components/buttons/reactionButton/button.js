import React from "react";
import '../customButtons/standardButton.css';


function Button(props){

    if(reacted){
        return(
            <div class="standardButton" style={{backgroundColor: '#1ABDA5', color:' #eeeeee'}} onClick={props.action}>
            {props.text} {props.number}
            </div>
        )
    }
    else{
        return(
            <div class="standardButton" onClick={props.action}>
            {props.text} {props.number}
            </div>
        )
    }


}

export default Button;