import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    SectionList,
    Button,
    TextInput,
    Alert,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MagnifierIcon from "../../components/Icons/MagnifierIcon";
import Cancel from "../../components/Icons/Cancel";
import ImageUser from "../../../assets/ProfileImage.png";
import Label from "../../components/Icons/Label";

const AddTags = () => {
    const [isInputFocused, setInputFocused] = useState(false);
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView
                style={
                    isInputFocused ? styles.containerFocused : styles.container
                }
            >
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Cancel />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>
                        Selecciona las categorías
                    </Text>
                </View>
                <View style={styles.middleTols}>
                    <View style={styles.inputContainer}>
                        <TouchableOpacity
                            onPress={() =>
                                Alert.alert(
                                    "Mensaje de alerta",
                                    "Hola, esta es una alerta"
                                )
                            }
                        >
                            <MagnifierIcon style={styles.icon} />
                        </TouchableOpacity>
                        <TextInput
                            placeholder="Añadir Etiquetas "
                            style={[
                                styles.textInput,
                                // Cambiar el estilo del TextInput cuando está enfocado
                                isInputFocused ? styles.focusedInput : null,
                            ]}
                            multiline={true}
                            placeholderTextColor="#9CA3AF"
                            textAlignVertical="center"
                            onFocus={() => setInputFocused(true)} // Manejar el enfoque
                            onBlur={() => setInputFocused(false)} // Manejar la pérdida de enfoque
                        />
                    </View>
                </View>

                <View style={styles.user}>
                    <View style={styles.image}>
                        <Label />
                    </View>
                    <View style={styles.information}>
                        <Text style={{ color: "white" }}>Tradicional</Text>
                        <Text style={{ color: "white" }}>1,5M posts</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                            navigation.navigate("AddDetails", {
                                selectedImage: lastImage,
                            })
                        }
                    >
                        <Text>Siguiente</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
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
        marginLeft: 40,
        fontSize: 16,
        color: "white",
    },
    middleTols: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 15,
    },
    inputContainer: {
        width: "80%",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: "transparent",
        height: 50,
        paddingVertical: 15,
    },
    icon: {
        marginLeft: 10,
    },
    textInput: {
        flex: 1,
        height: 50,
        backgroundColor: "transparent",
        color: "#9CA3AF",
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingTop: 15,
    },
    user: {
        borderWidth: 1,
        borderColor: "red",
        height: 43,
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 15,
    },
    image: {
        width: 45,
        height: 43,
        borderWidth: 1,
        borderColor: "blue",
    },
    information: {
        width: 150,
        height: 43,
        borderWidth: 1,
        borderColor: "blue",
    },
    imageuser: {
        width: 43,
        height: 43,
        borderRadius: 20,
    },
    containerFocused: {
        flex: 1,
        backgroundColor: "#000000", // Cambia el color de fondo a negro cuando está enfocado
    },
    buttonContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "transparent", // Cambia el color de fondo según tus preferencias
    },
    button: {
        position: "relative",
        right: 0,
        width: 100,
        padding: 15,
        backgroundColor: "#4B74F2",
        borderRadius: 20,
    },
});
export default AddTags;
