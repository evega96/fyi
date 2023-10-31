import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { signUp } from "../../app/api";

const TattooPreferences = ({ route }) => {
  const { email, password, user, birthday, additionalInfo1, additionalInfo2, role} = route.params;
  const [preferences, setPreferences] = useState({
  
    japoneses: {
      name: 'japoneses',
      value: false,
      image: require('../../../assets/blackout.jpeg')
    },
    lineas: {
      name: 'lineas',
      value: false,
      image: require('../../../assets/blackout.jpeg')
    },
    tradicional: {
      name: 'tradicional',
      value: false,
      image: require('../../../assets/blackout.jpeg')
    },
    neotradicional: {
      name: 'neotradicional',
      value: false,
      image: require('../../../assets/blackout.jpeg')
    },
    ornamental: {
      name: 'ornamental',
      value: false,
      image: require('../../../assets/blackout.jpeg')
    },
    maori: {
      name: 'maori',
      value: false,
      image: require('../../../assets/blackout.jpeg')
    },
    anime: {
      name: 'anime',
      value: false,
      image: require('../../../assets/blackout.jpeg')
    },
    realista: {
      name: 'realista',
      value: false,
      image: require('../../../assets/blackout.jpeg')
    }
  });

  const togglePreference = (preferenceName) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [preferenceName]: {
        ...prevPreferences[preferenceName],
        value: !prevPreferences[preferenceName].value,
      },
    }));
  };
  
  const handleOnPress = async () =>{
    try {
      await signUp(
        email,
        password,
        user,
        birthday,
        additionalInfo1,
        additionalInfo2,
        role,
        preferences
      )
    } catch (error) {
      Alert.alert(error)
      console.log(error)
    }
  }
  

  const numColumns = 2;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.preferenceItem}
      onPress={() => togglePreference(item.name)}
    >
      <Image source={item.image} style={styles.preferenceImage} />
      <View style={styles.preferenceInfo}>
        <View
          style={{
            width: 24,
            height: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: item.value ? "green" : "gray",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {item.value && <Icon name="check" size={16} color="green" />}
        </View>
        <Text style={styles.preferenceText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const preferenceArray = Object.values(preferences);
  const rows = [];
  for (let i = 0; i < preferenceArray.length; i += numColumns) {
    rows.push(preferenceArray.slice(i, i + numColumns));
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.header}>Selecciona tus preferencias de tatuajes:</Text>

      {rows.map((row, index) => (
        <View style={styles.row} key={index}>
          {row.map((item) => (
            <View key={item.name} style={styles.column}>
              {renderItem({ item })}
            </View>
          ))}
        </View>
      ))}

      {/* Botón para guardar las preferencias */}
      <TouchableOpacity style={styles.saveButton} onPress={handleOnPress}>
        <Text style={styles.saveButtonText}>Guardar Preferencias</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
  },
  preferenceItem: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 10,
  },
  preferenceImage: {
    width: 167,
    height: 143,
    borderRadius:19
  },
  preferenceInfo: {
    alignItems: "center",
    marginTop: 10,
  },
  preferenceText: {
  },
  saveButton: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TattooPreferences;
