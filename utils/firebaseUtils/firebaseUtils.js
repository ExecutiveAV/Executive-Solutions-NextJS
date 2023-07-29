import { initializeApp } from 'firebase/app';
// import firebaseConfig from '../../firebaseKeys';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);

export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);