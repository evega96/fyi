import {
  collection,
  getDocs,
  query,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  setDoc,
  where,
} from "firebase/firestore";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { db, auth } from "./firebase";
import { beginAsyncEvent } from "react-native/Libraries/Performance/Systrace";

const collectionName = "chat";

// CREATE
export const createItem = async (obj) => {
  const colRef = collection(db, collectionName);
  const data = await addDoc(colRef, obj);
  return data.id;
};

// UPDATE
export const updateItem = async (id, obj) => {
  const docRef = doc(db, collectionName, id);
  await updateDoc(docRef, obj);
};

// READ
export const getItems = async () => {
  const colRef = collection(db, collectionName);
  const result = await getDocs(query(colRef));
  return getArrayFromCollection(result);
};

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (value) => {
  const colRef = collection(db, collectionName);
  const result = await getDocs(query(colRef, where("age", "==", value)));
  return getArrayFromCollection(result);
};

export const getItemById = async (id) => {
  const docRef = doc(db, collectionName, id);
  const result = await getDoc(docRef);
  return result.data();
};

// DELETE
export const deleteItem = async (id) => {
  const docRef = doc(db, collectionName, id);
  await deleteDoc(docRef);
};

const getArrayFromCollection = (collection) => {
  return collection.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
};

//Sign Up and Sign In

export const signUp = async (email, password, userLog, birthday, isTattooArtist, sanitaryHygieneTitle, vaccines) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const userData = {
      user: userLog,
      birthday: birthday,
      isTattooArtist: isTattooArtist,
      sanitaryHygieneTitle: sanitaryHygieneTitle,
      vaccines: vaccines,
    };
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), userData);
    console.log(user);
    return user.uid;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

export const signIn = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log(result);
    return result.user.uid;
  } catch (err) {
    console.log(err);
    return err.message;
  }
};

export const getCurrentUserId = async () => await auth.currentUser?.uid;
export const tattooArtist = async (user) => await auth.currentUser?.isTattooArtist;
export const logout = async () => await signOut(auth);
