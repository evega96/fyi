import Add from "./Add";
import Ionicons from "react-native-vector-icons/Ionicons";

const AddConfig = {
    name: "Add",
    component: Add,
    options: {
        headerTitle: "Add",
        headerShown: false,
        tabBarStyle: { display: "none" },
        tabBarIcon: () => (
            <Ionicons
                name="add-circle-sharp"

                size={24}

                color="#6451a5"
            ></Ionicons>
        ),
    },
};

export default AddConfig;
