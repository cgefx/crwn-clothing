import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDtH1_V1i3V4z0-vIgUdTgXcxAsxWNXlAI",
  authDomain: "crwn-db-af3aa.firebaseapp.com",
  databaseURL: "https://crwn-db-af3aa.firebaseio.com",
  projectId: "crwn-db-af3aa",
  storageBucket: "crwn-db-af3aa.appspot.com",
  messagingSenderId: "93104919619",
  appId: "1:93104919619:web:4baed95c97754263cbf0f6",
  measurementId: "G-FFXGWZKMT5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;