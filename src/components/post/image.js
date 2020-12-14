import React, { useEffect, useState } from 'react';
import logo from '../../media/img/logo.png'
import {storage} from '../../database/FirebaseConfig'
import './post.css'

function Image(props) {
    const [img,setImg] = useState(logo);
    useEffect(()=> {
        storage.child(props.url).getDownloadURL().then((uri) =>{
            console.log("img found");
            setImg(uri)
        }
            
        ).catch((e)=>{
            console.log(e);
        });
    })

    return (
        <div className="imageBox">
            <img className="image" src={img}></img>
        </div>
    );
}

export default Image;