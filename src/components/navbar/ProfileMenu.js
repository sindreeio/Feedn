import React from 'react';
import './navbar.css';
import firebase from "firebase";
import StandardButton from '../buttons/customButtons/standardButton.js'


function ProfileMenu(props){

   const signOut = () => {
        firebase.auth().signOut();
          
    }

    return(
        <div className="align_right_container">
                <div className="profile_menu">
                    <div className="center_content_container">
                        <img className="profile_img_big" src={props.profilePicture}></img>
                    </div>
                    <StandardButton text="Bytt feed"/>
                    <StandardButton text="Log ut" action={signOut}/>
                </div>
            </div>
    )
}

export default ProfileMenu;