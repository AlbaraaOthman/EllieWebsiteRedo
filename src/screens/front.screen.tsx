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
import Legod from '../components/Legod';
import Asana from '../components/Asana';
import Comma from '../components/Commad';
import Inter from '../components/Interviewd';
import Logod from '../components/Logo';
import GWRD from '../components/Gwrd';
import Gest from '../components/Gestare';
import GFS from '../components/Gfd';
import GFPost from '../components/Smithpost';
import Boardy from '../components/Bd';
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
  const [owid, setowidth] = useState("");
  const [ohig, sethwidth] = useState("");
  const [ow, seto] = useState(0);
  const [oh, seth] = useState(0);
  let tempArray = [0, 0];
  const [movedFlag, setMovedFlag] = useState(false);
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

    let mySqu = document.getElementById("box0");
    let offsetss = mySqu?.getBoundingClientRect();
    if (offsetss?.width !== undefined) {
      setowidth(offsetss?.width + "px");
      seto(offsetss?.width)
    }
    if (offsetss?.height !== undefined) {
      sethwidth(offsetss?.height + "px");
      seth(offsetss?.height);
    }
  }



  const controlRandom = () => {
    let newTopArr: Array<string> = [];
    let newLeftArr: Array<string> = [];
    var temp = 0;
    if (controlFlag) {
      for (let i = 0; i < 10; i++) {
        if (i == 7) {
          temp = (Math.random() * windowSize.current[1]);
          newTopArr[i] = temp + 'px';
          temp = (Math.random() * windowSize.current[0]);
          newLeftArr[i] = temp + 'px';
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
    var temp = 0;
    if (!controlFlag) {
      for (let i = 0; i < 10; i++) {
        temp = (Math.random() * windowSize.current[1]);
        newTopArr[i] = temp + 'px';
        temp = (Math.random() * windowSize.current[0]);
        newLeftArr[i] = temp + 'px';
      }
    }
    settoparrnew(newTopArr);
    setleftarrnew(newLeftArr);
  }

  useEffect(() => {
    thisFunc();
    sleep(1000)
    setFloatingTime(false);
    setControlFlag(true);
  }, []);

  let random: NodeJS.Timeout;
  let controles: NodeJS.Timeout;

  useEffect(() => {
    if (!controlFlag && movedFlag) {
      random = setInterval(() => {
        randomizePositions();
      }, 3000); // Change 3000 to whatever interval you want in milliseconds
    }
    return () => clearInterval(random);
  }, [movedFlag]);

  useEffect(() => {
    let controles: NodeJS.Timeout;
    if (controlFlag && movedFlag) {
      controles = setInterval(() => {
        controlRandom();
      }, 5000); // Change 3000 to whatever interval you want in milliseconds
    }
    return () => clearInterval(controles);
  }, [movedFlag]);

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    if (controlFlag) {
      controlRandom();
      setMovedFlag(true);
    }
  }, [controlFlag]);

  useEffect(() => {
    if (!controlFlag) {
      randomizePositions();
      setMovedFlag(true);
    }
  }, [controlFlag]);

  const control = async () => {
    if (!controlFlag) {
      clearInterval(random);
      setMovedFlag(false);
      setControlFlag(true);
    }
  };

  const playing = async () => {
    if (controlFlag) {
      clearInterval(controles);
      setMovedFlag(false);
      setControlFlag(false);
    }
  };


  return (

    <>
      {/* <DrawingArea onClearLines={undefined} clearLines={undefined} /> */}
      <div className={"bg-[#151A1D] place-items-center h-screen w-screen grid grid-cols-12 grid-rows-9 gap-5 transition motion-reduce z-10" + (floatingTime ? "absolute " : "")} >
        <>
          <div id="box0" className={` ` + (floatingTime ? `col-start-1 col-end-4 row-start-1 row-end-4 ` : `  absolute w-[${owid}] h-[${ohig}] ` + (controlFlag ? `duration-5000` : `duration-5000`))} style={(floatingTime ? {} : { top: toparrnew[0], left: leftarrnew[0] })}   >
            <Canvas className="canvas" onClick={() => navigation.navigate('Logo')}>
              <OrbitControls enableZoom={false} autoRotate /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Logod />
            </Canvas>
          </div>

          <div id="box1" className={`box ` + (floatingTime ? `col-start-4 col-end-7 row-start-1 row-end-4 ` : `  absolute w-[${owid}] h-[${ohig}] ` + (controlFlag ? `duration-5000` : `duration-5000`))} style={(floatingTime ? {} : { top: toparrnew[1], left: leftarrnew[1] })}   >
            <Canvas className="canvas" onClick={() => navigation.navigate('Inter')}>
              <OrbitControls enableZoom={false} autoRotate /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Inter />
            </Canvas>
          </div>

          <div id="box2" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-7 col-end-10 row-start-1 row-end-4  ` : `  absolute w-[${owid}] h-[${ohig}] ` + (controlFlag ? `duration-5000` : `duration-5000`))} style={(floatingTime ? {} : { top: toparrnew[2], left: leftarrnew[2] })}   >
            <Canvas className="canvas" onClick={() => navigation.navigate('Legod')}>
              <OrbitControls enableZoom={false} autoRotate /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-10, 25, 10]} intensity={1} /> // //adds light to give it 3D Effect
              <Legod />
            </Canvas>
          </div>

          <div id="box3" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-10 col-end-13 row-start-1 row-end-4  ` : `  absolute w-[${owid}] h-[${ohig}]    ` + (controlFlag ? `duration-5000` : `duration-5000`))} style={(floatingTime ? {} : { top: toparrnew[3], left: leftarrnew[3] })}   >
            <Canvas className="canvas" onClick={() => navigation.navigate('GWRD')} >
              <OrbitControls enableZoom={false} autoRotate /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <GWRD />
            </Canvas>
          </div>


          <div id="box4" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-1 col-end-4 row-start-4 row-end-7  ` : `  absolute w-[${owid}] h-[${ohig}]   ` + (controlFlag ? `duration-5000` : `duration-5000`))} style={(floatingTime ? {} : { top: toparrnew[4], left: leftarrnew[4] })}   >
            <Canvas className="canvas" onClick={() => navigation.navigate('Comma')}>
              <OrbitControls enableZoom={false} autoRotate /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Comma />
            </Canvas>
          </div>

          {/* <div id="box5" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-10 col-end-13 row-start-4 row-end-7 ` : `  absolute   ` + (controlFlag ? `duration-5000` : `duration-5000`))} style={(floatingTime ? {} : { top: toparrnew[5], left: leftarrnew[5] })}   >
            <Canvas className="canvas">
              <OrbitControls enableZoom={false} autoRotate /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Gest />
            </Canvas>
          </div> */}

          <div id="box6" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-1 col-end-4 row-start-7 row-end-10  ` : `  absolute   ` + (controlFlag ? `duration-5000` : `duration-5000`))} style={(floatingTime ? {} : { top: toparrnew[6], left: leftarrnew[6] })}   >
            <Canvas className="canvas" onClick={() => navigation.navigate('GFS')}>
              <OrbitControls enableZoom={false} autoRotate /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <GFS />
            </Canvas>
          </div>

          <div id="box7" className={`bg-opacity-0 z-0	box ` + (floatingTime ? `col-start-4 col-end-7 row-start-7 row-end-10  ` : `  absolute   ` + (controlFlag ? `duration-5000` : `duration-5000`))} style={(floatingTime ? {} : { top: toparrnew[7], left: leftarrnew[7] })}   >
            <Canvas className="canvas" onClick={() => navigation.navigate('Asana')}>
              <OrbitControls enableZoom={false} autoRotate /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Asana />
            </Canvas>
          </div>

          <div id="box8" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-7 col-end-10 row-start-7 row-end-10  ` : `  absolute   ` + (controlFlag ? `duration-5000` : `duration-5000`))} style={(floatingTime ? {} : { top: toparrnew[8], left: leftarrnew[8] })}   >
            <Canvas className="canvas" onClick={() => navigation.navigate('GFPost')}>
              <OrbitControls enableZoom={false} autoRotate /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <GFPost />
            </Canvas>
          </div>

          <div id="box9" className={`bg-opacity-0	box ` + (floatingTime ? `col-start-10 col-end-13 row-start-7 row-end-10 ` : `  absolute   ` + (controlFlag ? `duration-5000` : `duration-5000`))} style={(floatingTime ? {} : { top: toparrnew[9], left: leftarrnew[9] })}   >
            <Canvas className="canvas" onClick={() => navigation.navigate('Boardy')} >
              <OrbitControls enableZoom={false} autoRotate /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Boardy />
            </Canvas>
          </div>

          <button id="origin" className={"z-20 rounded-[20px] bg-[#FF503C] col-start-5 col-end-7 row-start-5 row-end-6 w-full h-full"} style={{}} onClick={() => control()}>
            <svg viewBox="0 0 296 122" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 20C0 8.9543 8.95431 0 20 0H276C287.046 0 296 8.95431 296 20V102C296 113.046 287.046 122 276 122H20C8.95431 122 0 113.046 0 102V20Z" fill="#FF503C" />
              <path d="M101 79.672C105.368 79.672 108.872 78.424 111.272 76.072C113.72 73.672 115.352 69.832 115.4 66.424H111.128C110.696 71.464 107.624 75.88 101.144 75.88C93.9919 75.88 89.3359 70.216 89.3359 61.816C89.3359 53.752 93.5599 47.656 101.096 47.656C106.52 47.656 109.928 50.584 110.744 54.856H114.968C114.056 48.52 109.208 43.912 101.192 43.912C90.9679 43.912 84.9199 51.736 84.9199 61.816C84.9199 72.232 91.2559 79.672 101 79.672Z" fill="#F8F3F4" />
              <path d="M116.167 48.472H127.591V79H131.911V48.472H143.335V44.68H116.167V48.472Z" fill="#F8F3F4" />
              <path d="M147.624 79H151.944V64.504H161.496C166.104 64.504 168.12 66.28 168.456 71.32C168.84 77.08 168.984 78.376 169.704 79H174.36V78.808C173.736 78.376 173.16 76.984 172.776 71.464C172.44 66.376 171.336 63.976 167.832 62.728V62.584C171.96 61.24 173.784 58.264 173.784 54.088C173.784 48.472 169.704 44.68 163.656 44.68H147.624V79ZM151.944 48.424H162.36C167.4 48.424 169.32 50.536 169.32 54.712C169.32 58.6 166.92 61 162.12 61H151.944V48.424Z" fill="#F8F3F4" />
              <path d="M192.967 77.7925C190.447 77.7925 189.449 77.4775 188.714 77.0575C187.664 76.4275 187.664 74.9575 187.717 74.6425C188.609 70.9675 194.384 53.5375 195.802 50.0725C196.799 47.5525 197.744 46.6075 201.104 46.2925C201.892 46.1875 202.522 45.82 202.522 45.5575C202.522 45.295 202.154 44.98 201.104 44.98C198.689 44.98 194.699 45.2425 193.544 45.2425C191.969 45.2425 190.342 45.0325 189.187 45.0325C188.189 45.0325 187.717 45.2425 187.717 45.5575C187.717 46.03 188.189 46.24 189.239 46.45C191.759 46.9225 192.127 47.2375 190.709 51.595C189.764 54.745 185.144 69.025 183.149 74.2225C182.152 76.8475 180.787 77.635 177.847 77.95C176.797 78.055 176.219 78.16 176.219 78.6325C176.219 79 176.639 79.2625 177.847 79.2625C179.107 79.2625 181.574 79 183.622 79C187.139 79 195.697 79.4725 198.637 79.4725C201.577 79.4725 203.519 79.315 203.939 79.21C204.307 79.1575 204.832 78.7375 204.989 78.37C205.462 77.215 207.352 73.9075 207.982 72.07C208.297 71.1775 208.507 69.9175 208.034 69.9175C207.562 69.9175 207.299 70.285 206.669 71.4925C205.199 74.2225 203.414 76.375 201.209 77.32C199.844 77.845 195.592 77.7925 192.967 77.7925Z" fill="#F8F3F4" />
            </svg>
          </button>
          <button id="origin" className={"z-20 rounded-[20px] bg-[#FF503C] text-[64px] col-start-7 col-end-9 row-start-5 row-end-6 w-full h-full"} style={{ left: buttonLoc[1], top: buttonLoc[0] }} onClick={() => { playing() }}>
            <svg viewBox="0 0 296 122" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 20C0 8.9543 8.95431 0 20 0H276C287.046 0 296 8.95431 296 20V102C296 113.046 287.046 122 276 122H20C8.95431 122 0 113.046 0 102V20Z" fill="#FF503C" />
              <path d="M94.216 79H98.536V64.6H107.896C115.384 64.6 118.984 60.808 118.984 54.52C118.984 51.928 118.12 49.672 116.68 47.992C114.904 45.88 112.12 44.68 108.52 44.68H94.216V79ZM98.536 48.424H107.8C112.168 48.424 114.712 50.584 114.712 54.712C114.712 58.648 112.408 61.096 107.56 61.096H98.536V48.424Z" fill="#F8F3F4" />
              <path d="M130.114 77.7925C127.594 77.7925 126.597 77.4775 125.862 77.0575C124.812 76.4275 124.812 74.9575 124.864 74.6425C125.757 70.9675 131.532 53.5375 132.949 50.0725C133.947 47.5525 134.892 46.6075 138.252 46.2925C139.039 46.1875 139.669 45.82 139.669 45.5575C139.669 45.295 139.302 44.98 138.252 44.98C135.837 44.98 131.847 45.2425 130.692 45.2425C129.117 45.2425 127.489 45.0325 126.334 45.0325C125.337 45.0325 124.864 45.2425 124.864 45.5575C124.864 46.03 125.337 46.24 126.387 46.45C128.907 46.9225 129.274 47.2375 127.857 51.595C126.912 54.745 122.292 69.025 120.297 74.2225C119.299 76.8475 117.934 77.635 114.994 77.95C113.944 78.055 113.367 78.16 113.367 78.6325C113.367 79 113.787 79.2625 114.994 79.2625C116.254 79.2625 118.722 79 120.769 79C124.287 79 132.844 79.4725 135.784 79.4725C138.724 79.4725 140.667 79.315 141.087 79.21C141.454 79.1575 141.979 78.7375 142.137 78.37C142.609 77.215 144.499 73.9075 145.129 72.07C145.444 71.1775 145.654 69.9175 145.182 69.9175C144.709 69.9175 144.447 70.285 143.817 71.4925C142.347 74.2225 140.562 76.375 138.357 77.32C136.992 77.845 132.739 77.7925 130.114 77.7925Z" fill="#F8F3F4" />
              <path d="M146.727 79H151.143L154.839 68.536H168.519L172.167 79H176.871L164.199 44.68H159.351L146.727 79ZM160.167 53.512C160.839 51.544 161.751 48.664 161.751 48.664H161.847C161.847 48.664 162.711 51.592 163.383 53.512L167.319 65.032H156.087L160.167 53.512Z" fill="#F8F3F4" />
              <path d="M186.204 79H190.524V64.552L203.1 44.68H198.492L188.508 61H188.412L178.572 44.68H173.772L186.204 64.456V79Z" fill="#F8F3F4" />
            </svg>


          </button>
        </>


      </div >
    </>

  );
}
export default FrontScreen;
