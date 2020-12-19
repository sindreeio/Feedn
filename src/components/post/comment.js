import React, { useEffect, useState } from "react";
import { db, storage } from "../../database/FirebaseConfig.js";
import empty_user from '../../media/img/empty_user.png';
import '../navbar/navbar.css';



function Comment(props){
    const [profilePicture, setProfilePicture] = useState(empty_user);
    const [user, setUser] = useState();
     useEffect(()=>{
            console.log(props.comment.data().author);
            storage.child('profileImages/' + props.comment.data().author).getDownloadURL().then((uri) =>{
                console.log("img found");
                setProfilePicture(uri)
            }

            ).catch((e)=>{
            });
            db.collection("users").doc(props.comment.data().author).get().then((snapshot) =>{
                console.log(snapshot.data())
                setUser(snapshot.data());
            })
     },[])

    return(
        <div className="flex">
            <div>
                <img className="profile_img" src={profilePicture}></img>
            </div>
            <div className="text_margin">
                {user ? user.first_name: null}:  
            </div>
            <div>
                {props.comment.data().text}
            </div>
        </div>
    )
}

export default Comment;