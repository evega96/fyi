import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Image,
  Button,
} from "react-native";
import Header from "../../components/Header";

const Home = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Header navigation={navigation} />
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image
              source={require("../../../assets/TattoImage/1.png")}
              style={styles.cardImage}
            />
          </View>
          <View style={styles.card}>
            <Image
              source={require("../../../assets/TattoImage/2.png")}
              style={styles.cardImage}
            />
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image
              source={require("../../../assets/TattoImage/3.png")}
              style={styles.cardImage}
            />
          </View>
          <View style={styles.card}>
            <Image
              source={require("../../../assets/TattoImage/4.png")}
              style={styles.cardImage}
            />
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image
              source={require("../../../assets/TattoImage/5.png")}
              style={styles.cardImage}
            />
          </View>
          <View style={styles.card}>
            <Image
              source={require("../../../assets/TattoImage/6.png")}
              style={styles.cardImage}
            />
          </View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image
              source={require("../../../assets/TattoImage/7.png")}
              style={styles.cardImage}
            />
          </View>
          <View style={styles.card}>
            <Image
              source={require("../../../assets/TattoImage/8.png")}
              style={styles.cardImage}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    width: "48%", // 50% del ancho del contenedor
    height: 300, // Altura fija de la tarjeta
    borderRadius: 8, // Si deseas bordes redondeados
    overflow: "hidden", // Para que la imagen no se desborde del contenedor
  },
  cardImage: {
    flex: 1,
    width: "100%", // Ocupa todo el ancho disponible dentro de la tarjeta
    height: "100%", // Ocupa todo el alto disponible dentro de la tarjeta
    resizeMode: "cover", // Ajusta la imagen al tamaño de la tarjeta sin recortarla ni estirarla
  },
});

export default Home;
