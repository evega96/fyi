import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
  const { imageUrl, authorName, description, hashtags } = route.params;
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

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

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
        <View style={styles.overlayButtons}>
          <TouchableOpacity onPress={handleLikePress} style={styles.overlayButton}>
            <Text>{isLiked ? 'Unlike' : 'Like'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSavePress} style={styles.overlayButton}>
            <Text>{isSaved ? 'Remove from Favorites' : 'Add to Favorites'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSharePress} style={styles.overlayButton}>
            <Text>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.authorName} onPress={goToAuthorProfile}>
          {authorName}
        </Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.description}>{hashtags}</Text>
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
  overlayButtons: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
  },
  overlayButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
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
});

export default DetailScreen;
