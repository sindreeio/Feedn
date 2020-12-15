import React from 'react';
import {db} from '../database/FirebaseConfig.js';
import firebase from 'firebase'


function joinFeed(userId, code){
    var code = parseInt(code);

    if ((code >0)){
        const ref = db.collection("feeds").where("code", "==", code).get().then(querySnapshot => {
            console.log(querySnapshot.size)
            querySnapshot.forEach(doc => {
                db.collection("feeds").doc(doc.id).update({members: firebase.firestore.FieldValue.arrayUnion(userId)});
            console.log(doc.id);
          //  doc.update({
        //        members: firebase.firestore.FieldValue.arrayUnion(userId)
      //      })
        })
        })
    }
}


export default joinFeed; 