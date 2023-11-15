
import React from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Home from "./Home"; // Asegúrate de que la ruta sea correcta
import Ionicons from "react-native-vector-icons/Ionicons";
import home from "../../../assets/home.png"; // Asegúrate de que la ruta sea correcta

import HomeScreen from "./Home"
import { Image } from "react-native";
import img from '../../../assets/Home.png'


const HomeConfig = {
    name: "Home",
    component: HomeScreen,
    options: {
        headerShown: true,
        headerTintColor: '#ffffff',
        tabBarIcon: () => <Image source={img} />,
    }
}

export default HomeConfig;