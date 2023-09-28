import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Fav from "../../../screens/Favorite/Favorite";
import Account from "../../../screens/Account/Account";
import Message from "../../../screens/Message/Message";
import Stacknav from "../../stack/GuessNav";
import BottomConfig from "../TattooArtistBottom-config";
import HomeConfig from "../../../screens/Home/home-config";
import PageConfig from "../../../screens/Favorite/favorite-config";
import MessageConfig from "../../../screens/Message/message-config";
import AccountConfig from "../../../screens/Account/Account-config";
import Add from "../../../screens/Add/Add";
import AddConfig from "../../../screens/Add/add-config";

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
