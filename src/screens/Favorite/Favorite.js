import { Text, TextInput, View, Button } from "react-native";
import { useState } from "react";
import Ionicons from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";

const Favorite = ({ navigation }) => {
  return (
    <View>
      <Text>esto es favoritos</Text>
      <Ionicons name="favorite" size={30} color="#6451a5"></Ionicons>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Favorite;
