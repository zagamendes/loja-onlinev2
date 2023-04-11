// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCd2M1vnoVc9yXPCN-ILSiqu9EE4G24BYU',
  authDomain: 'lojaonline-f4c15.firebaseapp.com',
  projectId: 'lojaonline-f4c15',
  storageBucket: 'lojaonline-f4c15.appspot.com',
  messagingSenderId: '460707778994',
  appId: '1:460707778994:web:7fe497f1a97bf9502294ab',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
