import {db, messaging} from '../../database/FirebaseConfig';
export const askForPermissioToReceiveNotifications = async (uid) => {
    try {
      const token = await messaging.getToken();
      console.log('token', token);
      db.collection("users").doc(uid).update({token:token});
      
      return token;
    } catch (error) {
      console.error(error);
    }
  }

  