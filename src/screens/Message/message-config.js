import Message from "./Message";
import Ionicons from "react-native-vector-icons/AntDesign";
import img from '../../../assets/mensaje.png';
import { Image } from "react-native";

const MessageConfig = {
  name: "Mensajes",
  component: Message,
  options: {
    headerTitle: "Mensajes",
    tabBarIcon: () => <Image source={img} />
  },
};

export default MessageConfig;
