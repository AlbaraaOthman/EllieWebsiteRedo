import React, { useEffect, useState } from 'react';
// eslint-disable-next-line
import { View, Text } from 'react-native';

// import Screens

import './App.css';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './screens/login/login.screen';
import FrontScreen from './screens/front.screen';
import BackScreen from './screens/back.screen';
import LogoScreen from './screens/logo.screen';
import AsanaScreen from './screens/asana.screen';
import BoardyScreen from './screens/boardy.screen';
import CommaScreen from './screens/comma.screen';
import GestScreen from './screens/gest.screen';
import GFPostScreen from './screens/gfpost.screen';
import gfsscreen from './screens/gfs.screen';
import GwrdScreen from './screens/gwrd.screen';
import InterScreen from './screens/inter.screen';
import LegodScreen from './screens/legod.screen';
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
        <Stack.Screen name="Logo" component={LogoScreen}/>
        <Stack.Screen name="Asana" component={AsanaScreen}/>
        <Stack.Screen name="Boardy" component={BoardyScreen}/>
        <Stack.Screen name="Comma" component={CommaScreen}/>
        <Stack.Screen name="Gest" component={GestScreen}/>
        <Stack.Screen name="GFPost" component={GFPostScreen}/>
        <Stack.Screen name="GFS" component={gfsscreen}/>
        <Stack.Screen name="GWRD" component={GwrdScreen}/>
        <Stack.Screen name="Inter" component={InterScreen}/>
        <Stack.Screen name="Legod" component={LegodScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
