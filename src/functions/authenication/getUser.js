import {firebaseAuth} from '../../database/FirebaseConfig'

function GetUser(){
    const signedInUser = null;
    firebaseAuth.onAuthStateChanged(function(user) {
        if (user) {
            signedInUser = user;
        }
    })
    return signedInUser;

}

export default GetUser;