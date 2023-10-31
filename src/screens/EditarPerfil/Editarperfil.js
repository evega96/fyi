import React, { useState, useEffect, useContext} from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, 
Alert } from "react-native";
import img from "../../../assets/FotodePerfil.jpg"
import { getUser } from "../../app/api";
import { getNameById } from "../../app/api";
import { getCurrentUserId } from "../../app/api";
import ImageIcon from "../../components/Imagen";
import LineIcon from "../../components/Linea";
import Configuration from "../../components/ConfigorationIcon";
import Modal from "react-native-modal"; // Importar la biblioteca react-native-modal+
import Ajustes from "../../components/Ajustes";
import Count from "../../components/Cuenta";
import Privacidad from "../../components/Privacidad";
import Contein from "../../components/Contenido";
import Not from "../../components/Notificaciones";
import Langua from "../../components/Idiomas";
import Pagos from "../../components/Pagos";
import Reser from "../../components/Reservas";
import Ay from "../../components/Ayudas";
import Closed from "../../components/Cerrar";
import Photo from "../../components/IconoFoto";
import TextPho from "../../components/TextPhoto";
import TextO  from "../../components/MiTextoDeElPerfil";
import IconGalery from "../../components/GaleriaIcon";
import TextGalery from "../../components/TextoGaleria";
import Delete from "../../components/Eliminar";
import TextDelete from "../../components/EliminarTexto";
import ImagenCorrect from "../../components/IconoCorrecto";
import Man from "../../components/Hombre";
import Ubi from "../../components/QuitarUbicacion";
import Description from "../../components/TextoDescripcion";
import Genders from "../../components/Genero";
import Flechi from "../../components/Flecha";
import Max from "../../components/MaximGen";
import Cuadra from "../../components/Cuadradadito";
import Wom from "../../components/Woman";
import Espeficicar from "../../components/Espeficicar";

const EditarPerfil = ({ navigation }) => {
  const [userName, setUserName] = useState(""); // Estado para almacenar el  de usuario
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalShowImage, setModalImageVisible] = useState(false);
  const [isModalShowGender, setModalShowGender] = useState(false);
  const [cuadroPresionado, setCuadroPresionado] = useState(false);
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);

  const toggleCheckBox = (buttonNumber) => {
    if (buttonNumber === 1) {
      setChecked1(!isChecked1);
      setChecked2(false);
      setChecked3(false);
    } else if (buttonNumber === 2) {
      setChecked1(false);
      setChecked2(!isChecked2);
      setChecked3(false);
    } else if (buttonNumber === 3) {
      setChecked1(false);
      setChecked2(false);
      setChecked3(!isChecked3);
    }
  };
  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };
 const showModalImage = () => {
  setModalImageVisible(true);
 };
 const hideModalImage = () => {
  setModalImageVisible(false);
 };

 const ShowModalGender = () => {
  setModalShowGender(true);
 };

 const HideModalGender = () => {
  setModalShowGender(false);
 };
  console.log(userName)

 
