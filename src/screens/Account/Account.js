import React, { useContext } from "react";
import { View, Text, Pressable, Button, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { logout } from "../../app/api";
import { useNavigation } from "@react-navigation/native";
import { AuthenticatedUserContext } from "../../Context/AuthContextProdiver";

const Account = ({ route }) => {
    const onhandleLogout = () => {
        logout();
    };
    const navigation = useNavigation();
    return (
        <View>
            <Text>Screen: {route.name}</Text>
            <Ionicons name="home" size={30} color="#6451a5" />

            <Pressable onPress={onhandleLogout}>
                <Text>Cerrar sesión</Text>
            </Pressable>
        </View>
    );
};

export default Account;
