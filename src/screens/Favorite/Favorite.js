import React from 'react';
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native';

const Favorite = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: '#313131' }}>
      <View style={styles.imageRow}>
        <Image source={require('../../../assets/TattoImage/1.png')} style={styles.image} />
        <Image source={require('../../../assets/TattoImage/2.png')} style={styles.image} />
      </View>
      <View style={styles.imageRow}>
        <Image source={require('../../../assets/TattoImage/3.png')} style={styles.image} />
        <Image source={require('../../../assets/TattoImage/4.png')} style={styles.image} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageRow: {
    flexDirection: 'row',
  },
  image: {
    flex: 1, // Ocupa todo el espacio disponible en el contenedor
    margin: 5, // Espacio entre imágenes
  },
});

export default Favorite;
