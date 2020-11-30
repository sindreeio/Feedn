import React from 'react';
import './standardButton.css'

function standardButton(props){

    return(
        <div class="standardButton" onClick={props.action}>
            {props.text}
        </div>
    )
}

export default standardButton;