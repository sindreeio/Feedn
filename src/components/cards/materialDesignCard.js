import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import empty_user from '../../media/img/empty_user.png';
import MaterialDesignField from '../inputfields/MaterialDesignField';
import './cards.css';
import {storage} from '../../database/FirebaseConfig'



function MaterialDesignCard(props){
    const [img,setImg] = useState(empty_user);
    useEffect(()=> {
        storage.child('feedImages/' + props.id).getDownloadURL().then((uri) =>{
            console.log("img found");
            setImg(uri)
        }
            
        ).catch((e)=>{
            console.log(e);
        });
    })

    return(
        <div>
            <Link className="remove_link_style" to={`/feeds/${props.id}`}>
                <div className="margin mdc-card mdc-card--outlined" >
                    <div className="mdc-card__primary-action" tabindex="0">
                        <div className="my-card__media mdc-card__media mdc-card__media--16-9">
                            <div className="mdc-card__media-content">
                                <img className="limitImg" src={img}>
                                    </img>
                            </div>
                        </div>
                    </div>
                    <div className="groupname" >{props.name}</div>
                    <div className="code">Kode:{props.code}</div>
                </div>
            </Link>
        </div>
    )
}

export default MaterialDesignCard;