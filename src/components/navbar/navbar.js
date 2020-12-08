import React, { useEffect, useState } from 'react';
import Btn from '../../components/buttons/materialDesignFilledButton';
import {db, firebaseAuth, storage} from '../../database/FirebaseConfig';
import {Redirect, useHistory} from 'react-router-dom';
import './navbar.css';
import empty_user from '../../media/img/empty_user.png';
import ProfileMenu from './ProfileMenu';
import logo from '../../media/img/logo.png';



function Navbar(props){
    const [user, setUser] = useState(null);
    const [doRedirectToLogin, setRedirectToLogin] = useState(false);
    const [displayProfileMenu, setIfDisplayProfileMenu] = useState(false);
    const [profilePicture, setProfilePicture] = useState(empty_user);
    useEffect(() =>{
        firebaseAuth.onAuthStateChanged(function(user) {
            if (user) {
                setUser(user)
            } else {
                setRedirectToLogin(true);
            }
        })
        let imgPath = ""

        if(user){
        const snapshot = db.collection("users").doc(user.uid).onSnapshot(
            function(doc){
                imgPath = doc.data().profile_img_path;
            }
        )
        if(!((imgPath === ""))){
            //storage logic here
        }
        }
    })


    const handleImageClick= () =>{
        if(displayProfileMenu){
            setIfDisplayProfileMenu(false);
        }
        else{
            setIfDisplayProfileMenu(true);
        }
    }
    
    let history = useHistory();

    return(
        <div>
            <div className="nav-container">
                {doRedirectToLogin ? <Redirect to="/"/> : null}
                <div className="back_icon" onClick={() => history.goBack()}>
                    <span class="material-icons">
                        keyboard_arrow_left
                    </span>
                </div>
                <div className="flex">
                    <img className="feedn_logo" src={logo}></img><div className="logo">Feedn</div></div>
                <div>
                    <img onClick={handleImageClick} className="profile_img" src={profilePicture}></img>

                </div>
                
            </div>
            {displayProfileMenu && <ProfileMenu profilePicture={profilePicture}/>}
        </div>
    )
}

export default Navbar;