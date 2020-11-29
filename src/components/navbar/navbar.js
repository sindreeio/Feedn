import React, { useEffect, useState } from 'react';
import Btn from '../../components/buttons/materialDesignFilledButton';
import {firebaseAuth} from '../../database/FirebaseConfig';
import {Redirect} from 'react-router-dom';
import './navbar.css';
import empty_user from '../../media/img/empty_user.png';
import ProfileMenu from './ProfileMenu';


function Navbar(props){
    const [user, setUser] = useState(null);
    const [doRedirectToLogin, setRedirectToLogin] = useState(false);
    const [displayProfileMenu, setIfDisplayProfileMenu] = useState(false);
    useEffect(() =>{
        firebaseAuth.onAuthStateChanged(function(user) {
            if (user) {
                setUser(user)
            } else {
                setRedirectToLogin(true);
            }
        })
        
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
                <div>Hei</div>
                <div className="logo">Feedn</div>
                <div>
                    <img onClick={handleImageClick} className="profile_img" src={empty_user}></img>

                </div>
                
            </div>
            {displayProfileMenu && <ProfileMenu/>}
        </div>
    )
}

export default Navbar;