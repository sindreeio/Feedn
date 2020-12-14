import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/navbar.js';
import './feedsOverview.css';
import MaterialDesignCard from '../../components/cards/materialDesignCard.js'
import { db, firebaseAuth } from '../../database/FirebaseConfig.js';
import MaterialDesignFloatingButtonText from '../../components/buttons/materialDesignFloatingText.js'
import getFeedsOfUser from '../../functions/getFeedsOfUser';
import MaterialDesignField from '../../components/inputfields/MaterialDesignField';
import joinFeed from '../../functions/joinFeed';
import CustomButton from '../../components/buttons/customButtons/standardButton';


function FeedOverview(){
    const [feeds, setFeeds] = useState([]);
    const [userID, setUID] = useState("");
    const [code, setCode] = useState("")
    useEffect(() => {
        firebaseAuth.onAuthStateChanged(function(user) {
            setUID(user.uid);
        })
        if (!(userID === "")){
            getFeedsOfUser(userID, setFeeds);
            console.log(feeds)
        }
        
    }, [userID])
    
    const feedsCards = feeds.map((fee) => (          
        <div className="card_div">
            <MaterialDesignCard id={fee.id} name={fee.data().name} code={fee.data().code}/>
        </div>
        ));
    const submit = () =>{
        joinFeed(userID, code)
    }

    return(
        <div>  
            <Navbar/>
            <div className="center_div">
                <div className="feeds_container">
                    <div className="header">Dine feeder</div>
                    <div className="center_div">
                        <MaterialDesignField setFunction={setCode} label="Skriv inn kode" type="text" id="code"/>
                        <div className="button_size"><CustomButton text="Bli med i feed" action={submit}/></div>
                    </div>
                    <div className="center_div">
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