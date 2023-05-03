import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Ironh from '../components/Ironh';
import Logo from '../components/Logo';
import DrawingArea from '../components/DrawingAreaBack';
import { Euler } from 'three';
import Collapsible from 'react-collapsible';
type logoScreenProp = StackNavigationProp<RootStackParamList, 'Logo'>;


function LogoScreen() {
  const navigation = useNavigation<logoScreenProp>();
  const [playing, setPlaying] = useState(false);
  const [xLoc, setxloc] = useState(0);
  const [yLoc, setyloc] = useState(0);
  let tempArray = [0, 0];
  const [mousePos, setMousePos] = useState([0]);
  const [movedFlags, setMovedFlag] = useState(0);
  var movedFlag = 0;
  const orbitRef = useRef();

  useEffect(() => {
    let myDiv = document.getElementById("Obj");
    let offsets = myDiv?.getBoundingClientRect();
    if (offsets?.top !== undefined) {
      setxloc(offsets?.top);
    }
    if (offsets?.left !== undefined) {
      setyloc(offsets?.left);

    }
  }, []);


  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
      setMousePos([event.clientX, event.clientY]);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className={"w-screen h-screen grid grid-cols-12 grid-rows-9 gap-5 bg-darkback"}>
        <div id="Draw" className={"col-start-2 col-end-7 row-start-2 row-end-9 row-span-6  border-5 border-lightback"}>
          {/* <DrawingArea onClearLines={undefined} clearLines={undefined} /> */}

          <>
            <Canvas id="Obj" className="canvas" >
              <OrbitControls enableZoom={false} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Logo />
            </Canvas>
          </>
        </div>

        <div className={"col-start-8	col-end-11 col-span-2 row-start-2 w-auto h-auto text-lightback"}>
          <>
            <span>How to model a play activity</span>
            <Collapsible trigger="Start here">
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
              <p>
                It can even be another Collapsible component. Check out the next
                section!
              </p>
            </Collapsible>
          </>
        </div>
        <button className="bg-[#FF503C] col-start-2	col-end-4 col-span-2 row-start-8 w-auto h-auto" onClick={() => { setPlaying(false) }}>CTRL</button>
        <button className="bg-[#FF503C] col-start-4	col-end-6 col-span-2 row-start-8 w-auto h-auto" onClick={() => { setPlaying(true) }}>PLAY</button>
      </div >
    </>
  );
}

export default LogoScreen;