import React from "react";
import { View, Text, Pressable, Button } from "react-native";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { logout } from "../../app/api";

const Account = ({ navigation, route }) => {
  const onhandleLogout = () => {
    logout();
  };
  return (
    <View>
      <Text>Screen: {route.name}</Text>
      <Ionicons name="home" size={30} color="#6451a5" />
      <Text> Buenas tardes </Text>

      <Pressable onPress={onhandleLogout}>
        <Text>Cerrar sesión</Text>
      </Pressable>
    </View>
  );
};

export default Account;
