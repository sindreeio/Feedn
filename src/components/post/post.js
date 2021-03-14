import React, { useEffect, useState } from 'react';
import './post.css';
import Image from './image.js';
import Text from './text.js';
import ReactionButton from "../buttons/reactionButton/reactionButton.js";
import AddComment from "./addComment.js";
import { db, storage } from '../../database/FirebaseConfig.js';
import Comment from "./comment";
import empty_user from '../../media/img/empty_user.png';
import '../navbar/navbar.css';



function Post(props) {
    const [comments,setComments] = useState([]);
    const [collapsed, setCollapsed] = useState(true);
    const [hasCollapsed, setHasCollapsed] = useState(true);
    const [profilePicture, setProfilePicture] = useState(empty_user);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);


    let unsubscribe;
    useEffect(() => {
        storage.child('profilePictures/' + props.data.owner).getDownloadURL().then((uri) =>{
            console.log("img found");
            setProfilePicture(uri)
        }

        ).catch((e)=>{
        });
        db.collection("users").doc(props.data.owner).get().then((user) =>{
            if (user){
                setFirstName(user.data().first_name);
                setLastName(user.data().last_name)

            }
        })
        db.collection("feeds").doc(props.feedId).collection("posts").doc(props.postId).collection("comments").orderBy('timestamp','desc').limit(1).get().then(     
            function(snapshot){
                let commentist = [];
                snapshot.forEach(element => {
                    commentist.push(element);
                });
                setComments(commentist);
            }
        )
        return unsubscribe; 

    },[])
    
    const collapser = () =>{
        setCollapsed(!collapsed);
        if (hasCollapsed){
            unsubscribe = db.collection("feeds").doc(props.feedId).collection("posts").doc(props.postId).collection("comments").orderBy('timestamp','desc').onSnapshot(     
            function(snapshot){
                let commentist = [];
                snapshot.forEach(element => {
                    commentist.push(element);
                });
                setComments(commentist);
            }
        )
        setHasCollapsed(false);
        }
    }

    const commentList = comments.map((com) => (
        <div>
            <Comment comment={com}/>
        </div>
    ))


    
    return (
        <div className="post">
            <div className="header_container">
            <div className="profile_picture_container">
                <img className="profile_img" src={profilePicture}></img>
            </div>
            <div className="header_text">
                {firstName} {lastName}
            </div>
            </div>
            {props.data.url ? <Image url={props.data.url}></Image> : null}
            {props.data.text ? <Text text={props.data.text}></Text> : null}
            <div className="reactionBox">
                <div className="btn">
                <ReactionButton reaction="Dagens" userId={props.userId} feed={props.feedId} post={props.postId}/>
                </div>
                <div className="btn">
                <ReactionButton reaction="Enig" userId={props.userId} feed={props.feedId} post={props.postId}/>
                </div>
                <div className="btn">
                <ReactionButton reaction="Ugøy" userId={props.userId} feed={props.feedId} post={props.postId}/>
                </div>
                <div className="btn">
                <ReactionButton reaction="Crazycallback" userId={props.userId} feed={props.feedId} post={props.postId}/>
                </div>  
            </div>
            <AddComment userId={props.userId} feed={props.feedId} post={props.postId} />
            <div className={collapsed ? "comments_collapsed": "comments_expanded"}>
            {commentList}
            </div>
            <div className="collapser" onClick={() => collapser()}>{collapsed ? <div>Se flere kommentarer</div> : <div>Se færre kommentarer</div> }</div>
        </div>
    )
}

export default Post;