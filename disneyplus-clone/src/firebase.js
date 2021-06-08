import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDW5EfllLFFwZJMosoa1eNF9kg1Qph5Ncc",
  authDomain: "disneyplus-clone-8d998.firebaseapp.com",
  projectId: "disneyplus-clone-8d998",
  storageBucket: "disneyplus-clone-8d998.appspot.com",
  messagingSenderId: "627318630510",
  appId: "1:627318630510:web:cb27cd8d21ae712bdade7f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage(); //to store images and videos

export { auth, provider, storage };
export default db;
