import { createStackNavigator } from "@react-navigation/stack";
import TattooArtistBottomNav from "../bottom/TattooArtistBottomNav";
import Home from "../../screens/Home/Home";
import Favorite from "../../screens/Favorite/Favorite";
import Account from "../../screens/Account/Account";
import Message from "../../screens/Message/Message";
import Add from "../../screens/Add/Add";
import DetailScreen from "../stack/DetailsNav"
import DetailsConfig from "../../screens/Home/details-config";
import ChatRoom from '../../components/ChatRoom';
const Stack = createStackNavigator();

const TattoArtistNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={TattooArtistBottomNav}
        options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Add" component={Add} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="DetailScreen" component={DetailScreen}
        options={{ headerShown: false }} />
      <Stack.Screen name='ChatRooms' component={ChatRoom} />
    </Stack.Navigator>
  );
};

export default TattoArtistNav;
