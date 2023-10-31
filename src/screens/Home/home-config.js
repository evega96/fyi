import React from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Home from "./Home"; // Asegúrate de que la ruta sea correcta
import Ionicons from "react-native-vector-icons/Ionicons";
import home from "../../../assets/home.png"; // Asegúrate de que la ruta sea correcta




// Define la configuración de la pantalla "Home"
const HomeConfig = {
  
  name: "Home",
  component: Home,
  options: ({ navigation }) => ({
    tabBarIcon: () => <Image source={home} size={44} />,

    headerStyle: {
      backgroundColor: "black", // Fondo blanco
    },
    headerTitleStyle: {
      display: "none", // Oculta el título "Home"
    },
    
    headerTransparent: true,
    headerShown: true,
    headerRight: () => (
      <TouchableOpacity
        style={styles.searchButton}
        onPress={() => {
          // Agrega aquí la lógica para la acción "Se Busca"
          // Por ejemplo, podrías abrir un cuadro de diálogo de búsqueda
          alert("Se Busca");
        }}
      >
        <Ionicons name="search" size={24} color="#4b74f2" />
      </TouchableOpacity>
    ),
    headerTitle: () => (
      <View style={styles.headerButtonsContainer}>
        <TouchableOpacity
          style={styles.centerButton}
          onPress={() => navigation.navigate("ParatiScreen")}
        >
          <Text style={styles.buttonText}>Para Ti</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.centerButton}
          onPress={() => navigation.navigate("DestacadosScreen")}
        >
          <Text style={styles.buttonText}>Destacados</Text>
        </TouchableOpacity>
      </View>
    ),
  }),
};

const styles = StyleSheet.create({
  headerButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center", // Centra los botones horizontalmente
    alignItems: "center", // Centra los botones verticalmente
  },
  centerButton: {
    marginHorizontal: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 30,
    left: 80,
  },
  buttonText: {
    color: "#4b74f2",
  },
  searchButton: {
    marginRight: 10,
  },
});

export default HomeConfig;
