import React, { useEffect, useState } from 'react';
import {db} from '../../../database/FirebaseConfig.js';
import StandardButton from '../customButtons/standardButton.js';
import Button from './button.js'


function ReactionButton(props){
    const [hasReacted, setHasReacted] = useState([]);

    useEffect(()=>{
        db.collection("feeds").doc(props.feed).collection("posts").doc(props.post).collection(props.reaction).onSnapshot((snapshot) =>{
            let reacted =[];
            snapshot.forEach((e)=>{
                reacted.push(e.data().userId);
            })
            setHasReacted(reacted);
        }).catch((e)=>{
            console.log(e);
        })
    })

    const submit = () =>{
        if(hasReacted.includes(props.userId)){
            db.collection("feeds").doc(props.feed).collection("posts").doc(props.post).collection(props.reaction).doc(props.userId).delete();
        }
        else{
            db.collection("feeds").doc(props.feed).collection("posts").doc(props.post).collection(props.reaction).doc(props.userId).set({userId: props.userId});
        }
    }

    return(
        <div>
            {hasReacted.includes(props.userId) ? <Button reacted={true} text={props.reaction} action={submit}/> : <StandardButton reacted={false} text={props.reaction} action={submit}/>}
        </div>
    )
}