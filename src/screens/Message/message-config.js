import Message from "./Message";
import Ionicons from "react-native-vector-icons/AntDesign";

const MessageConfig = {
  name: "Message",
  component: Message,
  options: {
    headerTitle: "Message",
    tabBarIcon: () => (
      <Ionicons name="message1" size={30} color="#6451a5"></Ionicons>
    ),
  },
};

export default MessageConfig;
