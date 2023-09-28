import React from "react";
import { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { uploadImageToFirebase } from "../../app/api";

const AddDetails = ({ route, navigation }) => {
  // Obtener la imagen seleccionada de las props de navegación
  const { selectedImage } = route.params;
  const [uploading, setUploading] = useState(false);

  const uploadImage = async () => {
    try {
      const imageUrl = await uploadImageToFirebase(selectedImage);
      // Ahora puedes usar imageUrl, que es la URL de la imagen cargada en Firebase
      console.log("Imagen cargada con éxito:", imageUrl);
    } catch (error) {
      console.log("Error al cargar la imagen en Firebase:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedImage }} style={styles.image} />
      <Text>Detalles de la imagen:</Text>
      {/* Aquí puedes agregar más elementos y lógica para subir la imagen a Firebase */}
      <TouchableOpacity onPress={uploadImage}>
        <Text> uploadImage</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
});

export default AddDetails;
