import Message from "./Message";
import Ionicons from "react-native-vector-icons/AntDesign";
import img from '../../../assets/mensaje.png';
import { Image } from "react-native";

const MessageConfig = {
  name: "Message",
  component: Message,
  options: {
<<<<<<< Updated upstream
    headerTitle: "Message",
    tabBarIcon: () => <Image source={img} />
=======
    headerTitle: "Mensajes",
    headerTintColor: '#ffffff',
    tabBarIcon: () => <Image source={require('../../../assets/mensaje.png')} />
>>>>>>> Stashed changes
  },
};

export default MessageConfig;
