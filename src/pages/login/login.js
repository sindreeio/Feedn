import React, { useEffect } from 'react';
import '../../index.css';
import './login.css';
import {MDCTextField} from '@material/textfield';


function UsernameField(){
    var textField = null; 
    useEffect(()=> {
        textField = new MDCTextField(document.querySelector('#usernameField'));
    })

    return(
        <label class="mdc-text-field mdc-text-field--filled" id="usernameField">
        <span class="mdc-text-field__ripple"></span>
        <span class="mdc-floating-label" id="my-label-id">Brukernavn</span>
        <input class="mdc-text-field__input" type="text" aria-labelledby="my-label-id"/>
        <span class="mdc-line-ripple"></span>
    </label>
    )
}
function PasswordField(){
    var textField = null;
    
    useEffect(()=> {
        textField= new MDCTextField(document.querySelector('#label'));
    });
    
    return(
        <label class="mdc-text-field mdc-text-field--filled" id="label">
        <span class="mdc-text-field__ripple"></span>
        <span class="mdc-floating-label" id="my-label-id">Password</span>
        
        <input class="mdc-text-field__input" type="password" aria-labelledby="my-label-id"/>
        <span class="mdc-line-ripple"></span>
    </label>
    )
}



function Login(){


    return(
        
        <div className="Container">
            <div className="Content">
                <div className="Logo">Feedn</div>
                <div className="input-field">
                    <UsernameField/>
                </div>
                <div className="input-field">
                    <PasswordField/>
                </div>
                <div className="buttonDiv">
                    <div className="limitButton">
                    <button class="mdc-button mdc-button--raised">
                    <span class="mdc-button__label">Contained Button</span>
                    </button>
                    </div>
                    <div className="limitButton">                    
                    <button class="mdc-button mdc-button--raised">
                    <span class="mdc-button__label">Contained Button</span>
                    </button></div>
                </div>
            </div>
        </div>
    )
}

export default Login;