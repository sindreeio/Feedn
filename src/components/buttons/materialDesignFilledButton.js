import React from 'react';


function MaterialDesignFilledButton(props){

    return(
        <button onClick={props.action} className="mdc-button mdc-button--raised limit-button">
        <span className="mdc-button__label">{props.buttonText}</span>
        </button>
    )
}

export default MaterialDesignFilledButton;