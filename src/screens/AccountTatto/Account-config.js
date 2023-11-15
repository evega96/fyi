import Account from "./Account";
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

const AccountConfig = {
    name: "Perfil",
    component: Account,
    options: {
        headerTitle: 'Cuenta',
        tabBarIcon: () => <Image source={require('../../../assets/Perfil.png')} />
    }
}

export default AccountConfig;