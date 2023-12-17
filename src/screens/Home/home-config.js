import HomeScreen from "./Home"
import { Image } from "react-native";
import img from '../../../assets/home.png'

const HomeConfig = {
    name: "Home",
    component: HomeScreen,
    options: {
        headerShown: true,
        headerTintColor: '#ffffff',
        tabBarIcon: () => <Image source={img} />,
        headerStyle:{backgroundColor: '#313131'},
    }
}

export default HomeConfig;