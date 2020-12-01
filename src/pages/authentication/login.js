import React, { useEffect, useState } from 'react';
import '../../index.css';
import './login.css';
import MaterialDesignFilledButton from '../../components/buttons/materialDesignFilledButton';
import MaterialDesignField from '../../components/inputfields/MaterialDesignField';
import {Redirect, Link} from 'react-router-dom';
import {firebaseAuth} from '../../database/FirebaseConfig.js';



   

function Login(){
    const [doRedirectToFeed, setRedirectToFeed]= useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    useEffect(()=>{
        console.log(email);
        console.log(password)
        firebaseAuth.onAuthStateChanged(function(user){
            if(user){
                setRedirectToFeed(true);
            }
            else{
                setRedirectToFeed(false);
            }
        })
    })


    const submit = () =>{
        console.log("submit")
        firebaseAuth.signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user);
            console.log("user created");
            setRedirectToFeed(true);
        })
        .catch((error) => {
            setError(error);
        });
    }

    return(
        
        <div className="Container">
            {doRedirectToFeed ? <Redirect to="/feeds"/> : null}
            <div className="Content">
                <div className="Logo">Feedn</div>
                <div className="input-field">
                    <MaterialDesignField setFunction={setEmail} label="Brukernavn" type="text" id="email"/>
                </div>
                <div className="input-field">
                    <MaterialDesignField setFunction={setPassword} label="Passord" type="password" id="password"/>
                </div>
                
                <div className="buttonDiv">
                        <Link to='/registrer'>
                            <MaterialDesignFilledButton buttonText="Registrer"/>
                        </Link>
                        <MaterialDesignFilledButton action={submit} buttonText="Logg inn"/>
                </div>
                {error && <p className="textColor">{error.message}</p>}
            </div>
        </div>
    )
}

export default Login;