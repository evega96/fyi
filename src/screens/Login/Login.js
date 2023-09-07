import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground, TextInput, Alert } from "react-native";
import GifBackgroundView from 'react-native-gif';
import tinta from '../../../assets/tinta.mp4'
import { Video } from 'expo-av';



const LoginButton = ({ navigation }) => {
  const { user, onChangeUser } = React.useState();
  const { password, onChangePassword } = React.useState();
  return (
    <View style={{ flex: 1 }}>
      <Video
        source={tinta} // o require('ruta/al/video.mp4') si está en tu proyecto
        style={{ flex: 1 }}
        isLooping={true}
        shouldPlay={true}
      >
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
          <Button title="Iniciar sesion" onPress={() => Alert.alert("Boton pulsado iniciar sesion")} />
          <Button title="Registrar" onPress={() => navigation.navigate("Register")} />
        </View>
      </Video>
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
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
