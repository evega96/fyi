import Message from "./Message";
import Ionicons from "react-native-vector-icons/AntDesign";
import img from '../../../assets/mensaje.png';
import { Image } from "react-native";

const MessageConfig = {
  name: "Message",
  component: Message,
  options: {
    headerTitle: "Message",
    tabBarIcon: () => <Image source={img} />
  },
};

export default MessageConfig;
