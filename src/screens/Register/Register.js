import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground, TextInput, Alert } from "react-native";

const image = {
  uri: "https://cdn.pixabay.com/photo/2023/08/07/12/28/swan-8174925_1280.jpg",
};
const LoginButton = ({ navigation }) => {
  const { user, onChangeUser } = React.useState();
  const { password, onChangePassword } = React.useState();
  const { password2, onChangePassword2 } = React.useState();
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
