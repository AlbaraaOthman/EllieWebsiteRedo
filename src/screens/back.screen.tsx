import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';
type backScreenProp = StackNavigationProp<RootStackParamList, 'Back'>;

function BackScreen() {
  const navigation = useNavigation<backScreenProp>();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Auth Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

export default BackScreen;