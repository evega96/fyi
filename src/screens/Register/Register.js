import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground, TextInput, Alert } from "react-native";
import Video from "react-native-video";
const Register = ({ navigation }) => {
  const { user, onChangeUser } = React.useState();
  const { password, onChangePassword } = React.useState();
  const { password2, onChangePassword2 } = React.useState();
  return (
    <View>
      <Video
        source={{ uri: '../../../assets/tinta.mp4' }} // Ruta del video en Android
        style={styles.backgroundVideo}
        resizeMode="cover" // Puedes ajustar esto según tus necesidades
        repeat
      />
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
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword2}
          value={password2}
          type="text"
          placeholder="Repite la contraseña"
        >
        </TextInput>
        <Button title="Registrar" onPress={() => Alert.alert("Botton pulsado registrar")} />
        <Button title="Cancelar" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};

export default Register;

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
  }, backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
