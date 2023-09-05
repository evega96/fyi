import { Pressable, Text } from "react-native";
const BottomConfig = {
    screenOptions: {
        headerStyle: {
            backgroundColor: '#000000' // Color de fondo de la cabecera
        },
        //headerShown: false, // Ocultar la cabecera
        headerTintColor: '#6541a5', // Estilos del texto de la cabecera
        headerRight: () => (<Pressable onPress={() => { }}><Text>Log out</Text></Pressable>) // Mostramos contentenido en la parte derecha de la barra superior. No se verá si headerShown es false

    },
};

export default BottomConfig;