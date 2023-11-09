import HomeScreen from "./Home"
import { Image } from "react-native";
import img from '../../../assets/Home.png'

const HomeConfig = {
    name: "Home",
    component: HomeScreen,
    options: {
        headerShown: true,
        headerTintColor: '#ffffff',
        tabBarIcon: () => <Image source={img} />,
    }
}

export default HomeConfig;