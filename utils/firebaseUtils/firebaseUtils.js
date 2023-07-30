import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG);

export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);