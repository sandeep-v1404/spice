// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    signInWithEmailAndPassword,
    signOut,
    getAuth
} from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLs25CqoPTRK0g0GaKv--yY3aQS2lwU3k",
    authDomain: "web2all-allolab.firebaseapp.com",
    databaseURL: "https://web2all-allolab.firebaseio.com",
    projectId: "web2all-allolab",
    storageBucket: "web2all-allolab.appspot.com",
    messagingSenderId: "365248641202",
    appId: "1:365248641202:web:ded56bb6a1d4e9ee42b1ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// FireStore
const db = getFirestore(app);

export const getResponses = async () => {
    const responseSnapShots = await getDocs(collection(db, "responses"));
    const responseLists = responseSnapShots.docs.map(doc => doc.data());
    return responseLists;
}

export const addResponse = async (object) => {
    try {
        await addDoc(collection(db, "responses"), object);
    } catch (e) { console.error(e); }
}

// Email and Password Authentication
export const auth = getAuth();

export const signInCustom = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    console.log("user " + userCredential.user)
    // Do something with userCredential if you want to
}


export const signOutCustom = async () => {
    await signOut(auth)
        .catch(err => console.log(err));
}

export const getCurrentUser = () => auth.currentUser;