// Suponiendo que `userName` proviene del contexto de autenticación

  const guardarCambios = () => {
    // Lógica para guardar los cambios en el perfil
    // Puedes utilizar la información almacenada en '' y 'descripcion'
    // Por ejemplo, enviar los datos a la API para guardar en la base de datos
    // ...

    // Navegar de vuelta a la pantalla de cuenta después de guardar los cambios
    navigation.goBack();
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
 
  return (
    <View style={styles.container}>
      <View style={styles.configuration}>
      <TouchableOpacity onPress={showModal}>
          <Configuration  />
        </TouchableOpacity>

      </View>
     
      <Text style={styles.userName}>usuario:  {userName}</Text>
       
      <View>
      
      <ImageIcon style={styles.Image} onPress={() => {
          alert("");}}/>
         
      <Image source={img} style={styles.profileImage}>
      
      </Image>
      
      </View>
  
      <TouchableOpacity style={styles.button} onPress={showModalImage}>
        <Text style={styles.buttonText}>Cambiar foto de Perfil</Text>
      </TouchableOpacity>

      <Modal
         isVisible={isModalShowImage}
         animationType="slide"
         transparent={true}
         onRequestClose={hideModalImage}
      >
        <View style={styles.modalContainer}>
          {/* Contenido personalizado para tu modal */}
          <View>
          <Text style={styles.modalsTexts} ></Text>
          <View style={styles.TextosPerile}>
            <TextO />
            <View style={styles.Correcto}>
            <ImagenCorrect  onPress={()=>Alert.alert("imagen guardada ")}/>
            </View>
           
            </View>
        
          <Image source={img}  style={styles.profilesImage} /> 
          
          
          
          <View style={styles.TextsPerfil}>
          <Text style={{ padding: 15}} onPress={()=>Alert.alert("...pendejo")}>  
        
        < Photo/> <TextPho /> 
        </Text>
        </View>
         
          
         
          <View style={styles.TextoosPerfil}>
          
          <Text style={{ padding: 15}} onPress={()=>Alert.alert(".....hola")}>  
        
          <IconGalery/> <TextGalery /> 
          </Text>
          </View>
          
          <View style={styles.TextsPerfil}>
          <Text style={{ padding: 15}} onPress={()=>Alert.alert(".....hola")}>  
        
        < Delete/> <TextDelete /> 
        </Text>
        </View>
          </View>
          
          
          <TouchableOpacity style={styles.botton} onPress={hideModalImage}>
         
            <Text style={styles.bottonText} >Cerrar </Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <TouchableOpacity style={styles.button} onPress={guardarCambios}>
        <Text style={styles.buttonText}>Guardar Cambios</Text>
      </TouchableOpacity>
      
      
      
      <View  style={styles.Texts} >
<View style={styles.descripcion}>
<Text  style={{ color: "white" , padding: 10, right: 10}}>Descripción   </Text>

      
       <Text style={{ color: "white" }}>
        <Description />
       </Text>
       
          
        
         
</View>

          <View style={styles.LineIcon}>
          <LineIcon />
          </View>
          
       </View>
       <View style={styles.descrip}>
        <View style={styles.ContainerGenders}>
          <Genders />
        <Text  style={{ color: "white" }} />  
       

        <View style={styles.Manly}>
        <Man/> 
        <View style={styles.flechote}>
          <View style={styles.Generos}>
          <Modal
         isVisible={isModalShowGender}
         animationType="slide"
         transparent={true}
         onRequestClose={HideModalGender}
      >
        <View style={styles.modalContainer}>
          {/* Contenido personalizado para tu modal */}
          <View>
          <Text style={styles.modalsTexts} ></Text>
          <View style={styles.TextoGrande}>
            <Max />
          <View style={styles.Correctooss}>
            <ImagenCorrect  onPress={()=>Alert.alert(".....hola")}/>
            </View>
           
            
           
            </View>
        
        
        
          <View style={styles.CuadradoContainer}>
          <View style={styles.Cuadrado1}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => toggleCheckBox(1)}>
          <Text style={{marginTop: -10}}>{isChecked1 ? "✔️" : ""}</Text>
          <View style={{marginTop: -20,right: 5  }}>
          <Cuadra />
          </View>
          
        </TouchableOpacity>
        <Text style={{ color: "white", padding: 10, left: 20, marginVertical: -15 }}>
         <Wom />
        </Text>
      </View>
    </View>

        <View style={styles.Cuadrado2}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => toggleCheckBox(2)}>
          <Text style={{marginTop: -10}}>{isChecked2 ? "✔️" : ""}</Text>
          <View style={{marginTop: -20,right: 5  }}>
          <Cuadra />
          </View>
          
        </TouchableOpacity>
        <Text style={{ color: "white", padding: 10, left: 20, marginVertical: -15 }}>
         <Man />
        </Text>
      </View>
    </View>
          
    <View style={styles.Cuadrado3}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => toggleCheckBox(3)}>
          <Text style={{marginTop: -10}}>{isChecked3 ? "✔️" : ""}</Text>
          <View style={{marginTop: -20,right: 5  }}>
          <Cuadra />
          </View>
          
        </TouchableOpacity>
        <Text style={{ color: "white", padding: 10, left: 20, marginVertical: -15 }}>
         <Espeficicar />
        </Text>
      </View>
    </View>
        <TouchableOpacity style={styles.botton} onPress={HideModalGender}>
         
         <Text style={styles.bottonText} >Cerrar </Text>
       </TouchableOpacity>

        </View>
          </View>
          
        
        </View>
      </Modal>
            
            <TouchableOpacity onPress={ShowModalGender}>

             
            <Flechi />
            
            </TouchableOpacity>
            
         
          </View>
        
          </View> 
        
        <View style={styles.LinesIcons}>
          <LineIcon />
          </View>
        </View>
      <View style={styles.Ubica}>
      
