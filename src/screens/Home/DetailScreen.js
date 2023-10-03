import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { createImageLike, createImageFav, getCurrentUserId } from '../../app/api';

const DetailScreen = ({ route, navigation }) => {
  const { imageUrl, authorName, description, hashtags } = route.params;
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
    createImageLike(imageUrl.url);


  };

  const handleSavePress = () => {
    setIsSaved(!isSaved);
    createImageFav(imageUrl.url);

  };

  const handleSharePress = () => {
    // Implementa la lógica para compartir la imagen
  };

  const goToAuthorProfile = () => {
    // Supongamos que tienes un autorId que deseas pasar a la pantalla de perfil del autor
    //const authorId = '123'; // Esto debe ser el ID del autor actual

    // Navega a la pantalla de perfil del autor y pasa el parámetro 'authorId'
    //navigation.navigate('AuthorProfile', { authorId });
  };


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl.url }} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.authorName} onPress={goToAuthorProfile}>
          {authorName}
        </Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.description}>{hashtags}</Text>
      </View>
      <View style={styles.overlayButtons}>
        <TouchableOpacity onPress={handleLikePress} style={styles.overlayButton}>
          <FontAwesomeIcon name={isLiked ? 'heart' : 'heart-o'} size={40} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSavePress} style={styles.overlayButton}>
          <FontAwesomeIcon name={isSaved ? 'star' : 'star-o'} size={40} color="gold" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSharePress} style={styles.overlayButton}>
          <FontAwesomeIcon name="share" size={40} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  authorName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    textDecorationLine: 'underline',
    color: 'white',
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
    color: 'white',
  },
  overlayButtons: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    flexDirection: 'column',
    alignItems: 'flex-end', // Alinea los iconos a la derecha
    marginBottom: 200
  },
  overlayButton: {
    backgroundColor: 'transparent',
    marginBottom: 25,
  },
});

export default DetailScreen;
