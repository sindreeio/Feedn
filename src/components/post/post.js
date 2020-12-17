import React, { useEffect, useState } from 'react';
import './post.css';
import Image from './image.js';
import Text from './text.js';
import ReactionButton from "../buttons/reactionButton/reactionButton.js";

function Post(props) {
    
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
        </div>
    )
}

export default Post;