<Ubi onPress={()=>Alert.alert("Ubicación quitada")} />

      </View>
        </View>
        <Modal isVisible={isModalVisible}>
          <View style={styles.modalContent}>
            <View style={styles.modalTexts}>
            <View>
            <Text style={{ color: "white", padding: 20, margin: "auto", left: 90,padding: 30}}> <Ajustes />   </Text>

     <View style={styles.headerModal}> 
     <Text style={styles.LineIcon}>
     <LineIcon /> 
     </Text>
     
     </View>
     <View style={styles.Iconos}>
     <Text style={{ color: "white", padding: 15 }} onPress={()=>Alert.alert(".....hola")}> <Count/>   </Text>
            
            <Text style={{ color: "white" , padding: 15}} onPress={()=>Alert.alert(".....hola")}> <Privacidad />  </Text>
            <Text style={{ color: "white", padding: 15 }} onPress={()=>Alert.alert(".....hola")}> <Contein />    </Text>
            <Text style={{ color: "white", padding: 15 }} onPress={()=>Alert.alert(".....hola")}> <Not />  </Text>
            <Text style={{ color: "white" , padding: 15}} onPress={()=>Alert.alert(".....hola")}> <Langua /></Text>
            <Text style={{ color: "white", padding: 15 }} onPress={()=>Alert.alert(".....hola")}> <Pagos  />  </Text>
            <Text style={{ color: "white" , padding: 15}} onPress={()=>Alert.alert(".....hola")}> <Reser /> </Text>
            <Text style={{ color: "white", padding: 15 }} onPress={()=>Alert.alert(".....hola")}> <Ay /> </Text>
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


</View>
     
     
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black",
    
  },
  profileImage: {
    width: 120,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    position: "relative"
  },
  input: {
    width: "80%",
    height: 40,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 20,
    paddingLeft: 10,
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
    textAlign: "center",
    
  },
  Image:{
  width: 35,
  height: 35,
  top: 40,
  left: 92,
  borderRadius: 200,
  zIndex: 10
  },
  Texts: {
    justifyContent: "center",
    alignItems: "center",
    color: "#EEEEEE",
  },
  descripcion: {
    padding: 10,
    marginRight: 160
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
    marginHorizontal: -79,
    marginTop: 20
  },
  configuration: {
    width: "100%",
   alignItems: "flex-end",
    marginRight: 10
  },
  
  modalText: {
    fontSize: 18,
    marginBottom: 20,
   
  },
   modalContainer: {
    backgroundColor: '#6B7280',
    padding: 40,
    borderRadius: 10,
    flex: 0.6,
    
    
    
  },
  botton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 10,
    marginVertical:60,
    marginBottom: 5,
  }, 
  bottonText: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  }, 
  modalsTexts: {
    alignItems: "center",
    margin: "auto",
    flex: 1
  },
  profilesImage: {
    width: 100,
    height: 100,
    borderRadius: 75,
    marginBottom: 20,
    position: "relative"
  }, 
  TextsPerfil: {
    marginTop: 10,
    
    
  }, 
  TextosPerile: {
     flexDirection: "row",
     left: 120,
     top: 70
  },
  lineaTextos: {
    right: 10
  }, 
  TextoosPerfil: {
    right: 3
  }, 
  Correcto: {
    left: 50
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#EEEEEE",
  
  },
 Manly: {
  marginTop: 10
 },
 Ubica: {
  marginTop: 20 
 }, 
 ContainerGenders: {
 left: 110,
 }, 
 descripcion: {
 

  marginLeft: -24

 }, 
descrip: {
  marginTop: 10,
  marginLeft: -145
}, 
LinesIcons: {
  marginLeft: -120, 
  marginTop: 10
}, 
flechote: {
  left: 300,
  marginTop: -15
}, 
TextoGrande:{
right: 0
},
Correctooss: {
  left: 250,
  marginTop: -15
}, 
Cuadrado1: {
  marginTop: 20,
  padding: 10
},


 Cuadrado2:  {
  marginTop: 20,
  padding: 10 
}, 
Cuadrado3: {
  marginTop: 20,
  padding: 10
}, 
CuadradoContainer: {
  marginTop: 40
}, 


});

export default EditarPerfil;
