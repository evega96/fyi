import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ScrollView } from "react-native";
import { getItemById, logout } from "../../app/api";
import img from "../../../assets/FotodePerfil.jpg";
import { AuthenticatedUserContext } from "../../Context/AuthContextProdiver";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { getUser } from "../../app/api";
import ConfigurationIcon from "../../components/configurationIcon";
import Modal from "react-native-modal"; // Importar la biblioteca react-native-modal+
import Count from "../../components/Cuenta";
import Privacidad from "../../components/Privacidad";
import Contein from "../../components/Contenido";
import Not from "../../components/Notificaciones";
import Langua from "../../components/Idiomas";
import Pagos from "../../components/Pagos";
import Reser from "../../components/Reservas";
import Ayu from "../../components/Ayudas";

const AccountTatto = ({ navigation, route }) => {
  const { userid, setUserid } = useContext(AuthenticatedUserContext);
  const [userName, setUserName] = useState("");
  const [images, setImages] = useState([]);
  const storage = getStorage();
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    const user = async () => {
      const id = "BcFleS8Au3e7cBKJl9DQggKjOBg1";
      const data = await getUser(id);
      setUserName(data.usuario);
      console.log(data);
    };
    user();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageRef = ref(storage);
        const imageList = await listAll(imageRef);

        const imageUrlArray = await Promise.all(
          imageList.items.map(async (item) => {
            const downloadURL = await getDownloadURL(item);
            return { id: item.name, url: downloadURL };
          })
        );

        setImages(imageUrlArray);
      } catch (error) {
        console.error("Error al obtener imágenes:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contenido}>
        <TouchableOpacity onPress={showModal}>
          <ConfigurationIcon style={styles.Configuration} />
        </TouchableOpacity>

        <View style={styles.HeaderButton}>
          <Text style={styles.userName}>usuario:{userName}</Text>
          <Image source={img} style={styles.profileImage} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Message")}
          >
            <Text style={styles.buttonText}>Mensaje</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={showModal}>
            <Text style={styles.buttonText}>Seguir</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Texts}>
          <Text style={{ color: "white" }}>
            {" "}
            TATUAJE TRADICIONAL <Text style={{ color: "#4B74F2" }}>@savannahngu</Text>
          </Text>
          <Text style={{ color: "white" }}>
            TATUADO EN <Text style={{ color: "#4B74F2" }}>@seny_tattos</Text>
          </Text>
          <Text style={{ color: "white" }}> BASED IN BARCELONA </Text>

          <View style={styles.tatuajes}>
            <TouchableOpacity style={styles.buttons} onPress={() => alert("Publicaciones")}>
              <Text style={styles.buttonText}> Publicaciones</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons} onPress={() => alert("Opiniones")}>
              <Text style={styles.buttonText}> Opiniones</Text>
            </TouchableOpacity>
          </View>
        </View>

        {images.map((image) => (
          <Image key={image.id} source={{ uri: image.url }} style={styles.image} />
        ))}

        {/* Utilizar react-native-modal para la modal */}
        <Modal isVisible={isModalVisible}>
          <View style={styles.modalContent}>
            <View style={styles.modalTexts}>
            <View>
            
            <Text style={{ color: "white", padding: 15 }} onPress={()=>Alert.alert(".....hola")}> <Count/>   </Text>
            
            <Text style={{ color: "white" , padding: 15}} onPress={()=>Alert.alert(".....hola")}> <Privacidad />  </Text>
            <Text style={{ color: "white", padding: 15 }} onPress={()=>Alert.alert(".....hola")}> <Contein />    </Text>
            <Text style={{ color: "white", padding: 15 }} onPress={()=>Alert.alert(".....hola")}> <Not />  </Text>
            <Text style={{ color: "white" , padding: 15}} onPress={()=>Alert.alert(".....hola")}> <Langua /></Text>
            <Text style={{ color: "white", padding: 15 }} onPress={()=>Alert.alert(".....hola")}> <Pagos  />  </Text>
            <Text style={{ color: "white" , padding: 15}} onPress={()=>Alert.alert(".....hola")}> <Reser /> </Text>
            <Text style={{ color: "white", padding: 15 }} onPress={()=>Alert.alert(".....hola")}> <Ayu /> </Text>
            </View>
            </View>
            <TouchableOpacity onPress={hideModal}>
              <Text style={{ color: "white" }}>CERRAR</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  profileImage: {
    width: 120,
    height: 150,
    borderRadius: 75,
    marginBottom: -20,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#EEEEEE",
  },
  HeaderButton: {
    position: "relative",
    alignItems: "center",
    marginTop: 40,
    left: 75,
    width: 200,
  },
  button: {
    backgroundColor: "#6B7280",
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  Texts: {
    justifyContent: "center",
    alignItems: "center",
    left: 40,
    color: "#EEEEEE",
  },
  tatuajes: {
    flexDirection: "row",
    padding: 40,
  },
  buttons: {
    backgroundColor: "#4B74F1",
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 10,
    marginBottom: 5,
    right: 5,
  },
  contenido: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  image: {
    width: "50%",
    height: 200,
    resizeMode: "cover",
  },
  Configuration: {
    left: 350,
    color: "#EEEEEE",
  },
  modalContent: {
    backgroundColor: "grey",
    padding: 20,
    borderRadius: 10,
  },
  modalTexts: {
    alignItems: "center",
    margin: "auto",
  },
  

});

export default AccountTatto;
