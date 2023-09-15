import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  TextInput,
  Alert,
  Image,
} from "react-native";
import image from "../../../assets/RegisterImage.png";
import Icon from "react-native-vector-icons/FontAwesome";

import { signUp } from "../../app/api";

const Register = ({ navigation }) => {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [errores, setErrores] = useState();

  const SavePerson = async () => {
    try {
      await signUp(user, password);
      Alert.alert("guardado", user);
    } catch (err) {
      Alert.alert(err);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.main}>
          <Image
            style={styles.logo}
            source={require("../../../assets/Logo.png")}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setUser}
              placeholder="Correo electrónico o usuario"
            />
            <Icon name="user" size={20} color="#000" style={styles.icon} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              placeholder="Contraseña"
              secureTextEntry={true} // Para ocultar la contraseña
            />
            <Icon name="lock" size={20} color="#000" style={styles.icon} />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setPassword2}
              placeholder="Repite la contraseña"
              secureTextEntry={true} // Para ocultar la contraseña
            />
            <Icon name="lock" size={20} color="#000" style={styles.icon} />
          </View>

          <Button
            title="Registrar"
            onPress={() => {
              if (password === password2) {
                SavePerson();
              } else {
                Alert.alert("Las contraseñas no coinciden");
              }
            }}
          />
          <Button
            title="Iniciar sesion"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Asegura que el contenedor ocupa toda la pantalla
  },
  image: {
    flex: 1, // Asegura que la imagen de fondo ocupa toda la pantalla
  },
  main: {
    marginTop: 120,
    marginLeft: 40,
    width: "80%", // Utiliza un porcentaje para que sea responsive
    maxWidth: 314, // Establece un ancho máximo
    height: 536, // Permite que la altura se ajuste automáticamente al contenido
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,

    backgroundColor: "rgba(255, 255, 255, 0.7)", // Agrega un fondo semi-transparente para mejorar la legibilidad
    padding: 20, // Agrega espacio interno
    borderRadius: 10, // Agrega bordes redondeados
  },
  inputContainer: {
    flexDirection: "row", // Alinea el icono y el campo de entrada en fila
    alignItems: "center", // Alinea verticalmente el icono y el campo de entrada
    marginBottom: 10,
    position: "relative",
  },
  icon: {
    marginLeft: 10, // Agrega espacio entre el icono y el campo de entrada
    position: "absolute",
  },
  input: {
    flex: 1, // Ajusta el ancho del campo de entrada al espacio restante en la fila
    height: 55,
    backgroundColor: "#E4E4E4",
    paddingLeft: 35, // Agrega un poco de espacio a la izquierda para el texto
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#000000",
  },
  logo: {
    marginBottom: 10,
  },
});
