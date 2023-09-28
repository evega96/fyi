import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { logout, getItemById } from "../../app/api"; // Asegúrate de importar getItemById correctamente
import img from "../../../assets/FotodePerfil.jpg";
import { AuthenticatedUserContext } from "../../Context/AuthContextProdiver";

const Account = ({ navigation, route }) => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  console.log(user)
  const [userName, setUserName] = useState(""); // Estado para almacenar el nombre de usuario

  useEffect(() => {
    // Llamar a getItemById para obtener el nombre de usuario
    const fetchUserName = async () => {
      try {
        const user = await getItemById(""); // Reemplaza "userID" con el ID del usuario
        if (user && user.name) {
          setUserName(user.name);
        }
      } catch (error) {
        console.error("Error al obtener el nombre de usuario:", error);
      }
    };

    fetchUserName(); // Llama a la función para obtener el nombre de usuario al montar el componente
  }, []); // Asegúrate de pasar un arreglo vacío para que useEffect se ejecute solo una vez

  const onHandleLogout = () => {
    logout(); // Realiza la acción de cierre de sesión aquí
  };

  return (
    <View style={styles.container}>
      <Text style={styles.userName}>{userName}</Text>
      <Image source={img} style={styles.profileImage} />
      <View style={styles.HeaderButton}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("EditarPerfil")}
        >
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onHandleLogout}>
          <Text style={styles.buttonText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  HeaderButton: {
    position: "relative",
    marginTop: -40,
    width: 150,
  },
  button: {
    backgroundColor: "#6B7280",
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Account;
