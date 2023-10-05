import React, { useEffect, useState } from "react";
import { View, Image, ScrollView, StyleSheet } from "react-native";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const HomeScreen = () => {
    const [images, setImages] = useState([]);
    const storage = getStorage();

    /* useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageRef = ref(storage); // Ref al directorio principal de Storage
        const imageList = await listAll(imageRef);

        const imageUrlArray = await Promise.all(
          imageList.items.map(async (item) => {
            const downloadURL = await getDownloadURL(item);
            return { id: item.name, url: downloadURL };
          })
        );

        setImages(imageUrlArray);
      } catch (error) {
        console.error("Error al obtener imágenes:", error);
      }
    };

    fetchImages();
  }, []); */

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {images.map((image) => (
                <Image
                    key={image.id}
                    source={{ uri: image.url }}
                    style={styles.image}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    image: {
        width: "50%", // Esto hará que las imágenes aparezcan en filas de 2
        height: 200, // Establece la altura deseada
        resizeMode: "cover", // Ajusta el modo de redimensionamiento según tus necesidades
    },
});

export default HomeScreen;
