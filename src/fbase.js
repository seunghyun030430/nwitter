import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB5HC-YI75RjW3DRVBM4MppSOIznjtZxx0",
    authDomain: "nwitter-ee020.firebaseapp.com",
    databaseURL: "https://nwitter-ee020-default-rtdb.firebaseio.com",
    projectId: "nwitter-ee020",
    storageBucket: "nwitter-ee020.appspot.com",
    messagingSenderId: "61085597393",
    appId: "1:61085597393:web:9610b62eabd6d7a9d44ff0",
};


const firebaseApp = initializeApp(firebaseConfig);
export const dbService = getFirestore();
export const authService = getAuth(firebaseApp);
