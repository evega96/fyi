import Account from "./Account";
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from "react-native";

const AccountConfig = {
    name: "Account",
    component: Account,
    options: {
        headerTitle: 'Account',
        tabBarIcon: () => <Image source={require('../../../assets/Perfil.png')} />
    }
}

export default AccountConfig;