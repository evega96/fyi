import React from "react";
import { useState } from "react";
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from "react-native";
import { uploadImageToFirebase } from "../../app/api";
import BackArrow from "../../components/Icons/BackArrow";
import { useContext } from "react";
import { AuthenticatedUserContext } from "../../Context/AuthContextProdiver";
import Persons from "../../components/Icons/Persons";
import Ubication from "../../components/Icons/Ubication";
import Tags from "../../components/Icons/Tags";
import Price from "../../components/Icons/Price";
const AddDetails = ({ route, navigation }) => {
    // Obtener la imagen seleccionada de las props de navegación
    const { selectedImage } = route.params;
    const user = useContext(AuthenticatedUserContext);
    console.log(user);

    const uploadImage = async () => {
        try {
            const result = await uploadImageToFirebase(selectedImage);
            // Ahora puedes usar imageUrl, que es la URL de la imagen cargada en Firebase
            console.log("Imagen cargada con éxito:", result);
            navigation.navigate("Publication", { result });
        } catch (error) {
            console.log("Error al cargar la imagen en Firebase:", error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <BackArrow />
                </TouchableOpacity>
                <Text style={styles.textHeader}>Nueva publicación</Text>
            </View>
            <View style={styles.imageInformation}>
                <View style={styles.userInformation}>
                    <Image
                        source={{ uri: selectedImage }}
                        style={styles.imageuser}
                    />
                    <TextInput
                        placeholder="Escribe una descripción"
                        style={styles.textInput}
                        multiline={true}
                        placeholderTextColor="#9CA3AF"
                    />
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: selectedImage }}
                        style={styles.image}
                    />
                </View>
            </View>
            <View style={styles.moreInformation}>
                <Persons />
                <Text style={styles.moreInformationText}>
                    Etiquetar Personas
                </Text>
            </View>
            <View style={styles.moreInformation}>
                <Ubication />
                <Text style={styles.moreInformationText}>Añadir Ubicación</Text>
            </View>
            <View style={styles.moreInformation}>
                <Tags />
                <Text style={styles.moreInformationText}>Tags</Text>
            </View>
            <View style={styles.moreInformation}>
                <Price />
                <Text style={styles.moreInformationText}>
                    Precio Orientativo
                </Text>
            </View>

            {/* Aquí puedes agregar más elementos y lógica para subir la imagen a Firebase */}
            <TouchableOpacity onPress={uploadImage}>
                <Text> uploadImage</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#313131",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 10,
    },
    imageInformation: {
        padding: 20,
    },
    userInformation: {
        flexDirection: "row",
        width: "100%",
        paddingBottom: 15,
    },
    textInput: {
        width: "80%",
        backgroundColor: "transparent",
        color: "#9CA3AF",
        paddingHorizontal: 20,
    },
    imageuser: {
        width: 50,
        height: 50,
        borderRadius: 20,
    },
    textHeader: {
        justifyContent: "center",
        color: "white",
    },
    imageContainer: {
        width: "100%",
        height: 324,
        resizeMode: "cover",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    moreInformation: {
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: "#4B5563",
        padding: 15,
    },
    moreInformationText: {
        paddingLeft: 15,
        fontSize: 20,
        color: "#FFFFFF",
    },
});

export default AddDetails;
