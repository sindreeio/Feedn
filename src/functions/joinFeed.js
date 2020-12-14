import React from 'react';
import {db} from '../database/FirebaseConfig.js';
import firebase from 'firebase'


function joinFeed(userId, code){
    if (!(code === "")){
        const ref = db.collection("feeds").where("code", "==",code).get().then(querySnapshot => {
            querySnapshot.forEach(doc => 
            doc.update({
                members: firebase.firestore.FieldValue.arrayUnion(userId)
            })
        )
        })
    }
}


export default joinFeed; 