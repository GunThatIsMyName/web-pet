import {initializeApp} from 'firebase/app';
import {getFirestore, collection} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyCfz6XNrtCzIi4cRaWwygI6jZUO5cQZdBE',
  authDomain: 'web-pet-94891.firebaseapp.com',
  projectId: 'web-pet-94891',
  storageBucket: 'web-pet-94891.appspot.com',
  messagingSenderId: '334997553483',
  appId: '1:334997553483:web:de1f3416efb9ebbc8268ce',
  measurementId: 'G-KB4K14HE5T',
};

initializeApp(firebaseConfig);

export const db = getFirestore();
export const petStoreRef = collection(db, 'store');
export const usersRef = collection(db, 'users');
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
