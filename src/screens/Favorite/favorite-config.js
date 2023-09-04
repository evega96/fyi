import Favorite from "./Favorite";
import Ionicons from 'react-native-vector-icons/Fontisto';

const Page2Config = {
    name: "Favorite",
    component: Favorite,
    options: {
        headerTitle: 'Favorite',
        tabBarIcon: () => <Ionicons name="favorite" size={30} color="#6451a5" ></Ionicons>
    }
}

export default Page2Config;