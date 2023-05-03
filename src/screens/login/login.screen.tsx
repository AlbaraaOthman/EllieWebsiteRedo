import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../RootStackPrams';
import logo from './logo.png'
type loginScreenProp = StackNavigationProp<RootStackParamList, 'Login'>;

function LoginScreen() {
  const navigation = useNavigation<loginScreenProp>();
  const [password, setPassword] = useState("");

  const validateEntry = () => {
    if (password == "andlaborganism") {
      navigation.navigate("Front");
    } else {
      console.log("False");
    }
  }
  return (
    <>
      <div className={"bg-[#151A1D] place-items-center h-screen w-screen grid grid-cols-12 grid-rows-9 gap-5 z-10"} >
        <img src={logo} className="col-start-5 col-end-9 row-start-4 row-end-6 w-auto h-auto" alt="logo" />
        <input
          className="bg-head col-start-6 col-end-8 row-start-6 row-end-7 text-lightback rounded-xl placeholder-light font-neue"
          placeholder='   Password....'
          id="email-input"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <svg onClick={validateEntry} className="col-start-6 col-end-8 row-start-7 row-end-7"width="158" height="66" viewBox="0 0 158 66" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20.5332C0 9.48752 8.95431 0.533203 20 0.533203H138C149.046 0.533203 158 9.48751 158 20.5332V45.6548C158 56.7005 149.046 65.6548 138 65.6548H20C8.9543 65.6548 0 56.7005 0 45.6548V20.5332Z" fill="#FF503C" />
          <path d="M0 20C0 8.9543 8.95431 0 20 0H138C149.046 0 158 8.9543 158 20V45.6554C158 56.7011 149.046 65.6554 138 65.6554H20C8.9543 65.6554 0 56.7011 0 45.6554V20Z" fill="#FF503C" />
          <path d="M41 41.3271H54.337V39.2376H43.3217V32.9188H53.0472V31.0055H43.3217V25.316H54.0274V23.3271H41V41.3271Z" fill="#F8F3F4" />
          <path d="M56.2736 41.3271H58.4405V26.5495H58.4921C58.4921 26.5495 59.266 27.909 59.8594 28.7901L68.3208 41.3271H70.6941V23.3271H68.5271V38.1551H68.4755C68.4755 38.1551 67.7532 36.7705 67.1341 35.839L58.7243 23.3271H56.2736V41.3271Z" fill="#F8F3F4" />
          <path d="M72.2254 25.316H78.365V41.3271H80.6868V25.316H86.8264V23.3271H72.2254V25.316Z" fill="#F8F3F4" />
          <path d="M88.3575 41.3271H101.695V39.2376H90.6792V32.9188H100.405V31.0055H90.6792V25.316H101.385V23.3271H88.3575V41.3271Z" fill="#F8F3F4" />
          <path d="M103.631 41.3271H105.953V33.7244H111.086C113.563 33.7244 114.646 34.6558 114.827 37.2992C115.033 40.3202 115.111 40.9999 115.498 41.3271H118V41.2264C117.665 40.9999 117.355 40.2698 117.149 37.3747C116.968 34.7062 116.375 33.4474 114.492 32.7929V32.7174C116.71 32.0125 117.69 30.4516 117.69 28.2614C117.69 25.316 115.498 23.3271 112.247 23.3271H103.631V41.3271ZM105.953 25.2908H111.551C114.259 25.2908 115.291 26.3985 115.291 28.5887C115.291 30.6278 114.001 31.8866 111.422 31.8866H105.953V25.2908Z" fill="#F8F3F4" />
        </svg>


      </div>
    </>
  );
}

export default LoginScreen;