import React, { useEffect, useState } from 'react';
import '../../index.css';
import './login.css';
import MaterialDesignFilledButton from '../../components/buttons/materialDesignFilledButton';
import MaterialDesignField from '../../components/inputfields/MaterialDesignField';
import {Link} from 'react-router-dom';
import {firebaseAuth, db} from '../../database/FirebaseConfig.js';
import {Redirect} from 'react-router-dom';


function Register(){
const [error, setError] = useState(null);
const [email,setEmail] = useState("");
const [password, setPassword] = useState("");
const [repeat_password, setRepeat_password] = useState("");
const [agrees, setAgrees] = useState(false);
const [doRedirectToFeed, setRedirectToFeed] = useState(false);
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');

 useEffect(()=>{
    firebaseAuth.onAuthStateChanged(function(user){
        if(user){
            setRedirectToFeed(true);
        }
        else{
            setRedirectToFeed(false);
        }
    })
    console.log(firebaseAuth.is)
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
        console.log("agrees")
        firebaseAuth.createUserWithEmailAndPassword(email, password).then(
            function(user){
                console.log(user);
                db.collection('users').doc(user.user.uid).set({first_name: firstName, last_name: lastName, member_of: [], profile_img_path:""});
            }
        )
        .catch((error) => {
            console.log("error")
            setError(error);
        });
    }
    else{
        setError({message:"Du må godta terms and conditions og privacy policy for å registrere deg"});

    }
    };
}
    return(

        <div className="Container">
            {doRedirectToFeed ? <Redirect to="/feeds"/> : null}
            <div className="Content">
                <div className="Logo">Feedn</div>
                <div className="input-field">
                    <MaterialDesignField setFunction={setEmail} label="Epost" type="text" id="email"/>
                </div>
                <div className="input-field">
                    <MaterialDesignField setFunction={setFirstName} label="Fornavn" type="text" id="firstName"/>
                </div>
                <div className="input-field">
                    <MaterialDesignField setFunction={setLastName} label="Etternavn" type="text" id="LastName"/>
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