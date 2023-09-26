import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ImageModal from '../../components/ImageModal'; // Asegúrate de importar el componente ImageModal

const DetailScreen = ({ route, navigation }) => {

  console.log("route: ", route)
  console.log("params: ", route.params)
  const { imageUrl, authorName, description, hashtags } = route.params;
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
  };

  const handleSavePress = () => {
    setIsSaved(!isSaved);
  };

  const handleSharePress = () => {
    // Implementa la lógica para compartir la imagen
  };

  const goToAuthorProfile = () => {
    // Navega a la pantalla de perfil del autor
    // Puedes usar navigation.navigate('AuthorProfile', { authorId: authorId }) por ejemplo
  };

  const openImageModal = () => {
    setIsImageModalVisible(true);
  };

  const closeImageModal = () => {
    setIsImageModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openImageModal}>
        <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.authorName} onPress={goToAuthorProfile}>
          {authorName}
        </Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.description}>{hashtags}</Text>
        <TouchableOpacity onPress={handleLikePress}>
          <Text>{isLiked ? 'Unlike' : 'Like'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSavePress}>
          <Text>{isSaved ? 'Remove from Favorites' : 'Add to Favorites'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSharePress}>
          <Text>Share</Text>
        </TouchableOpacity>
      </View>
      <ImageModal isVisible={isImageModalVisible} imageUrl={imageUrl} onClose={closeImageModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  authorName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    textDecorationLine: 'underline',
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
});

export default DetailScreen;
