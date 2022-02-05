// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBSHkr5xaOKCJLbMKyKDOFFMKFMla-YmDU",

  authDomain: "shoppable-3df0f.firebaseapp.com",

  projectId: "shoppable-3df0f",

  storageBucket: "shoppable-3df0f.appspot.com",

  messagingSenderId: "520681082801",

  appId: "1:520681082801:web:fb97611500d5d37f07b790"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app