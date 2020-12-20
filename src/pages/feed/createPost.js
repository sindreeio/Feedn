import firebase from '@firebase/app';
import '@firebase/firestore' 
import FeedChips from '../../components/createPost/feedChips';
import { useEffect, useState } from 'react';
import {Redirect, useParams} from 'react-router-dom';
import {db, firebaseAuth} from '../../database/FirebaseConfig';
import './createPost.css';
import Navbar from '../../components/navbar/navbar';
import MaterialDesignFilledButton from '../../components/buttons/materialDesignFilledButton';


function CreatePost() {

    let {feedId} = useParams();
    const [text, setText] = useState("");
    const [chips, setChips] = useState([]);
    const [userID, setUID] = useState("");
    const [redirectToFeeds, setRedirect] = useState(false);
    useEffect(() => {
        firebaseAuth.onAuthStateChanged(function(user) {
            setUID(user.uid);
        })
        if (!(userID === "")){
            db.collection("users").doc(userID).get().then(function(doc) {
                if(doc.exists) {
                    const feeds = doc.data().member_of;
                    if (feeds) {
                        const index = feeds.findIndex((chip) => chip.id === feedId);
                        if(index) {
                            const temp = [];
                            feeds.map((fee) => (
                                (fee.id === feedId) ?
                                temp.unshift({id: fee.id, name: fee.name, selected: true}) :
                                temp.push({id: fee.id, name: fee.name, selected: false})
                                )
                            );
                            setChips(temp);
                        } else {
                            setRedirect(true);
                        }
                    } 
                }

            });
            
        }
    }, [userID])


    const publish = () => {
        chips.map((chip) => (
            (chip.selected === true) ?
            db.collection("feeds").doc(chip.id).collection("posts").add({owner: userID, text: text, timestamp: firebase.firestore.FieldValue.serverTimestamp()}) :
            null
        ));
        setRedirect(true);
        }

    return(
        <div>
            {redirectToFeeds ? <Redirect to={`/feeds/${feedId}`}/> : null}
            <Navbar/>
            <div className="cp_center">
                <div className="cp_content">
                    <div className="cp_input">
                        <textarea className="cp_input_attriute" onChange={(txt) => (setText(txt.target.value))} placeholder="Kjære feedn..."></textarea>
                    </div>
                    <div className="cp_chip_containter">
                        <FeedChips chips={chips} setChips={setChips}/> 
                    </div>
                    <div className="cp_button">
                        <MaterialDesignFilledButton action={publish} buttonText={"publish"}/>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CreatePost;