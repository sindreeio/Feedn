import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/navbar.js';
import './feedsOverview.css';
import MaterialDesignCard from '../../components/cards/materialDesignCard.js'
import { db, firebaseAuth } from '../../database/FirebaseConfig.js';
import firebase from "firebase";
import MaterialDesignFloatingButtonText from '../../components/buttons/materialDesignFloatingText.js'
import { Link } from 'react-router-dom';


const getFeedsOfUser = (userId, setFeeds) =>{
    db.collection("users").doc(userId).onSnapshot(function(doc) {
        db.collection("feeds").where(firebase.firestore.FieldPath.documentId(), 'in', doc.data().member_of).onSnapshot(
            function(querySnapshot) {
                let feed =[];
                querySnapshot.forEach(function(doc) {
                    feed.push(doc);
                });
                setFeeds(feed);
            })
    })
}



function FeedOverview(){
    const [feeds, setFeeds] = useState([]);
    const [userID, setUID] = useState("")
    useEffect(() => {
        firebaseAuth.onAuthStateChanged(function(user) {
            setUID(user.uid);
        })
        if (!(userID === "")){
            getFeedsOfUser(userID, setFeeds);
        }
        
    }, [userID])
    
    const feedsCards = feeds.map((fee) => (          
        <div className="card_div">
            <MaterialDesignCard id={fee.id} name={fee.data().name} code={fee.data().code}/>
        </div>
        ));

    return(
        <div>   
            <Navbar/>
            <div className="center">
                <div className="feeds_container">
                    <div className="header">Dine feeder</div>
                    <div className="center">
                        <div className="grid">
                            {feedsCards}
                        </div>
                    </div>
                </div>
            </div>
                <MaterialDesignFloatingButtonText to="/createFeed" text="Opprett ny feed"/>
        </div>
    )
}

export default FeedOverview;