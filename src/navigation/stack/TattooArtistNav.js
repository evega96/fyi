import { createStackNavigator } from "@react-navigation/stack";
import TattooArtistBottomNav from "../bottom/TattooArtistBottomNav";
import Home from "../../screens/Home/Home";
import Favorite from "../../screens/Favorite/Favorite";
import Account from "../../screens/Account/Account";
import Message from "../../screens/Message/Message";
import Add from "../../screens/Add/Add";
import AddConfig from "../../screens/Add/add-config";
import AddDetails from "../../screens/AddDetails/AddDetails";

const Stack = createStackNavigator();

const TattoArtistNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={TattooArtistBottomNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Add" component={Add} {...AddConfig} />
      <Stack.Screen name="AddDetails" component={AddDetails} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Message" component={Message} />
    </Stack.Navigator>
  );
};

export default TattoArtistNav;
