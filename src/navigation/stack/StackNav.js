import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/Login/Login"
import LoginConfig from "../../screens/Login/login-config"

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginConfig} />
      <Stack.Screen name="Favorite" component={Favorite} />
    </Stack.Navigator>
  );
};

export default StackNav;
