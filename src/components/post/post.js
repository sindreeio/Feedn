import React, { useEffect, useState } from 'react';
import Btn from '../../components/buttons/materialDesignFilledButton';
import {firebaseAuth} from '../../database/FirebaseConfig';
import Navbar from '../../components/navbar/navbar.js';
import {Redirect, useParams} from 'react-router-dom';
import GetUser from '../../functions/authenication/getUser.js';
import {getPosts} from '../../functions/server/getPosts.js';
import empty_user from '../../media/img/logo.png';
import './post.css';

function Post(props) {
    return (
        <div>
            
        </div>
    )
}

export default Post;