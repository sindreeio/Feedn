import React, { useEffect, useState } from 'react';
import '../../index.css';
import './login.css';
import MaterialDesignFilledButton from '../../components/buttons/materialDesignFilledButton';
import MaterialDesignField from '../../components/inputfields/MaterialDesignField';
import {Redirect} from 'react-router-dom';
import {firebaseAuth} from '../../database/FirebaseConfig.js';



   

function Login(){
    const [doRedirectToRegistrer, setRedirectToRegistrer] = useState(false);
    const [doRedirectToFeed, setRedirectToFeed]= useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    useEffect(()=>{
        firebaseAuth.onAuthStateChanged(function(user) {
            if (user) {
                setRedirectToFeed(true);
            } else {
            }
        })
    })

    const submit = () =>{
        firebaseAuth.signInWithEmailAndPassword(email, password)
        .catch(function(err) {
            setError(err);
        })
    }

    const changeRedirectToRegister = () =>{
        setRedirectToRegistrer(true);
    }


    return(
        
        <div className="Container">
            {doRedirectToRegistrer ? <Redirect to="/registrer"/> : null}
            {doRedirectToFeed ? <Redirect to="/feed"/> : null}
            <div className="Content">
                <div className="Logo">Feedn</div>
                <div className="input-field">
                    <MaterialDesignField setFunction={setEmail} label="Brukernavn" type="text" id="email"/>
                </div>
                <div className="input-field">
                    <MaterialDesignField setFunction={setPassword} label="Passord" type="password" id="password"/>
                </div>
                
                <div className="buttonDiv">
                        <MaterialDesignFilledButton action={changeRedirectToRegister} buttonText="Registrer"/>
                        <MaterialDesignFilledButton action={submit} buttonText="Logg inn"/>
                </div>
                {error && <p className="textColor">{error.message}</p>}
            </div>
        </div>
    )
}

export default Login;