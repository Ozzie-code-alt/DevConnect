// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAvz_73YGl3ppOo9apzb5My9pdtDa-SVJk',
  authDomain: 'fir-social-media-platform.firebaseapp.com',
  projectId: 'fir-social-media-platform',
  storageBucket: 'fir-social-media-platform.firebasestorage.app',
  messagingSenderId: '812661427722',
  appId: '1:812661427722:web:2854228abc2f5755d319f3',
  measurementId: 'G-6S0ZCBN47D'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();



export { app, provider, auth };
