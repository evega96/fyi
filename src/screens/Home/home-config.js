
import React from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";

import HomeScreen from "./Home"
import img from '../../../assets/home.png'


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