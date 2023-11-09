import Account from "./Account";
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from "react-native";

const AccountConfig = {
    name: "Cuenta",
    component: Account,
    options: {
        headerTitle: 'Cuenta',
        headerTintColor: '#ffffff',
        headerStyle:{backgroundColor: '#313131'},
        tabBarIcon: () => <Image source={require('../../../assets/Perfil.png')} />
    }
}

export default AccountConfig;