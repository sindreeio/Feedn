import { db } from '../database/FirebaseConfig.js';


    const getFeedsOfUser = (userId, setFeeds) =>{
        db.collection("feeds").where("members", 'array-contains', userId).onSnapshot(
            function(querySnapshot) {
                let feed =[];
                querySnapshot.forEach(function(doc) {
                    feed.push(doc);
                });
                console.log(feed);
                setFeeds(feed);
            })
}

export default getFeedsOfUser;