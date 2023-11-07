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
      backgroundColor: '#313131', // Fondo blanco
    },

    headerShown: true,
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
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            // Agrega aquí la lógica para la acción "Se Busca"
            // Por ejemplo, podrías abrir un cuadro de diálogo de búsqueda
            alert("Se Busca");
          }}
        >
          <Ionicons name="search" size={24} color="#ffffff" />
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
    marginLeft: 13,
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 30
  },
  buttonText: {
    color: "#ffffff",
  },
  searchButton: {
    marginLeft: 24
  }
});

export default HomeConfig;
