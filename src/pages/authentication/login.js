import React, { useEffect, useState } from 'react';
import '../../index.css';
import './login.css';
import MaterialDesignFilledButton from '../../components/buttons/materialDesignFilledButton';
import MaterialDesignField from '../../components/inputfields/MaterialDesignField';
import {Redirect} from 'react-router-dom';
import { render } from '@testing-library/react';


   

function Login(){
    const [doRedirect, setRedirect] = useState(false)

    const changeRedirectToRegister = () =>{
        setRedirect(true);
    }


    return(
        
        <div className="Container">
            {doRedirect ? <Redirect to="/registrer"/> : null}
            <div className="Content">
                <div className="Logo">Feedn</div>
                <div className="input-field">
                    <MaterialDesignField label="Brukernavn" type="text" id="email"/>
                </div>
                <div className="input-field">
                    <MaterialDesignField label="Passord" type="password" id="password"/>
                </div>
                
                <div className="buttonDiv">
                        <MaterialDesignFilledButton action={changeRedirectToRegister} buttonText="Registrer"/>
                        <MaterialDesignFilledButton buttonText="Logg inn"/>
                </div>
            </div>
        </div>
    )
}

export default Login;