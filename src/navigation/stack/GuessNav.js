import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/Login/Login";
import Register from "../../screens/Register/Register";
import LoginConfig from "../../screens/Login/login-config";
import RegisterConfig from "../../screens/Register/register-config";
import TattooPreferences from "../../screens/TattoPreferences/TattooPreferences";

const Stack = createStackNavigator();

const GuessNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} {...LoginConfig} />
      <Stack.Screen name="Register" component={Register} {...RegisterConfig} />
      <Stack.Screen name="TattoPreferences" component={TattooPreferences}/>
    </Stack.Navigator>
  );
};

export default GuessNav;
