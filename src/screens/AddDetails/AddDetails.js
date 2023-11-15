import React from "react";
import { useState } from "react";
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { uploadImageToFirebase } from "../../app/api";
import BackArrow from "../../components/Icons/BackArrow";
import { useContext } from "react";
import { AuthenticatedUserContext } from "../../Context/AuthContextProdiver";
import Persons from "../../components/Icons/Persons";
import Ubication from "../../components/Icons/Ubication";
import Tags from "../../components/Icons/Tags";
import Price from "../../components/Icons/Price";
import Image1 from "../../../assets/ProfileImage.png";

const AddDetails = ({ route, navigation }) => {
    // Obtener la imagen seleccionada de las props de navegación
    const { selectedImage } = route.params;
    const user = useContext(AuthenticatedUserContext);
    const [text, setText] = useState("");
    console.log(user.user.uid);

    const documentInformation = {
        user_id: user.user.uid,
        ubicacion: "Barcelona",
        PersonasTags: "",
        Tags: "",
        Price: "",
        coments: "",
        favorite: "",
        text: text,
    };

    const uploadImage2 = async () => {
        try {
            const result = await uploadImageToFirebase(
                selectedImage,
                documentInformation
            );
            // Ahora puedes usar imageUrl, que es la URL de la imagen cargada en Firebase
            console.log("Imagen cargada con éxito:", result);
            navigation.navigate("Publication", { result });
        } catch (error) {
            console.log("Error al cargar la imagen en Firebase:", error);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                
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
                            onChangeText={setText}
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
                    <TouchableOpacity
                        onPress={() => navigation.navigate("TagPerson")}
                    >
                        <Persons />
                        <Text style={styles.moreInformationText}>
                            Etiquetar Persona
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.moreInformation}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("AddUbication")}
                    >
                        <Ubication />
                        <Text style={styles.moreInformationText}>
                            Añadir Ubicación
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.moreInformation}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("AddTags")}
                    >
                        <Tags />
                        <Text style={styles.moreInformationText}>Tags</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.moreInformation}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Favorite")}
                    >
                        <Price />
                        <Text style={styles.moreInformationText}>
                            Precio Orientativo
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* Aquí puedes agregar más elementos y lógica para subir la imagen a Firebase */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => uploadImage2()}
                >
                    <Text>Siguiente</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#313131",
    },
    header: {
        flexDirection: "row",
        margin: 10,
    },
    textHeader: {
        justifyContent: "center",
        marginLeft: 60,
        fontSize: 16,
        color: "white",
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
        paddingLeft: 50,
        fontSize: 20,
        marginTop: -20,
        color: "#FFFFFF",
    },
    button: {
        position: "absolute",
        alignItems: "center",
        marginLeft: 150,
        top: 700,
        padding: 20,
        backgroundColor: "#4B74F2",
        color: "#FFFFFF",
        borderRadius: 20,
    },
});

export default AddDetails;
