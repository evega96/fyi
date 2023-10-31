import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const ImageModal = ({ isVisible, imageUrl, onClose }) => {
  return (
    <Modal isVisible={isVisible} backdropOpacity={0.9}>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="contain" />
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          {/* Agrega un botón o icono para cerrar el modal */}
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    // Agrega estilos para el botón de cierre si lo deseas
  },
});

export default ImageModal;
