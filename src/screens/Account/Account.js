import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { getNameById, getCurrentUserId } from "../../app/api";
import img from "../../../assets/FotodePerfil.jpg";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { getUser } from "../../app/api"
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
import Ioniconss from "react-native-vector-icons/Ionicons";
import {logout} from "../../app/api";
import Flechi from "../../components/Flecha";


const Account = ({ navigation, route }) => {
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');
  const [images, setImages] = useState([]);
  const storage = getStorage();
  const [isModalVisible, setModalVisible] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(true);

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
  
 

  const handleOnPressAdd = () =>{
    navigation.navigate('Add')
    console.log('11111111111' , handleOnPressAdd)
  }

  return (
  
      <ScrollView style={{backgroundColor: '#313131'}} contentContainerStyle={styles.contenido}>
        <TouchableOpacity onPress={showModal}>
          <Configuration style={styles.Configuration} />
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.AddButton}
        onPress={handleOnPressAdd}>
      <Ioniconss
        name="add-circle-sharp"
        size={44}
        color="#fff" /></TouchableOpacity>

        <Modal isVisible={isModalVisible}>
          <View style={styles.modalContent}>
            <View style={styles.modalTexts}>
              <View>
                <Text style={{ color: "white", padding: 20, margin: "auto", left: 90, padding: 30 }}>
                  <Ajustes />
                </Text>
                <View style={styles.headerModal}>
                  <Text style={styles.LineIcon}>
                    <LineIcon />
                  </Text>
                </View>
                <View style={styles.Iconos}>
                  <Text style={{ color: "white", padding: 15 }} onPress={() => Alert.alert(".....hola")}>
                    <Count />
                  </Text>
                  <Text style={{ color: "white", padding: 15 }} onPress={() => Alert.alert(".....hola")}>
                    <Privacidad />
                  </Text>
                  <Text style={{ color: "white", padding: 15 }} onPress={() => Alert.alert(".....hola")}>
                    <Contein />
                  </Text>
                  <Text style={{ color: "white", padding: 15 }} onPress={() => Alert.alert(".....hola")}>
                    <Not />
                  </Text>
                  <Text style={{ color: "white", padding: 15 }} onPress={() => Alert.alert(".....hola")}>
                    <Langua />
                  </Text>
                  <Text style={{ color: "white", padding: 15 }} onPress={() => Alert.alert(".....hola")}>
                    <Pagos />
                  </Text>
                  <Text style={{ color: "white", padding: 15 }} onPress={() => Alert.alert(".....hola")}>
                    <Reser />
                  </Text>
                  <Text style={{ color: "white", padding: 15 }} onPress={() => Alert.alert(".....hola")}>
                    <Ay />
                  </Text>
                  <TouchableOpacity
                  style={styles.logoutButton}
                  onPress={()=>logout()}>
                    <Text style={{padding: 15, right: 60}}><Closed /></Text>
                 <Text style={styles.logoutButtonText}  >  Cerrar Sesión</Text>
                 </TouchableOpacity>

                </View>
              </View>
            </View>
            <View>
              <TouchableOpacity onPress={hideModal}>
                <Text style={ styles.flechaCerrar}>  <Flechi/> </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <View style={styles.HeaderButton}>
          <Text style={styles.userName}>Usuario: {userName}</Text>
          <Image source={img} style={styles.profileImage} />

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("EditarPerfil")}
          >
            <Text style={styles.buttonText}>Editar Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleContactButtonClick('93i5kPJhBLRB6KnwY87m9yVOJiE2')}
          >
            <Text style={styles.buttonText}>Mensaje</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={() => Alert.alert("Compartir")}>Compartir</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Text}>
          <Text style={{ color: 'white' }}> Fan de los tatuajes</Text>
          <Text style={{ color: 'white' }}> BARCELONA</Text>
          <View style={styles.tatuajes}>
  <TouchableOpacity
    style={[
      styles.buttons,
      buttonPressed === 'MisTatuajes' ? { backgroundColor: 'white' } : { backgroundColor: 'black' }
    ]}
    onPress={() => {Alert.
      alert("Mis Tatuajes");
      setButtonPressed('MisTatuajes');
    }}
  >
    <Text style={[
      styles.buttonsText,
      buttonPressed === 'MisTatuajes' ? { color: 'blue' } : { color: 'white' }
    ]}>Mis Tatuajes</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={[
      styles.buttons,
      buttonPressed === 'Colecciones' ? { backgroundColor: 'white' } : { backgroundColor: 'black' }
    ]}
    onPress={() => {Alert.
      alert("Colecciones");
      setButtonPressed('Colecciones');
    }}
  >
    <Text style={[
      styles.buttonsText,
      buttonPressed === 'Colecciones' ? { color: 'blue' } : { color: 'white' }
    ]}>Colecciones</Text>
  </TouchableOpacity>
</View>

        </View>
        {images.map((image) => (
          <Image
            key={image.id}
            source={{ uri: image.url }}
            style={styles.imagenes}
          />
        ))}
      </ScrollView>
   
  );

};

const styles = StyleSheet.create({

  profileImage: {
    width: 120,
    height: 150,
    borderRadius: 75,
    marginBottom: -20,
    marginTop: 20
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
    right: -9,
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
  buttonsText: {
    color: "#314C9F",
    fontWeight: "bold",
    textAlign: "center"
  },
  Text: {
    justifyContent: "center",
    alignItems: "center",
    left: -40
  },
  tatuajes: {
    flexDirection: "row",
    padding: 40,
  },
  buttons: {
    
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
  imagenes: {
    width: 150,
    height: 150,
    resizeMode: 'cover', 
    margin: 15,
    marginLeft: 25
    
  },
  Configuration: {
    left: 340,
    marginTop: 10,
  },
  modalContent: {
    backgroundColor: "#313131",
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
  ImagePairsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  imagePair: {
    alignItems: "center",
    margin: 5,
  },
  border: {
    width: 10, // Adjust the width as needed
    height: "100%",
    backgroundColor: "transparent", // You can set the desired border color here
  },
  AddButton: {
    marginTop: 70,
    left: 298,
    
  },
  logoutButton: {
    
    left: 62
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 18,
    top: -40,
    right: 10
  },
  flechaCerrar: {
 
    left: 280
  },
});

export default Account;