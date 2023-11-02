import { initializeApp, getApp } from "firebase/app";
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";



// import {...} from "firebase/database";
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_PROJECT_ID + ".firebaseapp.com",
  databaseURL: process.env.EXPO_PUBLIC_PROJECT_ID + ".firebaseio.com",
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_PROJECT_ID + ".appspot.com",
  messagingSenderId: "744259670184",
  appId: "1:744259670184:web:ac316857ea9ffc49a0729d",
};

// initialize Firebase App
const app = initializeApp(firebaseConfig);
// initialize Firebase Db  and Auth
export const db = getFirestore();

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const storage = getStorage(app);
export { app, auth, getApp, getAuth };
