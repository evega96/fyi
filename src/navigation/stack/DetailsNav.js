// NavigationConfig.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/Home/Home';
import DetailScreen from '../../screens/Home/DetailScreen';

const Stack = createStackNavigator();

const DetailsNav = () => {
  return (
    <Stack.Navigator initialRouteName="DetailScreen">
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default DetailsNav;
