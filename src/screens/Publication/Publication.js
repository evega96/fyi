import React from "react";
import { useNavigation } from "@react-navigation/native";
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
function Publication({ route }) {
    const { result } = route.params;
    console.log(result.imageUrl);
    return (
        <View style={styles.container}>
            <Image source={{ uri: result.imageUrl }} style={styles.image} />
            <Text>{result.documentdb}</Text>
            {/* Aquí puedes agregar más elementos y lógica para subir la imagen a Firebase */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 600,
        height: 600,
        resizeMode: "cover",
    },
});
export default Publication;
