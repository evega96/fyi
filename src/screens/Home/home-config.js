import React, { useState } from "react";
import { Image, StyleSheet, View, TouchableOpacity, Text, TextInput, ScrollView } from "react-native";
import Home from "./Home";
import Ionicons from "react-native-vector-icons/Ionicons";
import home from "../../../assets/home.png";

const HomeConfig = {
  name: "Inicio",
  component: Home,
  options: ({ navigation }) => {
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [searchText, setSearchText] = useState("");

    const toggleSearchBar = () => {
      setShowSearchBar(!showSearchBar);
    };

    // Define headerLeft here
    const headerLeft = showSearchBar ? (
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar..."
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        autoFocus
        onBlur={toggleSearchBar}
      />
    ) : null;

    return {
      tabBarIcon: () => <Image source={home} />,
      headerStyle: {
        backgroundColor: "black",
      },
      headerTitleStyle: {
        display: "none",
      },
      headerTransparent: true,
      headerShown: true,
      headerRight: () => (
        <TouchableOpacity style={styles.searchButton} onPress={toggleSearchBar}>
          <Ionicons name="search" size={24} color="#4b74f2" />
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <View style={styles.headerButtonsContainer}>
          <TouchableOpacity style={styles.centerButton} onPress={() => navigation.navigate("ParaTi")}>
            <Text style={styles.buttonText}>Para Ti</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.centerButton} onPress={() => navigation.navigate("Destacados")}>
            <Text style={styles.buttonText}>Destacados</Text>
          </TouchableOpacity>
        </View>
      ),
      headerRightContainerStyle: { paddingRight: 20 },
      // Include headerLeft here
      headerLeft: () => headerLeft,
    };
  },
};

const styles = StyleSheet.create({
  headerButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  centerButton: {
    marginHorizontal: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    left: 40,
    width: 100,
    height: 44,
    
  },
  buttonText: {
    color: "#4b74f2",
    textAlign: "center"
  },
  searchButton: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    borderRadius: 30,
    paddingLeft: 10,
  },
});

export default HomeConfig;
