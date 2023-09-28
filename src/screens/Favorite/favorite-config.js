import Fav from "./Favorite";
import Ionicons from 'react-native-vector-icons/Fontisto';
import img from '../../../assets/save-line.png';
import { Image } from "react-native";

const Favorite = {
    name: "Favoritos",
    component: Fav,
    options: {
        headerTitle: 'Favorite',
        tabBarIcon: () => <Image source={img} />,
    }
}

export default Favorite;