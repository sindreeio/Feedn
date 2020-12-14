import React, { useEffect, useState } from 'react';
import Btn from '../../components/buttons/materialDesignFilledButton';
import './feed.css';
import {firebaseAuth} from '../../database/FirebaseConfig';
import Navbar from '../../components/navbar/navbar.js';
import {Redirect, useParams} from 'react-router-dom';
import GetUser from '../../functions/authenication/getUser.js';
import {getPosts} from '../../functions/server/getPosts.js';
import Post from '../../components/post/post.js'



function Feed(){
    // Feed id from url
    let {id} = useParams()

    const [posts, setPosts] = useState([]);
    const [userID, setUID] = useState("")
    useEffect( () => {
        firebaseAuth.onAuthStateChanged(function(user) {
            setUID(user.uid);
        })
        if (!(userID === "")){
            getPosts(id, setPosts);
            console.log(posts)
        }
        
    }, [userID])

    let postComponents = [];
    if (posts) {
        postComponents = posts.map((post) => (
            <div className="f_post_containter">
                <Post key={post.id} data={post} userId={userID} feedId={id}></Post>
            </div>
        ));
    } else {
        postComponents.push(<p>An error occurred while loading posts. Try to reloade page</p>);
    }

    return(
        <div>
            <Navbar/>
            <div className="center">
                <div className="f_content"> 
                    {postComponents}
                </div>
            </div>
        </div>
    )
}

export default Feed;