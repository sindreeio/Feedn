import React, { useEffect, useState } from 'react';
import './post.css';
import Image from './image.js';
import Text from './text.js';
import ReactionButton from "../buttons/reactionButton/reactionButton.js";
import AddComment from "./addComment.js";
import { db } from '../../database/FirebaseConfig.js';
import Comment from "./comment";


function Post(props) {
    const [comments,setComments] = useState([]);
    const [collapsed, setCollapsed] = useState(true);
    const [hasCollapsed, setHasCollapsed] = useState(true);
    useEffect(() => {
        const unsubscribe = db.collection("feeds").doc(props.feedId).collection("posts").doc(props.postId).collection("comments").orderBy('timestamp','desc').limit(1).get().then(     
            function(snapshot){
                let commentist = [];
                snapshot.forEach(element => {
                    commentist.push(element);
                });
                setComments(commentist);
            }
        )
        return () => {
          }

    },[])

    const collapser = () =>{
        setCollapsed(!collapsed);
        if (hasCollapsed){
        const unsubscribe = db.collection("feeds").doc(props.feedId).collection("posts").doc(props.postId).collection("comments").orderBy('timestamp','desc').onSnapshot(     
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
        <div>
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
            <div onClick={() => collapser()}>{collapsed ? <div>Se flere kommentarer</div> : <div>Se færre kommentarer</div> }</div>
        </div>
    )
}

export default Post;