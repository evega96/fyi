
import React, { useState, useEffect } from "react";

import {
  View,
  Animated,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  Button,
  Linking
} from "react-native";
import Modal from "react-native-modal";
import tinta from "../../../assets/RPReplay_Final1694678498.mp4";
import { Video } from "expo-av";
import { signIn } from "../../app/api";
import googleLogo from "../../../assets/googleLogo.png"

const LoginButton = ({ navigation }) => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [isGoogleModalVisible, setIsGoogleModalVisible] = useState(false);
  const [animation] = useState(new Animated.Value(0));


  useEffect(() => {
    // Realiza la animación cuando el componente se monta
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000, // Duración de la animación en milisegundos
      useNativeDriver: false, // Ajusta esta propiedad según tus necesidades
    }).start();
  }, []);

  const handlePress = () => {
    navigation.navigate('Register'); // Reemplaza 'PantallaDestino' con el nombre de tu pantalla de destino
  };



  
  

  const handleLogin = () => {
    LoginPerson();
  }

  const LoginPerson = async () => {
    try {
      await signIn(user, password);

    } catch (err) {
      switch (err) {
        case "Firebase: Error (auth/invalid-email).": return Alert.alert("Error al iniciar sesion, correo o contraseña no existen");
        default: break;
      }
    }
  };
  return (
    <View style={{ flex: 1 }} >
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
            value={user}
            type="text"
            placeholder="Correo electronico o usuario"
          >
          </TextInput>

          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            type="text"
            placeholder="Contraseña"
            secureTextEntry={true}
          >
          </TextInput>

          <TouchableOpacity onPress={handleLogin} style={styles.boton}>
            <Text style={styles.textoBoton}>Iniciar sesion</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handlePress} style={styles.boton}>
            <Text style={styles.textoBoton}>Registro</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
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
    right: 55,
    width: 314,
    height: 50,
    backgroundColor: "#E4E4E4",
    marginBottom: 10,
    marginLeft: 112,
    borderRadius: 15,
    paddingLeft: 15
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
  boton: {
    backgroundColor: "#E4E4E4",
    justifyContent: "center",
    marginBottom: 10,
    left: 55,
    width: 314,
    height: 50,
    borderRadius: 30
  },
  textoBoton: {
    textAlign: "center",
    color: "#374151"
  },
  botonGoogle: {
    flexDirection: 'row', // Para que la imagen y el texto estén en línea
    alignItems: 'center', // Centra verticalmente los elementos
    padding: 10,
    backgroundColor: '#E4E4E4', // Cambia el color de fondo según tus preferencias
    borderRadius: 30,
    left: 55,
    width: 314,
    height: 50,
  },
  googleImage: {
    width: 25, // Ancho de la imagen
    height: 25, // Alto de la imagen
    marginRight: 10
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  
});
