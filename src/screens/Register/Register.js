import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Animated,
  TextInput,
  Alert,
  Image,
} from "react-native";
import tinta from '../../../assets/tinta.mp4'
import { Video } from 'expo-av';
import Icon from "react-native-vector-icons/FontAwesome";

import { signUp } from "../../app/api";

const Register = ({ navigation }) => {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [errores, setErrores] = useState();
  const [animation] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    // Realiza la animación cuando el componente se monta
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000, // Duración de la animación en milisegundos
      useNativeDriver: false, // Ajusta esta propiedad según tus necesidades
    }).start();
  }, []);

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
    <Video
      source={tinta}
      style={styles.backgroundVideo}
      isLooping={true}
      shouldPlay={true}
      resizeMode="cover"
    />
<Animated.View
    style={[
      styles.container,
      {
        opacity: animation, // Aplicar opacidad según el valor de la animación
        transform: [
          {
            scale: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5, 1], // Escala de 0.5 a 1
            }),
          },
        ],
      },
    ]}
  >
        <View style={styles.main}>
          <Image
            style={styles.logo}
            source={require("../../../assets/Logo.png")}
          />
          
            <TextInput
              style={styles.input}
              onChangeText={setUser}
              placeholder="Correo electrónico o usuario"
            />
            
          
          
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              placeholder="Contraseña"
              secureTextEntry={true} // Para ocultar la contraseña
            />
           
          

          
            <TextInput
              style={styles.input}
              onChangeText={setPassword2}
              placeholder="Repite la contraseña"
              secureTextEntry={true} // Para ocultar la contraseña
            />
           
          

          <Button
            title="Registrar"
            onPress={() => {
              if (password === password2) {
                SavePerson();
                navigation.navigate("Login")
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
      </Animated.View>
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
  main: {
    flex:1,
    justifyContent: "center",
  },
  icon: {
    marginLeft: 10, // Agrega espacio entre el icono y el campo de entrada
    position: "absolute",
  },
  input: {
    alignContent: "center",
    width: 205,
    height: 25,
    backgroundColor: "#E4E4E4",
    marginBottom: 10,
    marginLeft: 112
  },
  logo: {
    marginBottom: 10,
    marginLeft: 150
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});