import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { VITE_API_KEY, VITE_PROJECT_ID } from '@env'

const firebaseConfig = {
    apiKey: VITE_API_KEY,
    authDomain: VITE_PROJECT_ID + '.firebaseapp.com',
    projectId: VITE_PROJECT_ID,
    storageBucket: VITE_PROJECT_ID + ".appspot.com",
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(firebaseApp);

// Si descomentas la siguiente línea, cuando mientras que el usuario no se desloguee expresamente o cierre el navegador, permanecerá logueado y podremos acceder a su id desde cualquier página
setPersistence(auth, browserLocalPersistence);