import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from './navigationService';
import Landing from '../pages/Landing';
import Cart from '../pages/Cart';
import Listing from '../pages/Listing';
import Details from '../pages/Details';

const Stack = createStackNavigator();

const Route = ({}) => {
  return (
    <NavigationContainer style={{flex: 1}} ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={'Landing'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Listing" component={Listing} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
