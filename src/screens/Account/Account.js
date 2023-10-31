import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { getNameById, getCurrentUserId } from "../../app/api";
import img from "../../../assets/FotodePerfil.jpg";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import {getUser} from "../../app/api"
import Configuration from "../../components/ConfigorationIcon";
import Modal from "react-native-modal";
import Count from "../../components/Cuenta";
import Privacidad from "../../components/Privacidad";
import Contein from "../../components/Contenido";
import Not from "../../components/Notificaciones";
import Langua from "../../components/Idiomas";
import Pagos from "../../components/Pagos";
import Reser from "../../components/Reservas";
import Ay from "../../components/Ayudas";
import Ajustes from "../../components/Ajustes";
import LineIcon from "../../components/Linea";
import Closed from "../../components/Cerrar";
import { getTwoHumansRoomId } from "../../app/api";


const Account = ({ navigation, route }) => {
   const [userName, setUserName] = useState('');
  const [error, setError] = useState('');
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
    const getUser = async () => {
      try {
        const userId = await getCurrentUserId(); // Asegúrate de que esta función existe y devuelve el ID del usuario.
        const userData = await getNameById(userId); // Asegúrate de que esta función obtiene los datos del usuario por su ID.
  
        console.log("ID:", userId);
        console.log("DATA:", userData);
  
        if (userData) {
          setUserName(userData);
        } else {
          setError('User not found');
        }
      } catch (error) {
        setError('Error fetching user data: ' + error.message);
      }
    }
  
    getUser();
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
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contenido}>
        <TouchableOpacity onPress={showModal}>
          <Configuration style={styles.Configuration} />
        </TouchableOpacity>
    
        <Modal isVisible={isModalVisible}>
          <View style={styles.modalContent}>
            <View style={styles.modalTexts}>
              <View>
                <Text style={{ color: "white", padding: 20, margin: "auto", left: 90, padding: 30}}>
                  <Ajustes />
                </Text>
                <View style={styles.headerModal}> 
                  <Text style={styles.LineIcon}>
                    <LineIcon /> 
                  </Text>
                </View>
                <View style={styles.Iconos}>
                  <Text style={{ color: "white", padding: 15 }} onPress={()=>Alert.alert(".....hola")}>
                    <Count/>
                  </Text>
                  <Text style={{ color: "white" , padding: 15}} onPress={()=>Alert.alert(".....hola")}>
                    <Privacidad />
                  </Text>
                  <Text style={{ color: "white", padding: 15 }} onPress={()=>Alert.alert(".....hola")}>
                    <Contein />
                  </Text>
                  <Text style={{ color: "white", padding: 15 }} onPress={()=>Alert.alert(".....hola")}>
                    <Not />
                  </Text>
                  <Text style={{ color: "white" , padding: 15}} onPress={()=>Alert.alert(".....hola")}>
                    <Langua />
                  </Text>
                  <Text style={{ color: "white", padding: 15 }} onPress={()=>Alert.alert(".....hola")}>
                    <Pagos  />
                  </Text>
                  <Text style={{ color: "white" , padding: 15}} onPress={()=>Alert.alert(".....hola")}>
                    <Reser />
                  </Text>
                  <Text style={{ color: "white", padding: 15 }} onPress={()=>Alert.alert(".....hola")}>
                    <Ay />
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={hideModal}>
                <Text style={{ color: "#ffffff"  }}>  <Closed /> </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
          
        <View style={styles.HeaderButton}>
          <Text style={styles.userName}>Usuario: {userName }</Text>
          <Image source={img} style={styles.profileImage} />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("EditarPerfil")}
          >
            <Text style={styles.buttonText}>Editar Perfil</Text>
          </TouchableOpacity>
       
          <TouchableOpacity
            style={styles.button}
            onPress={()=>handleContactButtonClick('93i5kPJhBLRB6KnwY87m9yVOJiE2')}
          >
            <Text style={styles.buttonText}>Contactar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Compartir</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Text}>
          <Text style={{ color: 'white' }}> Fan de los tatuajes</Text>
          <Text style={{ color: 'white' }}> BARCELONA</Text>
          <View style={styles.tatuajes}>
            <TouchableOpacity style={styles.buttons} onPress={() => {
              alert("");
            }}>
              <Text style={styles.buttonText}>Mis Tatuajes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => {
              alert("");
            }}>
              <Text style={styles.buttonText}>Colecciones</Text>
            </TouchableOpacity>
          </View>
        </View>
        {images.map((image) => (
          <Image
            key={image.id}
            source={{ uri: image.url }}
            style={styles.image}
          />
        ))}
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
    color: "#EEEEEE"
  },
  HeaderButton: {
    position: "relative",
    alignItems: "center",
    marginTop: 40,
    right: -55,
    width: 200,
  },
  button: {
    backgroundColor: "#6B7280",
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 10,
    marginBottom: 5,
    width: 171,
    height: 44,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },
  Text: {
    justifyContent: "center",
    alignItems: "center",
    left: -40
  },
  tatuajes:{ 
    flexDirection: "row",
    padding: 40,
  },
  buttons: {
    backgroundColor: "#4B74F1",
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 10,
    marginBottom: 5,
    right: -10,
    width: 171,
    height: 44,
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
  headerModal: {
    left: -40, 
    flexDirection: "row",
  },
  LineIcon: {
    marginHorizontal: -79
  },
});

export default Account;
