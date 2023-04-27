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
  const [controlFlag, setControlFlag] = useState(true);
  let topArr: Array<string> = [];
  let leftArr: Array<string> = [];
  let tempArray = [0, 0];
  var movedFlag = 0;
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  


  const thisFunc = () => {
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

  const [mousePos, setMousePos] = useState([0]);
  const [movedFlags, setMovedFlag] = useState(0);
  var movedFlag = 0;

  const playingPositions = () => {
    if (!controlFlag) {
      const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
        tempArray[0] = event.clientX;
        tempArray[1] = event.clientY;
        setMousePos(tempArray);
        setMovedFlag(1);
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener(
          'mousemove',
          handleMouseMove
        );
      };
    }
  }

  const randomizePositions = () => {
    let newTopArr: Array<string> = [];
    let newLeftArr: Array<string> = [];
    for (let i = 0; i < 10; i++) {
      if (controlFlag) {
        newTopArr[i] = (Math.random() * windowSize.current[1]) + 'px';
        newLeftArr[i] = (Math.random() * windowSize.current[0]) + 'px';
      } else {
        newTopArr[i] = toparrnew[i];
        newLeftArr[i] = leftarrnew[i];
      }
    }
    settoparrnew(newTopArr);
    setleftarrnew(newLeftArr);
    if (!controlFlag) {
      let newTopArr: Array<string> = [];
      let newLeftArr: Array<string> = [];
      for (let i = 0; i < 10; i++) {
        if(i == 1){
        newTopArr[i] = (mousePos[1]) + 'px';
        newLeftArr[i] = (mousePos[0]) + 'px';
        } else{
          console.log("Locationd " + toparr[i])
          newTopArr[i] = toparr[i];
          newLeftArr[i] = leftarr[i];
        }
      }

      settoparrnew(newTopArr);
      setleftarrnew(newLeftArr);
    }
  };

  let random: NodeJS.Timeout;
  useEffect(() => {
    thisFunc();
    let random: NodeJS.Timeout;
    if (controlFlag) {
      random = setInterval(() => {
        randomizePositions();
      }, 5000); // Change 3000 to whatever interval you want in milliseconds
    }
    return () => clearInterval(random);
  }, [controlFlag]);

  useEffect(() => {
    thisFunc();
    let random: NodeJS.Timeout;
    if (!controlFlag) {
      random = setInterval(() => {
        playingPositions();
        settoparrnew([toparr[0], (tempArray[1]) + "px", toparr[2], toparr[3], toparr[4], toparr[5], toparr[6], toparr[7], toparr[8], toparr[9]]);
        setleftarrnew([(leftarr[0]), (tempArray[0]) + "px", leftArr[2], leftarr[3], leftarr[4], leftarr[5], leftarr[6], leftarr[7], leftarr[8], leftarr[9]])
      }, 1000); // Change 3000 to whatever interval you want in milliseconds
    }
    return () => clearInterval(random);
  }, [controlFlag]);



  useEffect(() => {
    sleep(5000);
    thisFunc();
    setFloatingTime(false);
  }, [floatingTime]);

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  const control = async () => {
    setControlFlag(true);
    setFloatingTime(true)
  };





  const playing = async () => {
    setControlFlag(false);
    clearInterval(random);
    setFloatingTime(false);
  };

  useEffect(() => {
    thisFunc();
    setFloatingTime(false); // Turn off floatingTime when component mounts
  }, []);


  return (

    <>
        {/* <DrawingArea onClearLines={undefined} clearLines={undefined} /> */}
        <div className={"bg-[#151A1D] place-items-center h-screen w-screen " + (floatingTime ? "grid grid-cols-12 grid-rows-9 gap-3 " : "")} >
          <>
            <div id="box0" className={`bg-opacity-0 box ` + (floatingTime ? `col-start-1 row-span-1 w-[300px] h-[300px]` : `  absolute p-5 ` + (controlFlag ? `duration-5000` : `duration-2000`))} style={(floatingTime ? {} : { top: toparrnew[0], left: leftarrnew[0] })}   >
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>

            <div id="box1" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-2 row-span-1  w-[300px] h-[300px]` : `  absolute p-5 ` + (controlFlag ? `duration-5000` : `duration-2000`))} style={(floatingTime ? {} : { top: toparrnew[1], left: leftarrnew[1] })}   >
              <Canvas className="canvas" onClick={() => navigation.navigate('Back')}>
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Ironh />
              </Canvas>
            </div>

            <div id="box2" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-3 row-span-1  w-[300px] h-[300px]` : `  absolute p-5 ` + (controlFlag ? `duration-5000` : `duration-2000`))} style={(floatingTime ? {} : { top: toparrnew[2], left: leftarrnew[2] })}   >
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>

            <div id="box3" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-4 row-span-1  w-[300px] h-[300px]` : `  absolute p-5 ` + (controlFlag ? `duration-5000` : `duration-2000`))} style={(floatingTime ? {} : { top: toparrnew[3], left: leftarrnew[3] })}   >
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>


            <div id="box4" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-5 row-span-1  w-[300px] h-[300px]` : `  absolute p-5 ` + (controlFlag ? `duration-5000` : `duration-2000`))} style={(floatingTime ? {} : { top: toparrnew[4], left: leftarrnew[4] })}   >
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>

            <div id="box5" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-1 row-span-3  w-[300px] h-[300px]` : `  absolute p-5 ` + (controlFlag ? `duration-5000` : `duration-2000`))} style={(floatingTime ? {} : { top: toparrnew[5], left: leftarrnew[5] })}   >
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>

            <div id="box6" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-2 row-span-3  w-[300px] h-[300px]` : `  absolute p-5 ` + (controlFlag ? `duration-5000` : `duration-2000`))} style={(floatingTime ? {} : { top: toparrnew[6], left: leftarrnew[6] })}   >
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>

            <div id="box7" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-3 row-span-3  w-[300px] h-[300px]` : `  absolute p-5 ` + (controlFlag ? `duration-5000` : `duration-2000`))} style={(floatingTime ? {} : { top: toparrnew[7], left: leftarrnew[7] })}   >
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>

            <div id="box8" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-4 row-span-3  w-[300px] h-[300px]` : `  absolute p-5 ` + (controlFlag ? `duration-5000` : `duration-2000`))} style={(floatingTime ? {} : { top: toparrnew[8], left: leftarrnew[8] })}   >
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>

            <div id="box9" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-5 row-span-3  w-[300px] h-[300px]` : `  absolute p-5 ` + (controlFlag ? `duration-5000` : `duration-2000`))} style={(floatingTime ? {} : { top: toparrnew[9], left: leftarrnew[9] })}   >
              <Canvas className="canvas">
                <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Boxy />
              </Canvas>
            </div>

            {(!controlFlag ? <button id="origin" className={"bg-[red] row-start-2 absolute flex flex-col items-center justify-center"} style={{left: buttonLoc[1], top: buttonLoc[0] }} onClick={() => control()}>CONTROL</button> : <button id="origin" className={"bg-[blue] absolute flex flex-col items-center justify-center w-6/12"} style={{left: buttonLoc[1], top: buttonLoc[0]}} onClick={() => { playing() }}>PLAY</button>)}
          </>


        </div >
    </>

  );
}
export default FrontScreen;
