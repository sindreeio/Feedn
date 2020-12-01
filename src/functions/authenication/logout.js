import firebase from 'firebase';

   const signOut = () => {
    firebase.auth().signOut();
      
}

export default signOut;