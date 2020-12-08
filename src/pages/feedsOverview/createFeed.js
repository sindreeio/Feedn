import React, { useEffect, useState } from 'react';
import './feedsOverview.css';
import Navbar from '../../components/navbar/navbar.js';
import Group from '../../media/img/group.png';
import MaterialDesignField from '../../components/inputfields/MaterialDesignField';
import '../../pages/authentication/login.css';
import StandardButton from '../../components/buttons/customButtons/standardButton.js';
import {db, firebaseAuth, storage} from '../../database/FirebaseConfig';
import {Link} from 'react-router-dom';


function uploadImage(){
    
}



function CreateFeed(){
    const [name, setName] = useState("");
    const [userID, setUID] = useState("")
    useEffect(() => {
        firebaseAuth.onAuthStateChanged(function(user) {
            setUID(user.uid)
        })
    },[])

   const submit = () =>{
       if(!(name === "")){        
        db.collection("feeds").add({name: name, members:[userID], code: Date.now()})
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            const ref = db.collection("users").doc(userID);
            db.runTransaction(transaction => {
                return transaction.get(ref).then(doc => {
                    if (!doc.data().member_of) {
                        transaction.set({
                            member_of: [docRef.id]
                        });
                    } else {
                        const member_of = doc.data().member_of;
                        member_of.push(docRef.id);
                        transaction.update(ref, { member_of });
                    }
                });
            })
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
    }


    return(
        <div>
            <Navbar/>
             <div className="center">
                <div className="feeds_container">
                    <div className="header">Lag ny feed</div>
                    <div className="Content">
                        <img className="group_image" src={Group}></img>
                        <div className="mar">
                            <MaterialDesignField setFunction={setName} label="Navn" type="text" id="name"/>
                        </div>
                        <div className="mar">
                            <div className="button_width">
                            <Link style={{ textDecoration: 'none' }} to="/feeds">
                                <StandardButton text="Opprett" action={submit}/>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default CreateFeed;