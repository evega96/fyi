import AddDetails from "./AddDetails";
import Ionicons from "react-native-vector-icons/MaterialCommunityIcons";

const AddDetailsConfig = {
  name: "AddDetailsConfig",
  component: AddDetails,
  options: {
    headerTitle: "AddDetailsConfig",
    tabBarIcon: () => (
      <Ionicons name="account" size={30} color="#6451a5"></Ionicons>
    ),
  },
};

export default AddDetailsConfig;
