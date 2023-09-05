import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screens/Login/Login"
import Register from "../../screens/Register/Register"

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default StackNav;
