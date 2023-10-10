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
import { getPersonByName } from "../../app/api";

const TagPerson = () => {
    const [users, setUsers] = useState([]);
    const [data, setData] = useState("");
    const navigation = useNavigation();

    // Llamar a getResult cuando data cambie
    useEffect(() => {
        if (data.length >= 1) {
            getResult();
        } else {
            setUsers([]); // Limpiar la lista de usuarios si la entrada es demasiado corta
        }
    }, [data]);

    const handleUserChange = (text) => {
        setData(text); // Actualiza el estado user con el texto ingresado en el TextInput
    };

    const getResult = async () => {
        const result = await getPersonByName(data);
        // Limitar la lista a los primeros 10 registros
        setUsers(result.slice(0, 10));
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Cancel />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>
                        Selecciona una persona
                    </Text>
                </View>
                <View style={styles.middleTols}>
                    <View style={styles.inputContainer}>
                        <TouchableOpacity onPress={() => getResult()}>
                            <MagnifierIcon style={styles.icon} />
                        </TouchableOpacity>
                        <TextInput
                            placeholder="Buscar una persona"
                            style={styles.textInput}
                            multiline={true}
                            placeholderTextColor="#9CA3AF"
                            textAlignVertical="center"
                            onChangeText={handleUserChange}
                        />
                    </View>
                </View>
                {users &&
                    users.map((user) => (
                        <View key={user.id} style={styles.user}>
                            <View style={styles.image}>
                                {/* <Image
                                    source={{ uri: ImageUser }}
                                    style={styles.imageuser}
                                /> */}
                            </View>
                            <View style={styles.information}>
                                <Text style={{ color: "white" }}>
                                    {user.data.displayName}
                                </Text>
                                <Text style={{ color: "white" }}>
                                    @{user.data.displayName}
                                </Text>
                            </View>
                            <View style={styles.icon}>
                                <Cancel />
                            </View>
                        </View>
                    ))}
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
        width: 150,
        height: 43,
        borderWidth: 1,
        borderColor: "blue",
    },
    imageuser: {
        width: 50,
        height: 50,
        borderRadius: 20,
    },
});
export default TagPerson;
