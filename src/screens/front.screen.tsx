import React, { useEffect, useRef, useState } from 'react';
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
  const [tempTest, setTempTest] = useState(false);
  const [toparr, settoparr] = useState<string[]>([]);
  const [leftarr, setleftarr] = useState<string[]>([]);
  const [toparrnew, settoparrnew] = useState<string[]>([]);
  const [leftarrnew, setleftarrnew] = useState<string[]>([]);
  const [controls, setControls] = useState(false);
  let topArr: Array<string> = [];
  let leftArr: Array<string> = [];
  let randomTopArr: Array<string> = [];
  let randomLeftArr: Array<string> = [];

  const tempwidth = "500px";
  const tempheight = "520px";
  const windowSize = useRef([window.innerWidth, window.innerHeight]);


  const thisFunc = () => {
    for (var i = 0; i < 10; i++) {
      console.log("box" + i);
      let myDiv = document.getElementById("box" + i);
      let offsets = myDiv?.getBoundingClientRect();
      if (offsets?.top !== undefined) {
        console.log("balls");
        topArr[i] = offsets?.top + "px";
        console.log("Over here " + topArr[i]);
      }
      if (offsets?.left !== undefined) {
        leftArr[i] = offsets?.left + "px";
        console.log("Over her2e " + leftArr[i]);

      }
    }
    setleftarr(leftArr);
    settoparr(topArr);
    settoparrnew(topArr);
    setleftarrnew(leftArr);
    console.log("Soup " + toparrnew);
  }

  const randomizePositions = () => {
    let newTopArr: Array<string> = [];
    let newLeftArr: Array<string> = [];
    for (let i = 0; i < 10; i++) {
      newTopArr[i] = (Math.random() * windowSize.current[1]) + 'px';
      newLeftArr[i] = (Math.random() * windowSize.current[0]) + 'px';
    }
    console.log("Dinosaur top " + newTopArr);
    console.log("Dinosaur left " + newLeftArr);
    settoparrnew(newTopArr);
    setleftarrnew(newLeftArr);
  };

  useEffect(() => {
    thisFunc();
      setInterval(() => {
        randomizePositions();
      }, 3000); // Change 3000 to whatever interval you want in milliseconds

  }, []);

  const control = async () => {
    thisFunc();
    setFloatingTime(false);
  };


  return (
    (floatingTime ?
      <>
        <div className="bg-[#151A1D] place-items-center grid grid-cols-5 grid-rows-3 gap-3 h-screen w-screen">
          <>
            <div id="box0" className={`transition-all duration-700 box ` + (floatingTime ? `col-start-1 row-span-1 bg-[#F8F3F4] w-[300px] h-[300px]` : ` bg-[#F8F3F4] absolute`)}   >
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>

            <div id="box1" className={"transition-all duration-700 box " + (floatingTime ? "col-start-2 row-span-1 bg-[#F8F3F4] w-[300px] h-[300px]" : " bg-[#F8F3F4] absolute w-[300px] h-[300px]")} >
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>

            <div id="box2" className={"transition-all duration-700 box " + (floatingTime ? "col-start-3 row-span-1 bg-[#F8F3F4] w-[300px] h-[300px]" : " bg-[#F8F3F4] absolute w-[300px] h-[300px]")}>
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>

            <div id="box3" className={"bg-[#F8F3F4] transition-all duration-700 " + (floatingTime ? "col-start-4 row-span-1 w-[300px] h-[300px]" : "absolute w-[300px] h-[300px]")}>
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>


            <div id="box4" className={"transition-all duration-700 " + (floatingTime ? "col-start-5 row-span-1 bg-[#F8F3F4] w-[300px] h-[300px]" : " bg-[#F8F3F4] absolute w-[300px] h-[300px]")}>
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>

            <div id="box5" className={"transition-all duration-700 " + (floatingTime ? "col-start-1 row-span-3 bg-[#F8F3F4] w-[300px] h-[300px]" : " bg-[#F8F3F4] absolute w-[300px] h-[300px]")} >
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>

            <div id="box6" className={"transition-all duration-700 " + (floatingTime ? "col-start-2 row-span-3 bg-[#F8F3F4] w-[300px] h-[300px]" : " bg-[#F8F3F4] absolute w-[300px] h-[300px]")}>
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>

            <div id="box7" className={"transition-all duration-700 " + (floatingTime ? "col-start-3 row-span-3 bg-[#F8F3F4] w-[300px] h-[300px]" : " bg-[#F8F3F4] absolute w-[300px] h-[300px]")}>
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>

            <div id="box8" className={"transition-all duration-700 " + (floatingTime ? "col-start-4 row-span-3 bg-[#F8F3F4] w-[300px] h-[300px]" : " bg-[#F8F3F4] absolute w-[300px] h-[300px]")}>
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>

            <div id="box9" className={"transition-all duration-700 " + (floatingTime ? "col-start-5 row-span-3 bg-[#F8F3F4] w-[300px] h-[300px]" : " bg-[#F8F3F4] absolute w-[300px] h-[300px]")}>
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>
            <div className="col-start-1 col-span-5 row-start-2">
              <Button title="CONTROL" onPress={() => { control() }}></Button>
            </div>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Auth Screen</Text>
              <Button title="Login" onPress={() => thisFunc()} />
              <Button title="setfalse" ></Button>
            </View>
          </>


        </div >
      </>
      :
      <>
        <div className="bg-[#151A1D] place-items-center grid grid-cols-5 grid-rows-3 gap-3 h-screen w-screen">
          {/* {toparrnew.map((topy, index) => ( */}

          <>
          {console.log("Soup s" + toparrnew)}
          {console.log("Soup y" + toparrnew[0])}
            <div id="box0" className={`transition-all duration-700 absolute bg-[#F8F3F4] w-[300px] h-[300px]`} style={{ top: toparrnew[0], left: leftarrnew[0] }}>
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>
            <div id="box1" className={`transition-all duration-700 absolute bg-[#F8F3F4] w-[300px] h-[300px]`} style={{ top: toparrnew[1], left: leftarrnew[1] }}>
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>
            <div id="box2" className={`transition-all duration-700 absolute bg-[#F8F3F4] w-[300px] h-[300px]`} style={{ top: toparrnew[2], left: leftarrnew[2] }}>
              <Canvas className="canvas">

                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>
            <div id="box3" className={`transition-all duration-700 absolute bg-[#F8F3F4] w-[300px] h-[300px]`} style={{ top: toparrnew[3], left: leftarrnew[3] }}>
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>
            <div id="box4" className={`transition-all duration-700 absolute bg-[#F8F3F4] w-[300px] h-[300px]`} style={{ top: toparrnew[4], left: leftarrnew[4] }}>
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>
            <div id="box5" className={`transition-all duration-700 absolute bg-[#F8F3F4] w-[300px] h-[300px]`} style={{ top: toparrnew[5], left: leftarrnew[5] }} >
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>
            <div id="box6" className={`transition-all duration-700 absolute bg-[#F8F3F4] w-[300px] h-[300px]`} style={{ top: toparrnew[6], left: leftarrnew[6] }} >
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>
            <div id="box7" className={`transition-all duration-700 absolute bg-[#F8F3F4] w-[300px] h-[300px]`} style={{ top: toparrnew[7], left: leftarrnew[7] }}>
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>
            <div id="box8" className={`transition-all duration-700 absolute bg-[#F8F3F4] w-[300px] h-[300px]`} style={{ top: toparrnew[8], left: leftarrnew[8] }} >
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>
            <div id="box9" className={`transition-all duration-700 absolute bg-[#F8F3F4] w-[300px] h-[300px]`} style={{ top: toparrnew[9], left: leftarrnew[9] }}>
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>
            <div className="col-start-1 col-span-5 row-start-2">
              <Button title="PLAY" onPress={() => { }}></Button>
            </div>
            <button className="display:none" onClick={() => { console.log("aa") }}></button>
          </>
          {/* ))} */}
        </div>
      </>

    )
  );
}
export default FrontScreen;
