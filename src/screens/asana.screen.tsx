import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Ironh from '../components/Asana';
import Asana from  '../components/Asana';
import DrawingArea from '../components/DrawingAreaBack';
import { Euler } from 'three';
type asanaScreepProp = StackNavigationProp<RootStackParamList, 'Asana'>;

function AsanaScreen() {
  const navigation = useNavigation<asanaScreepProp>();
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


  // const rotateTo = new Euler(0,0,0);
  // useEffect(() => {
  //   let random: NodeJS.Timeout;
  //     random = setInterval(() => {
  // playingPositions();
  //       // const dx = mousePos[0] - xLoc;
  //       // const dy = mousePos[1] - yLoc;
  //       // // const angleInRadians = Math.atan2(dy, dx);
  //       // rotateTo = new Euler( 0, angleInRadians, 0, 'XYZ' );
  //       console.log("Dinosaur");
  //       // console.log("XPos " + mousePos[0] + " dino " + mousePos[1]);
  //     }, 5000); // Change 3000 to whatever interval you want in milliseconds
  //   return () => clearInterval(random);
  // }, []);
  useEffect(() => {
    const handleMouseMove = (event: { clientX: any; clientY: any; }) => {
      setMousePos([event.clientX, event.clientY]);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // let rotateTo = new Euler(0, 0, 0);


  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const dx = mousePos[0] - xLoc;
  //     const dy = mousePos[1] - yLoc;
  //     const angleInRadians = Math.atan2(dy, dx);
  //     console.log(`Dinosaur: ` + angleInRadians);


  //   }, 1000);
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [mousePos]);


  // rotateTo = new Euler(1.3591205608554973, 1.3591205608554973, 1.3591205608554973, 'XYZ');

  return (
    <>
      <div className={"w-screen h-screen grid grid-cols-12 grid-rows-9 gap-5 " + (playing ? "bg-darkback" : "bg-[#F8F3F4]")}>
        <div id="Draw" className={"col-start-2 col-end-6 row-start-2 row-end-7 border-5 " + (playing ? "border-lightback" : "border-darkback")}>
          {(playing ?
            <>
              <DrawingArea onClearLines={undefined} clearLines={undefined} />

            </>
            :
            <>
              <Canvas id="Obj" className="canvas" >
                <OrbitControls enableZoom={false}/> //allows 3d rotation, also says no zooming!
                <ambientLight intensity={0.5} /> //adds light, stops it from being black
                <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
                <Asana />
              </Canvas>
            </>
          )}
        </div>

        <ol className={"col-start-8	col-end-9 col-span-2 row-start-2 w-auto h-auto " + (!playing ? "text-darkback" : "text-lightback")}>
          {(playing ?
            <>
              <li>This</li>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <li>Is</li>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <li>a</li>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <li>Place</li>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <li>Holder</li>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <li>Text</li>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <li>this</li>
            </>
            :
            <>
              <li>This</li>
              <li>Is</li>
              <li>a</li>
              <li>Place</li>
              <li>Holder</li>
              <li>Text</li>
              <li>this</li>
            </>
          )}


        </ol>
        <button className="bg-[#FF503C] col-start-2	col-end-4 col-span-2 row-start-8 w-auto h-auto" onClick={() => { setPlaying(false) }}>CTRL</button>
        <button className="bg-[#FF503C] col-start-4	col-end-6 col-span-2 row-start-8 w-auto h-auto" onClick={() => { setPlaying(true) }}>PLAY</button>
      </div >
    </>
  );
}

export default AsanaScreen;