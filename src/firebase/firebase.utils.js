import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAc_TlhSHd2s04KnLBwwk8K1WAa-0QqqBY",
  authDomain: "crwn-clothing-3ae1b.firebaseapp.com",
  projectId: "crwn-clothing-3ae1b",
  storageBucket: "crwn-clothing-3ae1b.appspot.com",
  messagingSenderId: "169654129273",
  appId: "1:169654129273:web:f456ffae9f7fe00a5fbaa8",
  measurementId: "G-84M5HGSWGJ",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
