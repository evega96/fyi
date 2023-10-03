import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import ImageSize from 'react-native-image-size';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation de React Navigation

const HomeScreen = ({ navigation }) => {
  const [images, setImages] = useState([]);
  const storage = getStorage();
  const screenWidth = Dimensions.get('window').width;
  const imageHeight = 200; // Establece la altura fija deseada para todas las imágenes
  const margin = 5; // Establece el margen deseado para todas las direcciones


  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageRef = ref(storage); // Ref al directorio principal de Storage
        const imageList = await listAll(imageRef);

        const imageUrlArray = await Promise.all(
          imageList.items.map(async (item) => {
            const downloadURL = await getDownloadURL(item);
            const imageSize = await ImageSize.getSize(downloadURL);
            return { id: item.name, url: downloadURL, width: imageSize.width, height: imageSize.height };
          })
        );

        setImages(imageUrlArray);
      } catch (error) {
        console.error('Error al obtener imágenes:', error);
      }
    };

    fetchImages();
  }, []);

  const openDetailScreen = (imageData) => {
    // Navega a la pantalla de detalle y pasa los datos de la imagen como parámetros
    navigation.navigate('DetailScreen', {
      screen: 'DetailScreen',
      params: {
        imageUrl: imageData,
        authorName: 'Nombre del autor', // Reemplaza con el nombre real del autor
        description: 'Descripción de la imagen', // Reemplaza con la descripción real
        hashtags: 'hasthtags'
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {images.map((image) => (
        <TouchableOpacity key={image.id} onPress={() => {
          openDetailScreen(image)
        }}>
          <Image
            source={{ uri: image.url }}
            style={{
              width: screenWidth / 2 - margin * 2, // Esto hará que las imágenes se junten más en las columnas
              height: imageHeight, // Establece una altura fija para todas las imágenes
              margin: margin, // Establece el margen en todas las direcciones
              resizeMode: 'cover',
              borderRadius: 15, // Aplica un borde redondeado de 15
            }}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Añade espacio entre las columnas
  },
  imageContainer: {
    width: '48%', // Esto hará que las imágenes se muestren en filas de dos con espacio entre ellas
  },
});

export default HomeScreen;
