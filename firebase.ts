import { getFirestore } from "firebase/firestore";
import { getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCEEimU1Sfs2HnDq4VBxIPH2EGXVaEyfvQ",
  authDomain: "checkin-50679.firebaseapp.com",
  projectId: "checkin-50679",
  storageBucket: "checkin-50679.appspot.com",
  messagingSenderId: "887495918720",
  appId: "1:887495918720:web:c68b0727781dd20dce5265",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
