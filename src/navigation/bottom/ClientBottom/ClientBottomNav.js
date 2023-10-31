import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottomConfig from "../TattooArtistBottom-config";
import PageConfig from "../../../screens/Favorite/favorite-config";
import MessageConfig from "../../../screens/Message/message-config";
import AccountConfig from "../../../screens/Account/account-config";


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
