import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Ironh from '../components/Gwrd';
import Logo from '../components/Gwrd';
import DrawingArea from '../components/DrawingArea';
import { Euler } from 'three';
import Collapsible from 'react-collapsible';
type gwrdScreenProp = StackNavigationProp<RootStackParamList, 'Logo'>;

function GWRDScreen() {
  const navigation = useNavigation<gwrdScreenProp>();
  const [playing, setPlaying] = useState(false);
  const [xLoc, setxloc] = useState(0);
  const [yLoc, setyloc] = useState(0);
  let tempArray = [0, 0];
  const [mousePos, setMousePos] = useState([0]);
  const [movedFlags, setMovedFlag] = useState(0);
  const [open, setOpen] = useState("");
  const [number, setNumber] = useState(0);
  const orbitRef = useRef();
  const [textSize, setTextSize] = useState("");
  const [textSpace, setTextSpace] = useState("0");
  const [headingSize, setHeadingSize] = useState("1");
  const [headSpace, setHeadSpace] = useState("0");
  const [titleSize, setTitleSize] = useState("1");
  const [titlSpace, setTitlSpace] = useState("0");

  const [opened, setOpened] = useState("");

  const setOpens = (id: string) => {
    setOpened(id);
  }

  useEffect(() => {
    if (number == 1) {
      setOpen("1");
    } else if (number == 2) {
      setOpen("2");
    } else if (number == 3) {
      setOpen("3");
    } else if (number == 4) {
      setOpen("4");
    } else if (number == 5) {
      setOpen("5")
    }
    else if (number == 6) {
      setOpen("6")
    }
    else if (number == 7) {
      setOpen("7")
    } else if (number == 0) {
      setOpen("0");
    }
  }, [number]);

  return (
    <>
      <div className={"w-screen h-screen grid grid-cols-12 grid-rows-9 gap-5 bg-darkback z-0"}>
        <DrawingArea onClearLines={undefined} clearLines={undefined} />
        <div id="Draw" className={"col-start-2 col-end-7 row-start-2 row-end-9 row-span-6  z-0"}>
          <>
            <Canvas id="Obj" className="canvas" >
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Logo />
            </Canvas>
          </>
        </div>
        <svg onClick={() => navigation.navigate('Front')} className='w-[20px] h-auto col-start-1 col-span-1 row-start-1 flex items-center justify-center z-20' viewBox="0 0 43 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.70639 20.7284C0.764537 19.7738 0.764537 18.2262 1.70639 17.2716L17.0548 1.71593C17.9966 0.761357 19.5237 0.761357 20.4655 1.71593C21.4074 2.6705 21.4074 4.21817 20.4655 5.17274L9.23428 16.5557H42V21.4443H9.23428L20.4655 32.8273C21.4074 33.7818 21.4074 35.3295 20.4655 36.2841C19.5237 37.2386 17.9966 37.2386 17.0548 36.2841L1.70639 20.7284Z" fill="#F8F3F4" stroke="#F8F3F4" />
        </svg>

        <div className={`col-start-7 col-end-11 col-span-2 row-start-2 w-auto h-auto text-lightback z-20 font-neue text-sm/[16px]`}>
          <>
            <span className="opacity-50 text-head font-neues text-sm/[20px]">How to Model a Collaborative Project</span>
            <div className='h-[20px]'></div>
            <Collapsible className="z-10" id="1" transitionTime={500} trigger="&nbsp; 1. Accept your role." open={"1" === open} onOpening={() => setNumber(1)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]' >
              <div className='ml-4'>
                During the Good Work Recycle project, it was important for me to recognise my strengths and limitations as a Creative Director, acknowledging that it was more efficient to let Sam get on with visually designing since she had already started the project in her own time. We decided not to involve the rest of the team on this occasion because we had other briefs that were more exciting for us to work on.
                <div className='h-[20px]'></div>
              </div>
            </Collapsible>
            <Collapsible className="z-10" id="2" trigger="&nbsp; 2. Do the background work." open={"2" === open} onOpening={() => setNumber(2)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                I felt like I wasn’t contributing at all, but I found my role in motivating Sam through providing constructive feedback on her designs and coming up with concepts and directions that we could take the project in. I managed the development of the project by highlighting when we needed to make a decision and move on, and assisted in organising the content for the client presentation; namely in making sure we included several directions for Thorranze to provide feedback on before converging on one idea.
                <div className='h-[20px]'></div>
              </div>
            </Collapsible>
            <Collapsible className="z-10" id="3" trigger="&nbsp;  3. Give credit where credit is due." open={open === "3"} onOpening={() => setNumber(3)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                For my own conscience, but also to distinguish what kind of leader I wanted to be, I made sure to highlight Sam’s work during the client presentation and give her the credit for completing all of the design work to such a high standard. I maintained that the project was collaborative due to my role in the background.                <div className='h-[20px]'></div>
              </div>
            </Collapsible>
          </>
        </div>
      </div >
    </>
  );
}


export default GWRDScreen;