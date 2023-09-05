import Fav from "./Favorite";
import Ionicons from 'react-native-vector-icons/Fontisto';

const Favorite = {
    name: "Favorite",
    component: Fav,
    options: {
        headerTitle: 'Favorite',
        tabBarIcon: () => <Ionicons name="favorite" size={30} color="#6451a5" ></Ionicons>
    }
}

export default Favorite;