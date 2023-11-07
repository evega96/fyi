import { Pressable, Text } from "react-native";
const TattooArtistBottomConfig = {
  screenOptions: {
    headerStyle: {
      backgroundColor: "#000000", // Color de fondo de la cabecera
    },
    //headerShown: false, // Ocultar la cabecera
    headerTintColor: "#313131", // Estilos del texto de la cabecera
    headerRight: () => (
      <Pressable onPress={() => { }}>
        <Text>Log out</Text>
      </Pressable>
    ), // Mostramos contentenido en la parte derecha de la barra superior. No se verá si headerShown es false
  },
};

export default TattooArtistBottomConfig;
