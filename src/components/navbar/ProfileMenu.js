import React from 'react';
import './navbar.css';
import signOut from '../../functions/authenication/logout.js';
import StandardButton from '../buttons/customButtons/standardButton.js'
import { Link } from 'react-router-dom';


function ProfileMenu(props){


    return(
        <div className="align_right_container">
                <div className="profile_menu">
                    <div className="center_content_container">
                        <img className="profile_img_big" src={props.profilePicture}></img>
                    </div>
                    <Link style={{ textDecoration: 'none' }} to="/feeds">
                        <StandardButton text="Bytt feed"/>
                    </Link>
                    <StandardButton text="Log ut" action={signOut}/>
                </div>
            </div>
    )
}

export default ProfileMenu;