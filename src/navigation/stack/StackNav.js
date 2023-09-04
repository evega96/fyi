import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../screens/Home';
import Favorite from '../../screens/Favorite';

const Stack = createStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Favorite" component={Favorite} />
        </Stack.Navigator>
    )
}

export default StackNav