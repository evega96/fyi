import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";

const image = {
  uri: "https://cdn.pixabay.com/photo/2023/08/07/12/28/swan-8174925_1280.jpg",
};
const LoginButton = () => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.main}>
        <Button
          onPress={() => {
            console.log("You tapped the button!");
          }}
          title="soy cliente"
        />
        <Button
          onPress={() => {
            console.log("You tapped the button!");
          }}
          title="soy tatuador"
        />
      </View>
    </ImageBackground>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  main: {
    justifyContent: "center",
  },
});
