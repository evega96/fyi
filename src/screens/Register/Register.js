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
  TouchableOpacity
} from "react-native";
import tinta from "../../../assets/RPReplay_Final1694678498.mp4"
import { Video } from 'expo-av';
import Icon from "react-native-vector-icons/FontAwesome";

import { signUp, signUpTattooArtist } from "../../app/api";

const Register = ({ navigation }) => {
  const [user, setUser] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [errores, setErrores] = useState();
  const [animation] = React.useState(new Animated.Value(0));
  const [isTattooArtist, setIsTatooArtist] = useState(false);
  const [additionalInfo1, setAdditionalInfo1] = useState('');
  const [additionalInfo2, setAdditionalInfo2] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  React.useEffect(() => {
    // Realiza la animación cuando el componente se monta
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000, // Duración de la animación en milisegundos
      useNativeDriver: false, // Ajusta esta propiedad según tus necesidades
    }).start();
  }, []);

  const handlePress = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    if (password === password2 && password.length > 6) {
      SavePerson();
    } else {
      Alert.alert("Las contraseñas no coinciden o es inferior a 6 digitos")
    }
  }

  const SavePerson = async () => {
    try {
      await signUp(email, password, user, birthday, isTattooArtist, additionalInfo1, additionalInfo2);
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
            style={[styles.input, !isValidEmail && styles.invalidInput]}
            onChangeText={handleEmailChange}
            placeholder="Correo electrónico"
          />

          <TextInput
            style={styles.input}
            onChangeText={setUser}
            placeholder="Usuario"
          />


          <TextInput
            style={styles.input}
            onChangeText={setBirthday}
            placeholder="Cumpleaños"

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



          <TouchableOpacity style={{ marginLeft: 112 }} onPress={() => setIsTatooArtist(!isTattooArtist)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  borderWidth: 2,
                  borderColor: isTattooArtist ? 'green' : 'gray',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {isTattooArtist && <Icon name="check" size={16} color="green" />}
              </View>

              <Text style={{ marginLeft: 8, color: "#FFFFFF" }}>Soy tatuador</Text>
            </View>
          </TouchableOpacity>

          {!isTattooArtist ? (<View styles={{ marginBottom: 10 }}>
            <TouchableOpacity onPress={handleRegister} style={styles.botonRegister}>
              <Text style={styles.textoBoton}>Registar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handlePress} style={styles.boton}>
              <Text style={styles.textoBoton}>Cancelar</Text>
            </TouchableOpacity>
          </View>) : (
            <View>
              <TextInput
                style={styles.inputCheckbox}
                onChangeText={setAdditionalInfo1}
                placeholder="Titulo Higenico sanitario"
              />
              <TextInput
                style={styles.input}
                onChangeText={setAdditionalInfo2}
                placeholder="Cartilla de vacunas"
              />
              <TouchableOpacity onPress={handleRegister} style={styles.boton}>
                <Text style={styles.textoBoton}>Registar</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handlePress} style={styles.boton}>
                <Text style={styles.textoBoton}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          )}


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
    flex: 1,
    justifyContent: "center",
  },
  icon: {
    marginLeft: 10, // Agrega espacio entre el icono y el campo de entrada
    position: "absolute",
  },
  input: {
    alignContent: "center",
    right: 55,
    width: 314,
    height: 50,
    backgroundColor: "#E4E4E4",
    marginBottom: 10,
    marginLeft: 112,
    borderRadius: 15
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
  checkmarkContainer: {
    marginBottom: 0
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
  checkbox: {
    marginBottom: 10
  },
  inputCheckbox: {
    alignContent: "center",
    right: 55,
    width: 314,
    height: 50,
    backgroundColor: "#E4E4E4",
    marginBottom: 10,
    marginLeft: 112,
    borderRadius: 15,
    marginTop: 10
  },
  botonRegister: {
    marginTop: 10,
    backgroundColor: "#E4E4E4",
    justifyContent: "center",
    marginBottom: 10,
    left: 55,
    width: 314,
    height: 50,
    borderRadius: 30
  }
});