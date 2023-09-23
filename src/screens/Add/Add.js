import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import DownArrow from "../../components/Icons/DownArrow";

const Add = () => {
  const [lastImage, setLastImage] = useState(null);
  const [recentImages, setRecentImages] = useState([]);
  const [numColumns, setNumColumns] = useState(3); // Estado para el número de columnas

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access media library is required!");
        return;
      }
      const assets = await MediaLibrary.getAssetsAsync({
        first: 10,
        mediaType: "photo",
      });

      setRecentImages(assets.assets);

      // Configurar la última imagen inicialmente con la última imagen de la lista
      if (assets.assets.length > 0) {
        setLastImage(assets.assets[assets.assets.length - 1].uri);
      }
    })();
  }, []);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access media library is required!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    if (!result.cancelled) {
      setLastImage(result.uri);
    }
  };

  // Función para cambiar el número de columnas
  const changeNumColumns = (columns) => {
    setNumColumns(columns);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Last image: </Text>
        {lastImage && (
          <Image
            source={{ uri: lastImage }}
            style={{ width: 200, height: 200 }}
          />
        )}
      </View>
      <View>
        <View>
          <Text>Recent images: </Text>
          <DownArrow />
        </View>

        {/* Cambia la clave (key) de FlatList cuando cambias el número de columnas */}
        <FlatList
          key={numColumns}
          data={recentImages}
          keyExtractor={(item) => item.id}
          numColumns={numColumns}
          contentContainerStyle={{
            paddingBottom: Math.ceil(recentImages.length / numColumns) * 150, // 150 es la altura de una imagen
          }}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setLastImage(item.uri)}>
              <Image source={{ uri: item.uri }} style={styles.image} />
            </TouchableOpacity>
          )}
        />
      </View>
      {/* Botones para cambiar el número de columnas */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => changeNumColumns(2)}>
          <Text>2 Columnas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeNumColumns(3)}>
          <Text>3 Columnas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeNumColumns(4)}>
          <Text>4 Columnas</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
});

export default Add;
