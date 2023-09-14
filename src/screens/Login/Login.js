import React, { useState } from "react";

import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TextInput,
  Alert,
} from "react-native";

import tinta from "../../../assets/tinta.mp4";
import { Video } from "expo-av";
import { signIn } from "../../app/api";

const LoginButton = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const LoginPerson = async () => {
    try {
      await signIn(user, password);
      Alert.alert("sesion iniciada", user);
    } catch (err) {
      Alert.alert(err);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      {/*  <Video
        source={tinta} // o require('ruta/al/video.mp4') si está en tu proyecto
        style={{ flex: 1 }}
        isLooping={true}
        shouldPlay={true}
      ></Video> */}
      <View style={styles.main}>
        <Image
          style={styles.logo}
          source={require("../../../assets/Logo.png")}
        />
        <TextInput
          style={styles.input}
          onChangeText={setUser}
          value={user}
          type="text"
          placeholder="Correo electronico o usuario"
        ></TextInput>

        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true} // Para ocultar la contraseña
          type="text"
          placeholder="Contraseña"
        ></TextInput>
        <Button
          title="Iniciar sesion"
          onPress={() => {
            LoginPerson();
          }}
        />

        <Button
          title="Registrar"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
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
    flex: 1,
    justifyContent: "center",
  },
  input: {
    alignContent: "center",
    width: 205,
    height: 25,
    backgroundColor: "#E4E4E4",
    marginBottom: 10,
    marginLeft: 112,
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  logo: {
    marginBottom: 10,
    marginLeft: 150,
  },
});
