import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';
import Boxy from '../components/Box';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { off } from 'process';


type frontScreenProp = StackNavigationProp<RootStackParamList, 'Front'>;

function FrontScreen() {
  const navigation = useNavigation<frontScreenProp>();
  const [floatingTime, setFloatingTime] = useState(true);
  const [toparr, settoparr] = useState<number[]>([]);
  const [leftarr, setleftarr] = useState<number[]>([]);

  let topArr: Array<number> = [];
  let leftArr: Array<number> = [];

  const thisFunc = () => {

    for (var i = 0; i < 10; i++) {
      console.log("box" + i);
      let myDiv = document.getElementById("box" + i);
      let offsets = myDiv?.getBoundingClientRect();
      if (offsets?.top !== undefined) {
        console.log("balls");
        topArr[i] = offsets?.top;
        console.log("Over here " + topArr[i]);
      }
      if (offsets?.left !== undefined) {
        leftArr[i] = offsets?.left;
        console.log("Over her2e " + leftArr[i]);

      }
    }
    setleftarr(leftArr);
    settoparr(topArr);


  }

  const printAndTrue = () => {
    console.log("---------------")
    for (var i = 0; i < leftarr.length; i++) {
      console.log("Box" + i);
      console.log("LEFT  " + leftarr[i]);
      console.log("TOP" + toparr[i]);
    }
    for(var i = 0; i<leftarr.length;i++){
      var d = document.getElementById('box'+i);
      if (d !== null) {
        d.style.top = toparr[i] + 'px';
        d.style.left = leftarr[i] + 'px';
      }
    }
    setFloatingTime(!floatingTime);
  }
  return (
    <>
      <div className="bg-black grid grid-cols-5 gap-3 h-screen">
        <div id="box0" className={" " + (floatingTime ? "bg-[red] w-[150px] h-[150px]" : " bg-[blue] absolute w-[150px] h-[150px]")} >
          <Canvas className="canvas">
            <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
            <ambientLight intensity={0.5} /> //adds light, stops it from being black
            <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
            <Boxy />
          </Canvas>
        </div>

        <div id="box1" className={" " + (floatingTime ? "bg-[#450a0a] w-[150px] h-[150px]" : " bg-[#450a0a] absolute w-[150px] h-[150px]")}>
          <Canvas className="canvas">
            <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
            <ambientLight intensity={0.5} /> //adds light, stops it from being black
            <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
            <Boxy />
          </Canvas>
        </div>

        <div id="box2" className={" " + (floatingTime ? "bg-[#eab308] w-[150px] h-[150px]" : " bg-[#eab308] absolute w-[150px] h-[150px]")}>
          <Canvas className="canvas">
            <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
            <ambientLight intensity={0.5} /> //adds light, stops it from being black
            <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
            <Boxy />
          </Canvas>
        </div>

        <div id="box3" className={" " + (floatingTime ? "w-[150px] h-[150px]" : "absolute w-[150px] h-[150px]")}>
          <Canvas className="canvas">
            <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
            <ambientLight intensity={0.5} /> //adds light, stops it from being black
            <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
            <Boxy />
          </Canvas>
        </div>


        <div id="box4" className={" " + (floatingTime ? "bg-[#84cc16] w-[150px] h-[150px]" : " bg-[#84cc16] absolute w-[150px] h-[150px]")}>
          <Canvas className="canvas">
            <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
            <ambientLight intensity={0.5} /> //adds light, stops it from being black
            <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
            <Boxy />
          </Canvas>
        </div>

        <div id="box5" className={" " + (floatingTime ? "bg-[#0891b2] w-[150px] h-[150px]" : " bg-[#0891b2] absolute w-[150px] h-[150px]")} >
          <Canvas className="canvas">
            <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
            <ambientLight intensity={0.5} /> //adds light, stops it from being black
            <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
            <Boxy />
          </Canvas>
        </div>

        <div id="box6" className={" " + (floatingTime ? "bg-[#ec4899] w-[150px] h-[150px]" : " bg-[#ec4899] absolute w-[150px] h-[150px]")}>
          <Canvas className="canvas">
            <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
            <ambientLight intensity={0.5} /> //adds light, stops it from being black
            <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
            <Boxy />
          </Canvas>
        </div>

        <div id="box7" className={" " + (floatingTime ? "bg-[#a855f7] w-[150px] h-[150px]" : " bg-[#a855f7] absolute w-[150px] h-[150px]")}>
          <Canvas className="canvas">
            <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
            <ambientLight intensity={0.5} /> //adds light, stops it from being black
            <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
            <Boxy />
          </Canvas>
        </div>

        <div id="box8" className={" " + (floatingTime ? "bg-[#10b981] w-[150px] h-[150px]" : " bg-[#10b981] absolute w-[150px] h-[150px]")}>
          <Canvas className="canvas">
            <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
            <ambientLight intensity={0.5} /> //adds light, stops it from being black
            <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
            <Boxy />
          </Canvas>
        </div>

        <div id="box9" className={" " + (floatingTime ? "bg-[#e11d48] w-[150px] h-[150px]" : " bg-[#e11d48] absolute w-[150px] h-[150px]")}>
          <Canvas className="canvas">
            <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
            <ambientLight intensity={0.5} /> //adds light, stops it from being black
            <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
            <Boxy />
          </Canvas>
        </div>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Auth Screen</Text>
        <Button title="Login" onPress={() => thisFunc()} />
        <Button title="setfalse" onPress={() => printAndTrue()}></Button>
      </View>
      </div >
      
    </>
  );
}
export default FrontScreen;