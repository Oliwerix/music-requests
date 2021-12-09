import firebase from '@firebase/app';

import { initializeApp } from "@firebase/app";

// import 'firebase/auth';
import '@firebase/firestore';

// import {firestore} from'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyB064gl135IRMhL2c5JYvPPdatpT6bhUJg",
    authDomain: "music-requests-123.firebaseapp.com",
    projectId: "music-requests-123",
    storageBucket: "music-requests-123.appspot.com",
    messagingSenderId: "678082532503",
    appId: "1:678082532503:web:e75af6a59a88a4a008c5d2",
    measurementId: "${config.measurementId}"
  };
  

initializeApp(firebaseConfig);

// export const auth = firebase.auth();
// export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();
