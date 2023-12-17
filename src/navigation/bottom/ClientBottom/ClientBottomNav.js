import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Stacknav from "../../stack/GuessNav";
import BottomConfig from "../TattooArtistBottom-config";
import PageConfig from "../../../screens/Favorite/favorite-config";
import MessageConfig from "../../../screens/Message/message-config";
import AccountConfig from "../../../screens/Account/account-config";
import HomeConfig from "../../../screens/Home/home-config";
import Fav from "../../../screens/Favorite/Favorite";
import Message from "../../../screens/Message/Message";
import Account from "../../../screens/Account/Account";


const BottomTab = createBottomTabNavigator();

const ClientBottomNav = () => {
  return (
    <BottomTab.Navigator {...BottomConfig}>
       <BottomTab.Screen
        name="Screen 1"
        component={Stacknav}
        {...HomeConfig}
      ></BottomTab.Screen>
      <BottomTab.Screen name="fav" component={Fav} {...PageConfig} />
      <BottomTab.Screen name="Message" component={Message} {...MessageConfig} />
      <BottomTab.Screen name="Account" component={Account} {...AccountConfig} /> 
    </BottomTab.Navigator>
  );
};

export default ClientBottomNav;
