import Add from "./Add";
import Ionicons from "react-native-vector-icons/Ionicons";

const AddConfig = {
    name: "Add",
    component: Add,
    options: {
        headerTitle: "Add",
        headerShown: true,
        tabBarStyle: { display: "none", },
        headerStyle:{backgroundColor: '#313131'},
        headerTintColor: '#ffffff'
        
    },
};

export default AddConfig;
