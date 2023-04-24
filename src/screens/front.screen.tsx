import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';
import Boxy from '../components/Box';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { off } from 'process';
import Ironh from '../components/Ironh'


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
  let topArr: Array<string> = [];
  let leftArr: Array<string> = [];
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

  const randomizePositions = () => {
    let newTopArr: Array<string> = [];
    let newLeftArr: Array<string> = [];
    console.log("THE FLAG IS " + controlFlag);
    if (controlFlag) {
      for (let i = 0; i < 10; i++) {
        newTopArr[i] = (Math.random() * windowSize.current[1]) + 'px';
        newLeftArr[i] = (Math.random() * windowSize.current[0]) + 'px';
      }
      settoparrnew(newTopArr);
      setleftarrnew(newLeftArr);
    } else if (!controlFlag) {
      settoparrnew([]);
      setleftarrnew([]);
      const handleWindowMouseMove = (event: any) => {
        setCoords({
          x: event.clientX,

          y: event.clientY,
        });
      };

      window.addEventListener('mousemove', handleWindowMouseMove);
      for (let i = 0; i < 10; i++) {
        newTopArr[i] = (coords.y) + 'px';
        newLeftArr[i] = (coords.x) + 'px';
      }

      settoparrnew(newTopArr);
      setleftarrnew(newLeftArr);

      return () => {
        window.removeEventListener(
          'mousemove',
          handleWindowMouseMove,
        );
      };


    }
  };

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  var count = 0;
  useEffect(() => {
    thisFunc();
    setInterval(() => {
      randomizePositions();
    }, 5000); // Change 3000 to whatever interval you want in milliseconds
  }, []);


  const control = async () => {
    thisFunc();
    setFloatingTime(false);
    setControlFlag(true);
  };


  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const playing = async () => {
    setFloatingTime(true);
    setControlFlag(false);
    await sleep(1000);
    thisFunc();
    setFloatingTime(false);
  };


  return (
    <>
      <div className={"bg-[#151A1D] place-items-center h-screen w-screen " + (floatingTime ? "grid grid-cols-5 grid-rows-3 gap-3 " : "")} >
        <>
          <div id="box0" className={`duration-5000 box ` + (floatingTime ? `col-start-1 row-span-1 w-[300px] h-[300px]` : `absolute`)} style={(floatingTime ? {} : { top: toparrnew[0], left: leftarrnew[0] })}   >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>

          <div id="box1" className={`duration-5000 box ` + (floatingTime ? `col-start-2 row-span-1  w-[300px] h-[300px]` : `  absolute`)} style={(floatingTime ? {} : { top: toparrnew[1], left: leftarrnew[1] })}   >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Ironh />
            </Canvas>
          </div>

          <div id="box2" className={`duration-5000 box ` + (floatingTime ? `col-start-3 row-span-1  w-[300px] h-[300px]` : `  absolute`)} style={(floatingTime ? {} : { top: toparrnew[2], left: leftarrnew[2] })}   >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>

          <div id="box3" className={`duration-5000 box ` + (floatingTime ? `col-start-4 row-span-1  w-[300px] h-[300px]` : `  absolute`)} style={(floatingTime ? {} : { top: toparrnew[3], left: leftarrnew[3] })}   >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>


          <div id="box4" className={`duration-5000 box ` + (floatingTime ? `col-start-5 row-span-1  w-[300px] h-[300px]` : `  absolute`)} style={(floatingTime ? {} : { top: toparrnew[4], left: leftarrnew[4] })}   >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>

          <div id="box5" className={`duration-5000 box ` + (floatingTime ? `col-start-1 row-span-3  w-[300px] h-[300px]` : `  absolute`)} style={(floatingTime ? {} : { top: toparrnew[5], left: leftarrnew[5] })}   >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>

          <div id="box6" className={`duration-5000 box ` + (floatingTime ? `col-start-2 row-span-3  w-[300px] h-[300px]` : `  absolute`)} style={(floatingTime ? {} : { top: toparrnew[6], left: leftarrnew[6] })}   >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>

          <div id="box7" className={`duration-5000 box ` + (floatingTime ? `col-start-3 row-span-3  w-[300px] h-[300px]` : `  absolute`)} style={(floatingTime ? {} : { top: toparrnew[7], left: leftarrnew[7] })}   >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>

          <div id="box8" className={`duration-5000 box ` + (floatingTime ? `col-start-4 row-span-3  w-[300px] h-[300px]` : `  absolute`)} style={(floatingTime ? {} : { top: toparrnew[8], left: leftarrnew[8] })}   >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>

          <div id="box9" className={`duration-5000 box ` + (floatingTime ? `col-start-5 row-span-3  w-[300px] h-[300px]` : `  absolute`)} style={(floatingTime ? {} : { top: toparrnew[9], left: leftarrnew[9] })}   >
            <Canvas className="canvas">
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boxy />
            </Canvas>
          </div>

          {(floatingTime ? <button id="origin" className={"bg-[red] col-start-1 col-span-5 row-start-2"} onClick={() => control()}>CONTROL</button> : <button id="origin" className={"bg-[blue] absolute"} style={{ width: buttonLoc[3], height: buttonLoc[4], left: buttonLoc[1], top: buttonLoc[0] }} onClick={() => { playing() }}>PLAY</button>)}
        </>


      </div >
    </>

  );
}
export default FrontScreen;
