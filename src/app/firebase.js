import { initializeApp, getApp } from "firebase/app";
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// import {...} from "firebase/database";
import { getFirestore } from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";
import { VITE_API_KEY, VITE_PROJECT_ID } from "@env";

const firebaseConfig = {
  apiKey: "AIzaSyBtUCHHU3Y3zs8-o-oErQEBzAZPaI_Ycaw",
  authDomain: "findyourink-5d885.firebaseapp.com",
  databaseURL: "https://findyourink-5d885.firebaseio.com",
  projectId: "findyourink-5d885",
  storageBucket: "findyourink-5d885.appspot.com",
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
export { app, auth, getApp, getAuth };
