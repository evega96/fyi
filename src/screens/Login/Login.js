import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground, TextInput, Alert } from "react-native";

const image = {
  uri: "https://cdn.pixabay.com/photo/2023/08/07/12/28/swan-8174925_1280.jpg",
};
const LoginButton = () => {
  const { user, onChangeUser } = React.useState();
  const { password, onChangePassword } = React.useState();
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.main}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUser}
          value={user}
          type="text"
          placeholder="Correo electronico o usuario"
        >

        </TextInput>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          type="text"
          placeholder="Contraseña"
        >
        </TextInput>
        <Button title="Iniciar sesion" onPress={() => Alert.alert("Botton pulsado iniciar sesion")} />
        <Button title="Registar" onPress={() => Alert.alert("Botton pulsado registrar")} />
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
  input: {
    alignContent: "center",
    width: 205,
    height: 25,
    backgroundColor: "#E4E4E4",
    marginBottom: 10,
    marginLeft: 112,
  }
});
