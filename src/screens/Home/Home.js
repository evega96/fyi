
import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { useNavigation } from '@react-navigation/native';
import { getCurrentUserId, getOrCreateRoom, getTwoHumansRoomId } from '../../app/api';
import MasonryList from "react-native-masonry-list";


const HomeScreen = ({ navigation }) => {

  const [images, setImages] = useState([]);
  const storage = getStorage();


  useEffect(() => {

    const fetchImages = async () => {
      try {
        const imageRef = ref(storage);
        const imageList = await listAll(imageRef);

  const handleContactButtonClick = async (otherUserId) => {
    try {
      const currentUserId = await getCurrentUserId();
      const roomCode = await getTwoHumansRoomId(currentUserId, otherUserId);
      navigation.navigate('ChatRooms', {
        roomCodeId: roomCode,
      });
    } catch (error) {
      console.error('Error al iniciar el chat privado:', error);
    }
  };

  return (
    <MasonryList
      images={images}
      spacing={5}
      containerStyle={{ padding: 5 }}
      onPressImage={(image, index) => {
        openDetailScreen(image);
      }}

    />

  );
};

const styles = StyleSheet.create({
  overlayButton: {
    marginTop: 200,
  },

});

export default HomeScreen;
