import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../RootStackPrams';
type loginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

function LoginScreen() {
  const navigation = useNavigation<loginScreenProp>();
  const [password, setPassword] = useState("");

  const validateEntry = () => {
    if (password == "Donkey") {
      navigation.navigate("Front");
    } else {
      console.log("False");
    }
  }
  return (
    <>
        <label
          className="dark:text-white block text-gray-500 font-bold mb-2"
          htmlFor="emailLabel"
        >
          Password
        </label>
        <input
          className="bg-gray-200 dark:bg-dtext appearance-none border-2 border-gray-200 dark:border-dbord dark:text-white rounded w-full py-2 px-4
                         text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-custom-blue"
          id="email-input"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      <button  className="bg-custom-blue hover:bg-custom-blue-hover dark:bg-dblue hover:dark:bg-dorange text-white font-bold py-2 px-4 rounded
                        focus:outline-none focus:shadow-outline"
                type="button" onClick={validateEntry}>Enter</button> 
        </>
  );
}

export default LoginScreen;