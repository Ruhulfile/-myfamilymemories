// =======================================

// My Family Memories - Firebase v3

// =======================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

// Firebase Configuration

const firebaseConfig = {

  apiKey: "AIzaSyAtKtCvzJcSzopF68cVDwSyM3cgonPCTUA",

  authDomain: "myfamilymemories-2bea8.firebaseapp.com",

  projectId: "myfamilymemories-2bea8",

  storageBucket: "myfamilymemories-2bea8.firebasestorage.app",

  messagingSenderId: "741638122470",

  appId: "1:741638122470:web:89772162225d7bfc818427",

  measurementId: "G-6N3T1NZBKL"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

// Services

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;
