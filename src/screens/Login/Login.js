import React from "react";


import { View, Animated, Button, StyleSheet, Image, TextInput, Alert } from "react-native";

import tinta from '../../../assets/tinta.mp4'
import { Video } from 'expo-av';




const LoginButton = ({ navigation }) => {
  const { user, onChangeUser } = React.useState();
  const { password, onChangePassword } = React.useState(); 
  const [animation] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    // Realiza la animación cuando el componente se monta
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000, // Duración de la animación en milisegundos
      useNativeDriver: false, // Ajusta esta propiedad según tus necesidades
    }).start();
  }, []);
  return (
    <View style={{flex:1}} >
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
    flex:1,
    justifyContent: "center",
  },
  input: {
    alignContent: "center",
    width: 205,
    height: 25,
    backgroundColor: "#E4E4E4",
    marginBottom: 10,
    marginLeft: 112
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  logo: {
    marginBottom: 10,
    marginLeft: 150
  }
});
