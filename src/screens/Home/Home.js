import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { logout } from "../../app/api";

const Home = ({ navigation, route }) => {
  const handleLogout = () => {
    logout();
  };
  return (
    <View style={styles.container}>
      <Text>Screen: {route.name}</Text>
      <Ionicons name="home" size={30} color="#6451a5" />

      <Pressable style={styles.button} onPress={handleLogout}>
        <Text>Cerrar sesión</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
});
