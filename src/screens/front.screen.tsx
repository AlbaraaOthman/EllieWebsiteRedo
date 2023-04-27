import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';
import Boxy from '../components/Box';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { off } from 'process';
import Ironh from '../components/Ironh.js'
import { Component } from 'react';
import MouseFollower from "mouse-follower";
import gsap, { random } from "gsap";
import { MousePosition } from '@react-hook/mouse-position';
import { useMousePosition } from '@hookit/mouse';
import DrawingArea from '../components/DrawingArea';
import THREE from 'three';
import { clear } from 'console';

type frontScreenProp = StackNavigationProp<RootStackParamList, 'Front'>;

function FrontScreen() {
  const navigation = useNavigation<frontScreenProp>();
  const [floatingTime, setFloatingTime] = useState(true);
  const [tempTest, setTempTest] = useState(false);
  const [toparr, settoparr] = useState<string[]>([]);
  const [leftarr, setleftarr] = useState<string[]>([]);
  const [toparrnew, settoparrnew] = useState<string[]>([]);
  const [leftarrnew, setleftarrnew] = useState<string[]>([]);
  const [buttonLoc, setbuttonloc] = useState<string[]>([]);
  const [controlFlag, setControlFlag] = useState(false);
  const [playingFlag, setPlaying] = useState(false);
  const [ctrlBut, setCtrlBut] = useState(false);
  const [plyBut, setPlyBut] = useState(false);

  let tempArray = [0, 0];
  var movedFlag = 0;
  const windowSize = useRef([window.innerWidth, window.innerHeight]);



  const thisFunc = () => {
    let topArr: Array<string> = [];
    let leftArr: Array<string> = [];
    for (var i = 0; i < 10; i++) {
      let myDiv = document.getElementById("box" + i);
      let offsets = myDiv?.getBoundingClientRect();
      if (offsets?.top !== undefined) {
        topArr[i] = offsets?.top + "px";
      }
      if (offsets?.left !== undefined) {
        leftArr[i] = offsets?.left + "px";

      }
    }

    setleftarr(leftArr);
    settoparr(topArr);
    settoparrnew(topArr);
    setleftarrnew(leftArr);

    let myDiv = document.getElementById("origin");
    let offsets = myDiv?.getBoundingClientRect();
    let tempArr = ["", ""]
    if (offsets?.top !== undefined) {
      tempArr[0] = offsets?.top + "px";
    }
    if (offsets?.left !== undefined) {
      tempArr[1] = offsets?.left + "px";
    }
    if (offsets?.width !== undefined) {
      tempArr[2] = offsets?.width + "px";
    }
    if (offsets?.height !== undefined) {
      tempArr[3] = offsets?.height + "px";
    }
    setbuttonloc(tempArr);
  }

  const controlRandom = () => {
    let newTopArr: Array<string> = [];
    let newLeftArr: Array<string> = [];
    if (controlFlag) {
      for (let i = 0; i < 10; i++) {
        if (i == 1) {
          newTopArr[i] = (Math.random() * windowSize.current[1]) + 'px';
          newLeftArr[i] = (Math.random() * windowSize.current[0]) + 'px';
        } else {
          newTopArr[i] = toparr[i];
          newLeftArr[i] = leftarr[i];
        }
      }
    }
    settoparrnew(newTopArr);
    setleftarrnew(newLeftArr);
  };

  const randomizePositions = () => {
    let newTopArr: Array<string> = [];
    let newLeftArr: Array<string> = [];
    if (!controlFlag) {
      for (let i = 0; i < 10; i++) {
        newTopArr[i] = (Math.random() * windowSize.current[1]) + 'px';
        newLeftArr[i] = (Math.random() * windowSize.current[0]) + 'px';
      }
    }
    settoparrnew(newTopArr);
    setleftarrnew(newLeftArr);
  }

  useEffect(() => {
    thisFunc();
    setFloatingTime(false);
    setControlFlag(true);
  }, []);

  let random: NodeJS.Timeout;
  let controles: NodeJS.Timeout;

  useEffect(() => {
    if (!controlFlag) {
      random = setInterval(() => {
        randomizePositions();
      }, 5000); // Change 3000 to whatever interval you want in milliseconds
    }
    return () => clearInterval(random);
  }, [controlFlag]);

  useEffect(() => {
    let controles: NodeJS.Timeout;
    if (controlFlag) {
      controles = setInterval(() => {
        controlRandom();
      }, 5000); // Change 3000 to whatever interval you want in milliseconds
    }
    return () => clearInterval(controles);
  }, [controlFlag]);

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const control = async () => {
    clearInterval(random);
    setControlFlag(true);
  };

  const playing = async () => {
    clearInterval(controles);
    setControlFlag(false);
  };


  return (

    <>
      {/* <DrawingArea onClearLines={undefined} clearLines={undefined} /> */}
      <div className={"bg-[#151A1D] place-items-center h-screen w-screen grid grid-cols-12 grid-rows-9 gap-3 " + (floatingTime ? "absolute " : "")} >
        <>
          <div id="box0" className={`bg-lightback box ` + (floatingTime ? `col-start-2 col-end-4 row-start-2 row-end-4 ` : `  absolute p-5 ` + (controlFlag ? `duration-5000` : `duration-2000`))} style={(floatingTime ? {} : { top: toparrnew[0], left: leftarrnew[0] })}   >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>

          <div id="box1" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-4 col-end-6 row-start-2 row-end-4  ` : `  absolute p-5 ` + (controlFlag ? `duration-5000` : `duration-2000`))} style={(floatingTime ? {} : { top: toparrnew[1], left: leftarrnew[1] })}   >
            <Canvas className="canvas" onClick={() => navigation.navigate('Back')}>
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Ironh />
            </Canvas>
          </div>

          <div id="box2" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-6 col-end-8 row-start-2 row-end-4  ` : `  absolute p-5 ` + (controlFlag ? `duration-5000` : `duration-2000`))} style={(floatingTime ? {} : { top: toparrnew[2], left: leftarrnew[2] })}   >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>

          <div id="box3" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-8 col-end-10 row-start-2 row-end-4  ` : `  absolute p-5 ` + (controlFlag ? `duration-5000` : `duration-2000`))} style={(floatingTime ? {} : { top: toparrnew[3], left: leftarrnew[3] })}   >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>


          <div id="box4" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-10 col-end-12 row-start-2 row-end-4  ` : `  absolute p-5 ` + (controlFlag ? `duration-5000` : `duration-2000`))} style={(floatingTime ? {} : { top: toparrnew[4], left: leftarrnew[4] })}   >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>

          <div id="box5" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-2 col-end-4 row-start-7 row-end-9 ` : `  absolute p-5 ` + (controlFlag ? `duration-5000` : `duration-2000`))} style={(floatingTime ? {} : { top: toparrnew[5], left: leftarrnew[5] })}   >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>

          <div id="box6" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-4 col-end-6 row-start-7 row-end-9  ` : `  absolute p-5 ` + (controlFlag ? `duration-5000` : `duration-2000`))} style={(floatingTime ? {} : { top: toparrnew[6], left: leftarrnew[6] })}   >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>

          <div id="box7" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-6 col-end-8 row-start-7 row-end-9  ` : `  absolute p-5 ` + (controlFlag ? `duration-5000` : `duration-2000`))} style={(floatingTime ? {} : { top: toparrnew[7], left: leftarrnew[7] })}   >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>

          <div id="box8" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-8 col-end-10 row-start-7 row-end-9  ` : `  absolute p-5 ` + (controlFlag ? `duration-5000` : `duration-2000`))} style={(floatingTime ? {} : { top: toparrnew[8], left: leftarrnew[8] })}   >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>

          <div id="box9" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-10 col-end-12 row-start-7 row-end-9  ` : `  absolute p-5 ` + (controlFlag ? `duration-5000` : `duration-2000`))} style={(floatingTime ? {} : { top: toparrnew[9], left: leftarrnew[9] })}   >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>

          <button id="origin" className={"rounded-[20px] bg-[#FF503C] col-start-5 col-end-7 row-start-5 row-end-6 w-full h-full"} style={{}} onClick={() => control()}>
            <span className="text-[64px] text-lightback tracking-[-0.04em] body-font font-neue">C</span>
            <span className="text-[64px] text-lightback tracking-normal body-font font-neue">T</span>
            <span className="text-[64px] text-lightback tracking-[0.05em] body-font font-neue">R</span>
            <span className="text-[70px] text-lightback body-font font-gara italic">L</span></button>
          <button id="origin" className={"rounded-[20px] bg-[#FF503C] text-[64px] col-start-7 col-end-9 row-start-5 row-end-6 w-full h-full"} style={{ left: buttonLoc[1], top: buttonLoc[0] }} onClick={() => { playing() }}>
            <span className="text-[64px] text-lightback tracking-[-0.095em] body-font font-neue">P</span>
            <span className="text-[70px] text-lightback tracking-[-0.025em] body-font font-gara italic">L</span>
            <span className="text-[64px] text-lightback tracking-[-0.085em] body-font font-neue">A</span>
            <span className="text-[64px] text-lightback body-font font-neue">Y</span>
          </button>
        </>


      </div >
    </>

  );
}
export default FrontScreen;
