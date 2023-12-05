// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDmNO3E3_O6kKyZqHnTpmB_wHcOYoqImaY',
  authDomain: 'realtor-clone-react-8a1f9.firebaseapp.com',
  projectId: 'realtor-clone-react-8a1f9',
  storageBucket: 'realtor-clone-react-8a1f9.appspot.com',
  messagingSenderId: '958174270517',
  appId: '1:958174270517:web:a9ac5dde4b55e83f910d7c',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
