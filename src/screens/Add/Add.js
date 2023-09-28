import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SectionList,
  Button,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import DownArrow from "../../components/Icons/DownArrow";
import Cancel from "../../components/Icons/Cancel";
import Expand from "../../components/Icons/Expand";
import { useNavigation } from "@react-navigation/native";

const Add = () => {
  const [lastImage, setLastImage] = useState(null);
  const [recentImages, setRecentImages] = useState([]);
  const [numColumns, setNumColumns] = useState(3); // Estado para el número de columnas

  const navigation = useNavigation();

  useEffect(() => {
    async () => {
      await MediaLibrary.requestPermissionsAsync();
    };
  }, []);

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

      // Navegar a la pantalla AddDetails con la imagen seleccionada como parámetro
      navigation.navigate("AddDetails", { selectedImage: result.uri });
    }
  };

  // Function to change the number of colunms
  const changeNumColumns = (columns) => {
    setNumColumns(columns);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <View style={styles.header}>
        <View style={styles.subheader}>
          <TouchableOpacity onPress={() => navigation.navigate("Favorite")}>
            <Cancel />
          </TouchableOpacity>
          <Text>Nueva publicación</Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AddDetails", { selectedImage: lastImage })
            }
          >
            <Text>Siguiente</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Expand />
        </View>
      </View>
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

        {/* Utiliza FlatList para las imágenes recientes */}
        <FlatList
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
  },
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
