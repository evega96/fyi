import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fav from '../../screens/Favorite';
import Account from '../../screens/Account';
import Message from '../../screens/Message';
import Stacknav from '../stack/StackNav';
import BottomConfig from './bottom-config';
import HomeConfig from '../../screens/home-config';
import PageConfig from '../../screens/page2-config';
import MessageConfig from '../../screens/message-config';
import AccountConfig from '../../screens/account-config';
import Add from '../../screens/Add';
import AddConfig from '../../screens/add-config';

const BottomTab = createBottomTabNavigator();

const BottomNav = () => {
    return (
        <BottomTab.Navigator {...BottomConfig}>
            <BottomTab.Screen name="Screen 1" component={Stacknav} {...HomeConfig}>
            </BottomTab.Screen>
            <BottomTab.Screen name="fav" component={Fav} {...PageConfig} />
            <BottomTab.Screen name="Add" component={Add} {...AddConfig} />
            <BottomTab.Screen name="Message" component={Message} {...MessageConfig} />
            <BottomTab.Screen name="Account" component={Account} {...AccountConfig} />
        </BottomTab.Navigator>
    )
}

export default BottomNav