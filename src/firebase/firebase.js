import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyD5QxZ0_imrWAx4tG3MF5hq9di-RYZLDY8",
    authDomain: "shoppify-4a323.firebaseapp.com",
    databaseURL: "https://shoppify-4a323.firebaseio.com",
    projectId: "shoppify-4a323",
    storageBucket: "shoppify-4a323.appspot.com",
    messagingSenderId: "977234476657",
    appId: "1:977234476657:web:e404299044cd28634125d0",
    measurementId: "G-YD48HXRDPV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const createUserProfile = async (userAuth, additionalInformation) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const {displayName,email,} = userAuth;
      const createAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalInformation
        })
      } catch (error) {
        console.log('Error creating users', error.message)
      }
    }
    return userRef
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
 


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;