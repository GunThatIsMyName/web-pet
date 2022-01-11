import {initializeApp} from 'firebase/app';
import {getFirestore, collection} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const BASIC_API = process.env;

const firebaseConfig = {
  apiKey: BASIC_API.REACT_APP_API_KEY,
  authDomain: BASIC_API.REACT_APP_AUTH,
  projectId: BASIC_API.REACT_APP_PROJECT_ID,
  storageBucket: BASIC_API.REACT_APP_STORAGE,
  messagingSenderId: BASIC_API.REACT_APP_MESSAGE,
  appId: BASIC_API.REACT_APP_ID,
  measurementId: BASIC_API.REACT_APP_MEASURE_ID,
};

initializeApp(firebaseConfig);

export const db = getFirestore();
export const petStoreRef = collection(db, 'store');
export const usersRef = collection(db, 'users');
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
