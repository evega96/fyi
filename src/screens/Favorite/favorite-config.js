import Fav from "./Favorite";
import Ionicons from 'react-native-vector-icons/Fontisto';
import img from '../../../assets/Favoritos.png';
import { Image } from "react-native";

const Favorite = {
    name: "Favoritos",
    component: Fav,
    options: {
        headerTitle: 'Favoritos',
        headerTintColor: '#ffffff',
        tabBarIcon: () => <Image source={img} />,
    }
}

export default Favorite;