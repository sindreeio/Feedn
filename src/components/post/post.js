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
            <ReactionButton reaction="Dagens" userId={props.userId} feed={props.feedId} post={props.postId}/>
        </div>
    )
}

export default Post;