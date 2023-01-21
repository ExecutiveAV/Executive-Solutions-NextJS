import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebaseKeys';
import { getFirestore } from 'firebase/firestore';

export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);