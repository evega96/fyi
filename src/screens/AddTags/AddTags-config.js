import AddTags from "./AddTags";
import Ionicons from "react-native-vector-icons/Ionicons";

const AddUbicationConfig = {
    name: "Add",
    component: Add,
    options: {
        headerTitle: "Add",
        headerShown: false,
        tabBarStyle: { display: "none" },
        tabBarIcon: () => (
            <Ionicons
                name="add-circle-sharp"
                size={30}
                color="#6451a5"
            ></Ionicons>
        ),
    },
};

export default AddUbicationConfig;
