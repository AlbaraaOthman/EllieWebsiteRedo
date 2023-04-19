import React, { useEffect, useState } from 'react';
// eslint-disable-next-line
import { View, Text } from 'react-native';

// import Screens

import './App.css';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './screens/login/login.screen';
import FrontScreen from './screens/front.screen';
import BackScreen from './screens/back.screen';
import { RootStackParamList } from './screens/RootStackPrams';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator<RootStackParamList>();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Front" component={FrontScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Back" component={BackScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
