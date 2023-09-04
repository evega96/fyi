import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Home = ({ navigation, route }) => {
  return (
    <View>
      <Text>Screen: {route.name}</Text>
      <Ionicons name="home" size={30} color="#6451a5"></Ionicons>

      <Pressable onPress={() => {}}>
        <Button title="pulsar" />
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
