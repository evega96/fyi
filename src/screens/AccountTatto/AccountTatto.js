import React, { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ScrollView,userID } from "react-native";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";
import { getItemById, logout } from "../../app/api"; // Asegúrate de importar getItemById correctamente
import img from "../../../assets/FotodePerfil.jpg";
import { AuthenticatedUserContext } from "../../Context/AuthContextProdiver";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { getUser } from "../../app/api";
import ConfigurationIcon from "../../components/configurationIcon";
import { Modal } from "react-native";
const AccountTatto = ({ navigation, route }) => {
  const { userid, setUserid } = useContext(AuthenticatedUserContext);
  const [userName, setUserName] = useState(""); // Estado para almacenar el nombre de usuario
  const [images, setImages] = useState([]);
  const storage = getStorage();
  const [isModalVisible, setModalVisible] = useState(false);
  console.log(userName)
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }

  useEffect(() => {
    const user = async ()=>{
        const id = "BcFleS8Au3e7cBKJl9DQggKjOBg1";
       const data=  await getUser(id);
       setUserName(data.usuario)
       console.log(data);
    }
    user();
  }, []);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageRef = ref(storage); // Ref al directorio principal de Storage
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
        <View>
          <TouchableOpacity  onPress={() => {
          alert("");}}>
          <ConfigurationIcon  style={styles.Configuration} />
    
          </TouchableOpacity>
          
          </View>
          
      
      <View style={styles.HeaderButton}>
      <Text style={styles.userName}>usuario:{userName}</Text>
      <Image source={img} style={styles.profileImage} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("EditarPerfil")}
>
          <Text style={styles.buttonText}>Mensaje</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}  onPress={() => {
          alert("");}}>
          <Text style={styles.buttonText}>Seguir</Text>
        </TouchableOpacity>
        
      </View>
      <View style={styles.Texts}>
      <Text style={{ color: 'white' }}> TATUAJE TRADICIONAL <Text style={{ color: 'blue' }}>@savannahngu</Text></Text>
      <Text style={{ color: 'white' }}>TATUADO EN <Text style={{ color: 'blue' }}>@seny_tattos</Text></Text>
      <Text style={{ color: 'white' }}> BASED IN BARCELONA </Text>

      <View style={styles.tatuajes}>
      <TouchableOpacity style={styles.buttons} onPress={() => {
          
          alert("");
        }}>
          <Text style={styles.buttonText}> Publicaciones</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.buttons} onPress={() => {

        alert("");
      }}>
          <Text style={styles.buttonText}> Opiniones</Text>
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
    backgroundColor: "black"
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
    textAlign: "center"
  },
  Texts: {
    justifyContent: "center",
    alignItems: "center",
    left: 40,
    color: "#EEEEEE"

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
    right: 5
  },
  contenido: {
    flexDirection: "row",
    flexWrap: "wrap",
    
  },
  image: {
    width: "50%", // Esto hará que las imágenes aparezcan en filas de 2
    height: 200, // Establece la altura deseada
    resizeMode: "cover", // Ajusta el modo de redimensionamiento según tus necesidades
  },
  Configuration: {
    left: 350,
    color: "#EEEEEE"
  }
});

export default AccountTatto;
