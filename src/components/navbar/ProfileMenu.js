import React, {useState} from 'react';
import './navbar.css';
import signOut from '../../functions/authenication/logout.js';
import StandardButton from '../buttons/customButtons/standardButton.js'
import { Link } from 'react-router-dom';
import uploadImage from '../../functions/uploadImage';
import {db, storage} from '../../database/FirebaseConfig';


function ProfileMenu(props){
    const [selectedFile, setSelectedFile] = useState(null);

    const submitImage = (image) =>{
        const ref = storage.child('profilePictures/' +props.user.uid)
        uploadImage(image,ref,150)
    }

    return(
                <div className="profile_menu">
                    <div className="center_content_container">
                        <img className="profile_img_big" src={props.profilePicture}></img>
                    </div>
                    <div className="file-input ">
                        <label style={{width:"100%", height: "40px", fontSize:"15px"}} className ="new-button" for="input">Last opp nytt profilbilde</label>
                        <input id="input" className="file" type="file"  onChange={(e) => submitImage(e.target.files[0])}></input>
                    </div>
                    <Link style={{ textDecoration: 'none' }} to="/feeds">
                        <StandardButton text="Bytt feed"/>
                    </Link>
                    <StandardButton text="Log ut" action={signOut}/>
                </div>
    )
}

export default ProfileMenu;