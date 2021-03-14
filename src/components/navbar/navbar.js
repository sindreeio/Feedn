import React, { useEffect, useState } from 'react';
import Btn from '../../components/buttons/materialDesignFilledButton';
import {db, firebaseAuth, storage, messaging} from '../../database/FirebaseConfig';
import {Redirect, useHistory} from 'react-router-dom';
import './navbar.css';
import empty_user from '../../media/img/empty_user.png';
import ProfileMenu from './ProfileMenu';
import logo from '../../media/img/logo.png';
import {askForPermissioToReceiveNotifications} from '../../functions/notifications/push';



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
            storage.child('profilePictures/' + user.uid).getDownloadURL().then((uri) =>{
                console.log("img found");
                setProfilePicture(uri);
            }
            )
            if(!((imgPath === ""))){
                //storage logic here
            }
        }
        if(user && !(window.navigator.platform == "iPhone")) {
            askForPermissioToReceiveNotifications(user.uid);
        }
        
    }, [user])


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
        <div className="align_right_container">
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
            {displayProfileMenu && <ProfileMenu user={user} profilePicture={profilePicture}/>}
        </div>
    )
}

export default Navbar;