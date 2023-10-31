import Account from "./Account";
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

const AccountConfig = {
    name: "Perfil",
    component: Account,
    options: {
        headerTitle: 'Cuenta',
        tabBarIcon: () => <Ionicons name="account" size={30} color="#6451a5" ></Ionicons>
    }
}

export default AccountConfig;