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
  }

  const printAndTrue = () => {
    // console.log("---------------")
    // for (var i = 0; i < leftarr.length; i++) {
    //   console.log("Box" + i);
    //   console.log("LEFT  " + leftarr[i]);
    //   console.log("TOP" + toparr[i]);
    // }
    // for (var i = 0; i < leftarr.length; i++) {
    //   var d = document.getElementById('box' + i);
    //   if (d !== null) {
    //     d.style.top = toparr[i] + 'px';
    //     d.style.left = leftarr[i] + 'px';
    //   }
    // }
    setFloatingTime(!floatingTime);

  }

  // useEffect(() => {
  //   for (var i = 0; i < leftarr.length; i++) {
  //   var d = document.getElementById('box' + i);
  //   if (d !== null) {
  //     d.style.top = toparrnew[i];
  //     d.style.left = leftarrnew[i];
  //   }
  //   };
  // }, [toparrnew, leftarrnew]);


  const findRandom = () => {
    for (var i = 0; i < 10; i++) {
      var topMax = Math.floor(Math.random() * (window.innerHeight + 1));
      var leftMax = Math.floor(Math.random() * (window.innerWidth + 1));
      randomTopArr.push(topMax + "px");
      randomLeftArr.push(leftMax + "px");
    }
    settoparrnew(randomTopArr);
    setleftarrnew(randomLeftArr);
  }

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  const control = async () => {
    setFloatingTime(true);
    thisFunc()
    await sleep(1000);
    setFloatingTime(false);
    await sleep(1000);
    controlHelper();
  }

  const controlHelper = async () => {
    findRandom();
  }

  const controles = async () => {
    thisFunc()
    await sleep(1000);
    setFloatingTime(false);
    await sleep(1000);
    controlHelper();
  }


  console.log(window.innerHeight + "aaaa height")
  console.log(window.innerWidth + "aaa width");

  window.onscroll = () => window.scroll(0, 0); //stop scrolling
  return (
    (floatingTime ?
      <>
        <div className="bg-[#151A1D] place-items-center grid grid-cols-5 grid-rows-3 gap-3 h-screen w-screen">

          <>
            <div id="box0" className={`transition-all duration-700 box ` + (floatingTime ? `col-start-1 row-span-1 bg-[#F8F3F4] w-[300px] h-[300px]` : ` bg-[#F8F3F4] absolute`)} >
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>

            <div id="box1" className={"transition-all duration-700 box " + (floatingTime ? "col-start-2 row-span-1 bg-[#F8F3F4] w-[300px] h-[300px]" : " bg-[#F8F3F4] absolute w-[300px] h-[300px]")}>
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
              <Button title="setfalse" onPress={() => printAndTrue()}></Button>
            </View>
          </>


        </div >
      </>
      :
      <>
        <div className="bg-[#151A1D] place-items-center grid grid-cols-5 grid-rows-3 gap-3 h-screen w-screen">

          <div id="box0" className={`transition-all duration-700 absolute bg-[#F8F3F4] w-[300px] h-[300px]`} style={{ top: toparrnew[0], left: leftarrnew[0] }} >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>
          <div id="box1" className={`transition-all duration-700 absolute bg-[#F8F3F4] w-[300px] h-[300px]`} style={{ top: toparrnew[1], left: leftarrnew[1] }} >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>
          <div id="box2" className={`transition-all duration-700 absolute bg-[#F8F3F4] w-[300px] h-[300px]`} style={{ top: toparrnew[2], left: leftarrnew[2] }} >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>
          <div id="box3" className={`transition-all duration-700 absolute bg-[#F8F3F4] w-[300px] h-[300px]`} style={{ top: toparrnew[3], left: leftarrnew[3] }} >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>
          <div id="box4" className={`transition-all duration-700 absolute bg-[#F8F3F4] w-[300px] h-[300px]`} style={{ top: toparrnew[4], left: leftarrnew[4] }} >
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
          <div id="box7" className={`transition-all duration-700 absolute bg-[#F8F3F4] w-[300px] h-[300px]`} style={{ top: toparrnew[7], left: leftarrnew[7] }} >
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
          <div id="box9" className={`transition-all duration-700 absolute bg-[#F8F3F4] w-[300px] h-[300px]`} style={{ top: toparrnew[9], left: leftarrnew[9] }} >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>
          <div className="col-start-1 col-span-5 row-start-2">
            <Button title="PLAY" onPress={() => { controles() }}></Button>
          </div>
        </div>
      </>

    )
  );
}
export default FrontScreen;
