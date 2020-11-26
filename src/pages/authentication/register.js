import React, { useEffect, useState } from 'react';
import '../../index.css';
import './login.css';
import MaterialDesignFilledButton from '../../components/buttons/materialDesignFilledButton';
import MaterialDesignField from '../../components/inputfields/MaterialDesignField';
import {Link} from 'react-router-dom';
import {firebaseAuth} from '../../database/FirebaseConfig.js';


function Register(){
const [error, setError] = useState(null);
const [email,setEmail] = useState("");
const [password, setPassword] = useState("");
const [repeat_password, setRepeat_password] = useState("");
const [agrees, setAgrees] = useState(false);

useEffect(() => {
    console.log(agrees);
})

const changeAgrees = () =>{
    if (agrees){
        setAgrees(false);
    }
    else{
        setAgrees(true);
    }
}

const submit = () =>{
    if(password !== repeat_password) {
        setError({message: "Passordene er ikke like"});
    }else{
    if(agrees){
        firebaseAuth.createUserWithEmailAndPassword(email, password)
        .catch(function(err) {
            setError(err);
        });
    }
    else{
        setError({message:"Du må godta terms and conditions og privacy policy for å registrere deg"});

    }
    };
}
    return(
        
        <div className="Container">
            <div className="Content">
                <div className="Logo">Feedn</div>
                <div className="input-field">
                    <MaterialDesignField setFunction={setEmail} label="Epost" type="text" id="email"/>
                </div>
                <div className="input-field">
                    <MaterialDesignField setFunction={setPassword} label="Passord" type="password" id="passord"/>
                </div>
                <div className="input-field">
                    <MaterialDesignField setFunction={setRepeat_password} label="Gjenta passord" type="password" id="repeat_password"/>
                </div>
                <p><input onClick={changeAgrees} type="checkbox"></input>I agree to the <a href="https://www.termsandconditionsgenerator.com/live.php?token=3qtTOFqtNDpU17UhDMwk0zHszKepHnPr">Terms and conditions</a> and the <a href="https://www.privacypolicygenerator.info/live.php?token=IXYpcEVJkQTMbf17xHO4R3BcEP94Rk3y">Privacy policy</a></p>
                {error && <p className="textColor">{error.message}</p>}
                <MaterialDesignFilledButton action={submit} buttonText="Registrer"/>
                <div>Har du allerede bruker?<Link to='/'>Logg inn</Link></div>
            </div>
        </div>
    )
}

export default Register;