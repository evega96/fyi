import Home from "./Home";
import Ionicons from "react-native-vector-icons/Ionicons";
import home from "../../../assets/home.png";
import { Image } from "react-native";

const HomeConfig = {
  name: "Home",
  component: Home,
  options: {
    headerShown: false,
    headerTitle: "Home",
    tabBarIcon: () => <Image source={home} />,
  },
};

export default HomeConfig;
