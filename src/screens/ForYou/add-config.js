import ForYou from "./Add";
import Ionicons from "react-native-vector-icons/Ionicons";

const ForYouConfig = {
  name: "Add",
  component: Add,
  options: {
    headerTitle: "Add",
    tabBarIcon: () => (
      <Ionicons name="add-circle-sharp" size={30} color="#6451a5"></Ionicons>
    ),
  },
};

export default ForYouConfig;
