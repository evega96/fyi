import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Share } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { createImageLike, createImageFav, getCurrentUserId, getAuthorIdByName, getOrCreateRoom } from '../../app/api';

const DetailScreen = ({ route, navigation }) => {
  const { imageUrl, authorName, description, hashtags } = route.params.params;
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
    createImageLike(imageUrl);


  };


  const handleSavePress = () => {
    setIsSaved(!isSaved);
    createImageFav(imageUrl);

  };

  const handleSharePress = async () => {
    try {
      const options = {
        title: 'Compartir imagen', // Título del diálogo de compartir
        message: 'Mira esta imagen de la aplicacionc Fynk:', // Mensaje que se compartirá
        url: imageUrl, // URL de la imagen a compartir
      };

      await Share.share(options);
    } catch (error) {
      console.error('Error al compartir la imagen:', error.message);
    }
  };

  const goToAuthorProfile = async () => {
    try {
      // Realiza una solicitud para obtener la ID del autor por nombre
      const authorId = await getAuthorIdByName(authorName);

      // Navega a la pantalla de perfil del autor y pasa el parámetro 'authorId'
      navigation.navigate('AuthorProfile', { authorId: authorId });
    } catch (error) {
      console.error('Error al obtener la ID del autor:', error.message);
    }
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
