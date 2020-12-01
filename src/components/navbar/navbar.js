import React, { useEffect, useState } from 'react';
import Btn from '../../components/buttons/materialDesignFilledButton';
import {db, firebaseAuth, storage} from '../../database/FirebaseConfig';
import {Redirect} from 'react-router-dom';
import './navbar.css';
import empty_user from '../../media/img/empty_user.png';
import ProfileMenu from './ProfileMenu';


function Navbar(props){
    const [user, setUser] = useState(null);
    const [doRedirectToLogin, setRedirectToLogin] = useState(false);
    const [displayProfileMenu, setIfDisplayProfileMenu] = useState(false);
    const [profilePicture, setProfilePicture] = useState(empty_user);
    useEffect(() =>{
        firebaseAuth.onAuthStateChanged(function(user) {
            if (user) {
                setUser(user)
                console.log(user)
            } else {
                setRedirectToLogin(true);
            }
        })
        let imgPath = ""

        if(user){
        const snapshot = db.collection("users").doc(user.uid).onSnapshot(
            function(doc){
                console.log(doc.data())
                imgPath = doc.data().profile_img_path;
                console.log(imgPath)
            }
        )
        if(!((imgPath === ""))){
            //storage logic here
            console.log("nei")
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
    
    return(
        <div>
            <div className="nav-container">
                {doRedirectToLogin ? <Redirect to="/"/> : null}
                <div className="back_icon">
                <span class="material-icons">
                    keyboard_arrow_left
                </span>
                </div>
                <div className="logo">Feedn</div>
                <div>
                    <img onClick={handleImageClick} className="profile_img" src={profilePicture}></img>

                </div>
                
            </div>
            {displayProfileMenu && <ProfileMenu profilePicture={profilePicture}/>}
        </div>
    )
}

export default Navbar;