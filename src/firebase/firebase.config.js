// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-i84z6w_E3TO7Irsqlk0n_cmGY4i4qhw",
    authDomain: "chef-house-auth.firebaseapp.com",
    projectId: "chef-house-auth",
    storageBucket: "chef-house-auth.appspot.com",
    messagingSenderId: "365670016619",
    appId: "1:365670016619:web:369906b51e4cb43033b32e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;