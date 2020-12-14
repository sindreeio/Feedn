import React from 'react';
import { db, firebaseAuth } from '../../database/FirebaseConfig.js';

export const getPosts = (feedId, setPosts) => {
    console.log(feedId);
    db.collection("feeds").doc(feedId).collection("posts").orderBy('timestamp','desc').onSnapshot(
        function(querySnapshot) {
            let posts =[];
            querySnapshot.forEach(function(doc) {
                posts.push(doc.data());
            });
            setPosts(posts);
        })
}