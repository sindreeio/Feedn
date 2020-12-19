import React, { useState } from "react";
import Btn from "../buttons/customButtons/standardButton.js";
import { db } from "../../database/FirebaseConfig.js";
import firebase from "firebase";

function AddComment(props){
    const [text, setText] = useState("");

    const submit = (event) =>{
        event.preventDefault();
        console.log(text);
        db.collection("feeds").doc(props.feed).collection("posts").doc(props.post).collection("comments").add({
            timestamp: firebase.firestore.Timestamp.now(),
            text: text,
            author: props.userId,
        })
        setText("");
    }

    return(
        <div id="inputField" className="heightLimit">
            <form  onSubmit={submit}>
            <input value={text} className="field" placeholder="Legg til kommentar" onChange={(e)=> setText(e.target.value)}></input>

            </form>
        </div>
    )
}

export default AddComment;