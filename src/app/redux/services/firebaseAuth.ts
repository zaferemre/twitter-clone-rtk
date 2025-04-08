import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAdUq22m9ZUmRv2WX5hX5PS0sKMCvFdQfk",
  authDomain: "twitter-clone-rtk.firebaseapp.com",
  projectId: "twitter-clone-rtk",
  storageBucket: "twitter-clone-rtk.firebasestorage.app",
  messagingSenderId: "137201519200",
  appId: "1:137201519200:web:d94ec31fce196f684c1105",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const store = getStorage(app);

export { db, auth, store, GoogleAuthProvider };
export default db;
