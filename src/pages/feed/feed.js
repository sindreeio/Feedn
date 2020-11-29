import React, { useEffect, useState } from 'react';
import Btn from '../../components/buttons/materialDesignFilledButton';
import {firebaseAuth} from '../../database/FirebaseConfig';
import Navbar from '../../components/navbar/navbar.js';
import {Redirect} from 'react-router-dom';


function Feed(){

    return(
        <div>
            <Navbar/>
        </div>
    )
}

export default Feed;