import Message from "./Message";
import Ionicons from "react-native-vector-icons/AntDesign";
import { Image } from "react-native";

const MessageConfig = {
  name: "Mensajes",
  component: Message,
  options: {
    headerTitle: "Mensajes",
    headerTintColor: '#ffffff',
    tabBarIcon: () => <Image source={require('../../../assets/mensaje.png')} />

  },
};

export default MessageConfig;
