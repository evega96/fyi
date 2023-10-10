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

const AddUbication = () => {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Cancel />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>
                        Selecciona una ubicación
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
                            placeholder="Añadir Ubicación"
                            style={styles.textInput}
                            multiline={true}
                            placeholderTextColor="#9CA3AF"
                            textAlignVertical="center"
                        />
                    </View>
                </View>

                <View style={styles.user}>
                    <View style={styles.information}>
                        <Text style={{ color: "white" }}>Barcelona</Text>
                        <Text style={{ color: "white" }}>5,6 km</Text>
                    </View>
                </View>
                <View style={styles.user}>
                    <View style={styles.information}>
                        <Text style={{ color: "white" }}>
                            Sant Andreu de Palomar
                        </Text>
                        <Text style={{ color: "white" }}>5,6 km</Text>
                    </View>
                </View>
                <View style={styles.user}>
                    <View style={styles.information}>
                        <Text style={{ color: "white" }}>
                            Sant Andreu, Cataluna Spain
                        </Text>
                        <Text style={{ color: "white" }}>5,6 km</Text>
                    </View>
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
        justifyContent: "space-between",
        marginTop: 15,
    },
    image: {
        width: 45,
        height: 43,
        borderWidth: 1,
        borderColor: "blue",
    },
    information: {
        width: 320,
        height: 43,
        marginLeft: 40,
        borderWidth: 1,
        borderColor: "blue",
    },
    imageuser: {
        width: 50,
        height: 50,
        borderRadius: 20,
    },
});
export default AddUbication;
