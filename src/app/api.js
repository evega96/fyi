import {
  collection,
  getDocs,
  query,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  onSnapshot,
  updateDoc,
  setDoc,
  where
} from "firebase/firestore";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";

import { db, auth, storage } from "./firebase";

const collectionNameMsgs = 'msgs';

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

export const signUp = async (
  email,
  password,
  userLog,
  birthday,
  sanitaryHygieneTitle,
  vaccines,
  role,
  preferences
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(auth.currentUser.uid, userLog, birthday, sanitaryHygieneTitle, vaccines, role, preferences)
    const userData = {
      id: auth.currentUser.uid,
      user: userLog,
      birthday: birthday,
      sanitaryHygieneTitle: sanitaryHygieneTitle,
      vaccines: vaccines,
      role: role,
      preferences: preferences
    };
    const user = userCredential.user;
    // Guardar los datos del usuario en la base de datos
    await setDoc(doc(db, "users", user.uid), userData);
    // Retornar un objeto con el ID del usuario y el role
    return user.uid;
  } catch (err) {
    console.log(err);
    throw err.message;
  }
};

export const signIn = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log(result);
    return result.user.uid;
  } catch (err) {
    console.log("Error codigo pablo: ", err);
    throw err.message;
  }
};

export const getCurrentUserId = async () => await auth.currentUser.uid;



export const tattooArtist = async (user) =>
  await auth.currentUser?.isTattooArtist;
export const logout = async () => await signOut(auth);

//Making a consult to get the rol of the user
export const getUserRole = async (userId) => {
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const userData = docSnap.data();
      return userData.role;
    } else {
      return null;
    }
  } catch (error) {
    console.error("There is a problem to get the rol of the user:", error);
    return null;
  }
};


export const createImageLike = async (obj) => {
  const id = await getCurrentUserId();
  const colRef = collection(db, 'users', id, 'like');
  const data = await addDoc(colRef, obj);
  return data.id;
};

export const createImageFav = async (obj) => {
  const id = await getCurrentUserId();
  const colRef = collection(db, 'users', id, 'fav');
  const data = await addDoc(colRef, obj);
  return data.id;
};



export const getMsgs = async () => {
  const colRef = collection(db, collectionNameMsgs);
  const result = await getDocs(query(colRef));
  return getArrayFromCollection(result);
}

export const createMsg = async (roomCode, userId, msg) => {
  try {
    const colRef = collection(db, 'rooms', roomCode, collectionName);
    const data = await addDoc(colRef, { userId, msg, date: Date.now() });

    // Actualiza la información de la sala de chat para almacenar el ID del usuario que la creó
    const roomDocRef = doc(db, 'rooms', roomCode);
    await setDoc(roomDocRef, { createdBy: userId }, { merge: true });

    return data.id;
  } catch (e) {
    console.log(e)
  }
}


const getArrayFromCollectionMsg = (collection) => {
  const msgs = collection.docs.map(doc => {
    return { ...doc.data(), id: doc.id };
  });

  return msgs.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.date) - new Date(b.date);
  });
}


export const onMsgsUpdated = (roomId, callback) => onSnapshot(collection(db, 'rooms', roomId, 'msgs'), (docs) => {
  callback(getArrayFromCollection(docs));
});


export const getOrCreateRoom = async (roomCode) => {
  try {
    const roomCodeIfExists = await getRoomById(roomCode);
    if (!roomCodeIfExists) {
      const docRef = doc(db, 'rooms', roomCode);
      await setDoc(docRef, {});
    }
    return roomCode;

  } catch (e) {
    console.log(e)
  }
}

export const getRoomById = async (roomId) => {
  const docRef = doc(db, 'rooms', roomId);
  const result = await getDoc(docRef);
  return result.data();
}

export const getAuthorIdByName = async (authorName) => {
  try {
    const usersCollectionRef = collection(db, 'users');
    const querySnapshot = await getDocs(usersCollectionRef);

    for (const doc of querySnapshot.docs) {
      const userData = doc.data();
      console.log(authorName);
      if (userData.user === authorName) {
        return doc.id; // Devuelve la ID del usuario con el nombre especificado
      }
    }

    // Si no se encuentra ningún usuario con ese nombre, puedes devolver null o algún otro valor indicativo.
    return null;
  } catch (error) {
    console.error("Error al buscar el ID del usuario por nombre:", error);
    return null;
  }
}

export const getUserChatRooms = async (userId) => {
  try {
    const userChatRooms = [];

    console.log('777777777', userId)
    // Consulta las salas de chat donde el usuario actual es miembro
    const chatRoomsQuery = query(
      collection(db, "rooms"),
      where("members", "array-contains", userId) // Supongamos que tienes un campo "members" en tus salas de chat
    );

    const querySnapshot = await getDocs(chatRoomsQuery);

    // Recorre los resultados y agrega los códigos de sala a la lista
    querySnapshot.forEach((doc) => {
      userChatRooms.push(doc.id);
    });

    return userChatRooms;
  } catch (error) {
    console.error("Error al obtener las salas de chat del usuario:", error);
    return [];
  }
};