import { createStackNavigator } from "@react-navigation/stack";
import TattooArtistBottomNav from "../bottom/TattooArtistBottomNav";
import Home from "../../screens/Home/Home";
import Favorite from "../../screens/Favorite/Favorite";
import Account from "../../screens/Account/Account";
import Message from "../../screens/Message/Message";
import Add from "../../screens/Add/Add";
import ParaTi from "../../screens/Parati/Parati"
import Destacados from "../../screens/Destacados/Destacados";
import Editar from "../../EditarPerfil/Editarperfil";

const Stack = createStackNavigator();

const TattoArtistNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tab" component={TattooArtistBottomNav}
      options={{headerShown: false}} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Add" component={Add} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="ParaTi" component={ParaTi} />
      <Stack.Screen name="Destacados" component={Destacados} />
      <Stack.Screen name="EditarPerfil" component={Editar} />
    </Stack.Navigator>
  );
};

export default TattoArtistNav;
