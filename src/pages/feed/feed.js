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
    // Activate when testing is done
    const user = 6969; //GetUser();
    
    const usePost = () => {
        const [posts, setPost] = useState([]);
        useEffect( () => {getPosts(user, id[0]).then((data) => setPost(data))}, []);
        return posts;
    }
    // Activate this when getPosts is done
    let posts = null; // = usePost();
    let postComponents = [];
    if (posts) {
        postComponents = posts.map((post) => (
            <div className="f_post_containter">
                <Post key={post.id} data={post} user={user} feedId={id[0]}></Post>
            </div>
        ));
    } else {
       //postComponents.push(<p>An error occurred while loading posts. Try to reloade page</p>);
       const test = [{id: 123, text: "Dette er et innlegg"},
                    {id: 124, text: "Dette er et innlegg 2"}            
        ];
       postComponents = test.map((post) => (
        <div className="f_post_containter">
            <Post key={post.id} data={post} user={user} feedId={id[0]}></Post>
        </div>
    ));
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