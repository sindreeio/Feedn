import React, { useEffect } from 'react';


function MaterialDesignFilledButton(props){

    return(
        <button className="mdc-button mdc-button--raised limit-button">
        <span onClick={props.action} className="mdc-button__label">{props.buttonText}</span>
        </button>
    )
}

export default MaterialDesignFilledButton;