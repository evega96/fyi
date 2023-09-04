import Home from "./Home";
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeConfig = {
    name: "Home",
    component: Home,
    options: {
        headerTitle: 'Home',
        tabBarIcon: () => <Ionicons name="home" size={30} color="#6451a5"></Ionicons>
    }
}

export default HomeConfig;