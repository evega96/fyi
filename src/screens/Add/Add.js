import React, { useState, useEffect } from "react";
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
import Ionicons from "react-native-vector-icons/Ionicons";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import DownArrow from "../../components/Icons/DownArrow";
import Cancel from "../../components/Icons/Cancel";
import MultiSelect from "../../components/Icons/MultiSelect";
import Expand from "../../components/Icons/Expand";
import { useNavigation } from "@react-navigation/native";
import Camara from "../../components/Icons/Camara";
import { useContext } from "react";
import { AuthenticatedUserContext } from "../../Context/AuthContextProdiver";

const Add = () => {
    const [lastImage, setLastImage] = useState(null);
    const [recentImages, setRecentImages] = useState([]);
    const [numColumns, setNumColumns] = useState(3); // Estado para el número de columnas
    const { user, setUser } = useContext(AuthenticatedUserContext);

    const navigation = useNavigation();

    useEffect(() => {
        async () => {
            await MediaLibrary.requestPermissionsAsync();
        };
    }, []);

    useEffect(() => {
        (async () => {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            if (status !== "granted") {
                alert("Permission to access media library is required!");
                return;
            }
            const assets = await MediaLibrary.getAssetsAsync({
                first: 100,
                mediaType: "photo",
            });

            setRecentImages(assets.assets);

            // Configurar la última imagen inicialmente con la última imagen de la lista
            if (assets.assets.length > 0) {
                setLastImage(assets.assets[assets.assets.length - 1].uri);
            }
        })();
    }, []);

    const pickImage = async () => {
        const { status } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
            alert("Permission to access media library is required!");
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });
        if (!result.cancelled) {
            setLastImage(result.uri);

            // Navegar a la pantalla AddDetails con la imagen seleccionada como parámetro
            navigation.navigate("AddDetails", { selectedImage: result.uri });
        }
    };

    // Function to change the number of colunms
    const changeNumColumns = (columns) => {
        setNumColumns(columns);
    };

    return (
        <ScrollView style={styles.container}>
            

            <View style={styles.imageContainer}>
                {lastImage && (
                    <Image
                        source={{ uri: lastImage }}
                        style={styles.imageImage}
                    />
                )}
            </View>
            <View style={styles.middleTols}>
                <View style={styles.leftMiddleTols}>
                    <Text style={styles.textMiddle}>Recientes</Text>
                    <DownArrow />
                </View>
                <View style={styles.rightMiddleTols}>
                    <MultiSelect />
                    <Camara />
                </View>
            </View>

            <View style={styles.imagesContainer}>
                {/* Utiliza FlatList para las imágenes recientes */}
                {<FlatList
                    data={recentImages}
                    keyExtractor={(item) => item.id}
                    numColumns={numColumns}
                    contentContainerStyle={{
                        paddingBottom:
                            Math.ceil(recentImages.length / numColumns) * 150, // 150 es la altura de una imagen
                    }}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => setLastImage(item.uri)}
                        >
                            <Image
                                source={{ uri: item.uri }}
                                style={styles.image}
                            />
                        </TouchableOpacity>
                    )}
                    />}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                            navigation.navigate("AddDetails", {
                                selectedImage: lastImage,
                            })
                        }
                    >
                        <Text>Siguiente</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#313131",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 10,
    },
    textHeader: {
        justifyContent: "center",
        color: "white",
    },
    imageContainer: {
        width: "100%", // Esto hará que las imágenes aparezcan en filas de 2
    },
    imageImage: {
        width: "100%",
        height: 320,
        objectFit: "contain",
    },
    image: {
        width: 150,
        height: 150,
    },

    middleTols: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 15,
    },
    leftMiddleTols: {
        flexDirection: "row",
        width: 180,
        justifyContent: "space-around",
        marginRight: 50,
    },
    rightMiddleTols: {
        flexDirection: "row",
        width: 180,
        justifyContent: "space-around",
    },
    textMiddle: {
        justifyContent: "center",
        color: "white",
    },
    imagesContainer: {
        position: "relative",
        height: 430,
        borderWidth: 1,
        borderColor: "red",
    },
    buttonContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "transparent", // Cambia el color de fondo según tus preferencias
    },
    button: {
        position: "relative",
        right: 0,
        width: 100,
        padding: 15,
        backgroundColor: "#4B74F2",
        borderRadius: 20,
    },
});

export default Add;
