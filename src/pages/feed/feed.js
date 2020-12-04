import React, { useEffect, useState } from 'react';
import Btn from '../../components/buttons/materialDesignFilledButton';
import './feed.css';
import {firebaseAuth} from '../../database/FirebaseConfig';
import Navbar from '../../components/navbar/navbar.js';
import {Redirect, useParams} from 'react-router-dom';



function Feed(){
    let {id} = useParams()

    return(
        <div>
            <Navbar/>
            <div className="center">
                <div className="f_header">
                    {id[0]}
                </div>
            </div>
        </div>
    )
}

export default Feed;