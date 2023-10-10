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
    updateProfile,
} from "firebase/auth";
import { db, auth, storage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// CREATE
export const createItem = async (obj, collectionName) => {
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
    displayName,
    birthday,
    sanitaryHygieneTitle,
    vaccines,
    role
) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        await updateProfile(auth.currentUser, {
            displayName: displayName, // Aquí puedes asignar el displayName que desees
        });
        const userData = {
            email,
            displayName,
            birthday,
            sanitaryHygieneTitle,
            vaccines,
            role,
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

export const getCurrentUserId = async () => await auth.currentUser?.uid;
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
//storage

export const uploadImageToFirebase = async (imageUri, documentInformation) => {
    try {
        const blobImage = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function () {
                reject(TypeError("Network request failed"));
            };
            xhr.responseType = "blob";
            xhr.open("GET", imageUri, true);
            xhr.send(null);
        });

        // Set data type
        /** @type{any}*/
        const metadata = {
            contentType: "image/jpeg",
        };

        // Genera un nombre único para la imagen o utiliza el nombre original
        const uniqueImageName = `${Math.random()}-${new Date().getTime()}.jpg`;

        const storageRef = ref(storage, `images/ ${uniqueImageName}`); // Utiliza la instancia de Firebase Storage

        await uploadBytesResumable(storageRef, blobImage, metadata);

        // documentation

        const imageUrl = await getDownloadURL(storageRef);
        // Agrega la URL de la imagen a los datos del documento

        documentInformation.imageUrl = imageUrl;

        // Crea una referencia a una colección en Firestore (puedes cambiar "publications" por el nombre de tu colección)
        const collectionRef = collection(db, "publications");

        // Agrega un nuevo documento con ID generado automáticamente
        const newDocumentRef = doc(collectionRef);

        // Establece los datos en el nuevo documento
        await setDoc(newDocumentRef, documentInformation);

        // Obtiene el ID del documento recién creado
        const documentid = newDocumentRef.id;

        return { imageUrl, documentid };
    } catch (error) {
        console.error("Error al subir la imagen a Firebase Storage:", error);
        throw error;
    }
};

export const uploadImage = async (image) => {
    const blobImage = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.onerror = function () {
            reject(TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", image, true);
        xhr.send(null);
    });

    // Set data type
    /** @type{any}*/
    const metadata = {
        contentType: "image/jpeg",
    };
    // Upload image to storage
    const storageRef = ref(storage, "images/" + Date.now());
    const uploadTask = uploadBytesResumable(storageRef, blobImage, metadata);
    let rr = "";
    // Listen for state changes, errors, and completion of the upload.
    const p = await uploadTask.on(
        "state_changed",
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
                case "paused":
                    console.log("Upload is paused");
                    break;
                case "running":
                    console.log("Upload is running");
                    break;
            }
        },
        (error) => {
            // Handle errors
            console.error("Upload error:", error);
        },
        async () => {
            // Upload completed successfully, now we can get the download URL
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

            console.log("File available at", downloadURL);
            rr = downloadURL;
            return downloadURL;
        }
    );
};

//get name By name

export const getPersonByName = async (name) => {
    const usersRef = collection(db, "users");

    // Consulta para buscar usuarios cuyos nombres comiencen con la cadena 'name'
    const consult = query(
        usersRef,
        where("displayName", ">=", name),
        where("displayName", "<", name + "z") // 'z' es un carácter máximo, puedes ajustarlo según tus necesidades
    );

    try {
        const querySnapshot = await getDocs(consult);
        const results = [];

        querySnapshot.forEach((doc) => {
            const result = {
                id: doc.id,
                data: doc.data(),
            };
            results.push(result);
        });

        return results;
    } catch (error) {
        console.error("Error al obtener documentos:", error);
        throw error;
    }
};
