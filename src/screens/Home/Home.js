
import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { useNavigation } from '@react-navigation/native';
import { getCurrentUserId, getOrCreateRoom, getTwoHumansRoomId } from '../../app/api';
import MasonryList from "react-native-masonry-list";


const HomeScreen = ({ navigation }) => {

  const [images, setImages] = useState([]);
  const storage = getStorage();
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {


    fetchImages();

    

  }, []);

  const onRefresh = () => {
    if(!isRefreshing){
      setIsRefreshing(true)
    }else(
      setIsRefreshing(false)
    )
    fetchImages(); 
  }
  
  
  const fetchImages = async () => {
    try {
      const imageRef = ref(storage);
      const imageList = await listAll(imageRef);
      const data = []
      const imageUrlArray = await Promise.all(
        imageList.items.map(async (item) => {
          const downloadURL = await getDownloadURL(item);
          Image.getSize(downloadURL, (widtg, height) => data.push({ uri: downloadURL }))
        })
      );

      setImages(data);
    } catch (error) {
      console.error('Error al obtener imágenes:', error);
    }
  };

  const openDetailScreen = (imageData) => {
    // Navega a la pantalla de detalle y pasa los datos de la imagen como parámetros imageData, imageData.url)
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
    <ScrollView
      style={{ backgroundColor: '#313131' }}
      refreshControl={ // Agrega el RefreshControl al ScrollView
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          tintColor="#fff" // Opcional: color del indicador de carga
        />
      }
    >
      <MasonryList
        backgroundColor='#313131'
        images={images}
        spacing={5}
        containerStyle={{ padding: 5 }}
        onPressImage={(image, index) => {
          openDetailScreen(image);
        }}
      />
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  overlayButton: {
    marginTop: 200,

  },
  

});

export default HomeScreen;
