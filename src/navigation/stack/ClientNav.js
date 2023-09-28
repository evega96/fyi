import { createStackNavigator } from "@react-navigation/stack";
import ClientBottomNav from "../bottom/ClientBottom/ClientBottomNav";
import Home from "../../screens/Home/Home";
import Favorite from "../../screens/Favorite/Favorite";
import Account from "../../screens/Account/Account";
import Message from "../../screens/Message/Message";
import ForYou from "../../screens/ForYou/Add";
import ParaTi from "../../screens/Parati/Parati"
import Destacados from "../../screens/Destacados/Destacados";


const Stack = createStackNavigator();

const ClientNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={ClientBottomNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ForYou" component={ForYou} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="ParaTi" component={ParaTi} />
      <Stack.Screen name="Destacados" component={Destacados} />
    </Stack.Navigator>
  );
};

export default ClientNav;
