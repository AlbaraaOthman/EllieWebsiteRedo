import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';
import Boxy from '../components/Box';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';


type frontScreenProp = StackNavigationProp<RootStackParamList, 'Front'>;

function FrontScreen() {
  const navigation = useNavigation<frontScreenProp>();
  const [floatingTime,setFloatingTime] = useState(false);

  return (
    <>
      <div className="grid grid-cols-5 gap-10 h-max">
        <div className="bg-amber-500 w-auto h-auto" >
          <Canvas className="canvas">
            <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
            <ambientLight intensity={0.5} /> //adds light, stops it from being black
            <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
            <Boxy />
          </Canvas>
        </div>

        <div className="bg-[#450a0a] w-auto h-auto">
          <Canvas className="canvas">
            <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
            <ambientLight intensity={0.5} /> //adds light, stops it from being black
            <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
            <Boxy />
          </Canvas>
        </div>

        <div className="bg-[#eab308] w-auto h-auto">
          <Canvas className="canvas">
            <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
            <ambientLight intensity={0.5} /> //adds light, stops it from being black
            <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
            <Boxy />
          </Canvas>
        </div>

        <div className="w-auto h-auto">
          <Canvas className="canvas">
            <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
            <ambientLight intensity={0.5} /> //adds light, stops it from being black
            <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
            <Boxy />
          </Canvas>
        </div>

        <div className="bg-[#84cc16] w-auto h-auto">
          <Canvas className="canvas">
            <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
            <ambientLight intensity={0.5} /> //adds light, stops it from being black
            <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
            <Boxy />
          </Canvas>
        </div>

        <div className="bg-[#0891b2] w-auto h-auto">
          <Canvas className="canvas">
            <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
            <ambientLight intensity={0.5} /> //adds light, stops it from being black
            <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
            <Boxy />
          </Canvas>
        </div>

        <div className="bg-[#ec4899] w-auto h-auto">
          <Canvas className="canvas">
            <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
            <ambientLight intensity={0.5} /> //adds light, stops it from being black
            <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
            <Boxy />
          </Canvas>
        </div>

        <div className="bg-[#a855f7] w-auto h-auto">
          <Canvas className="canvas">
            <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
            <ambientLight intensity={0.5} /> //adds light, stops it from being black
            <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
            <Boxy />
          </Canvas>
        </div>

        <div className="bg-[#10b981] w-auto h-auto">
          <Canvas className="canvas">
            <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
            <ambientLight intensity={0.5} /> //adds light, stops it from being black
            <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
            <Boxy />
          </Canvas>
        </div>

        <div className="bg-[#e11d48] w-auto h-auto">
          <Canvas className="canvas">
            <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
            <ambientLight intensity={0.5} /> //adds light, stops it from being black
            <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
            <Boxy />
          </Canvas>
        </div>

      </div>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Auth Screen</Text>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </>
  );
}
export default FrontScreen;