import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Ironh from '../components/Legod';
import Logo from '../components/Legod';
import DrawingArea from '../components/DrawingAreaBack';
import { Euler } from 'three';
import Collapsible from 'react-collapsible';
type legodScreenProp = StackNavigationProp<RootStackParamList, 'Logo'>;

function LegodScreen() {
  const navigation = useNavigation<legodScreenProp>();
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

  const[opened, setOpened]=useState("");

  const setOpens = (id: string) => {
    setOpened(id);
  }

  useEffect(() => {
    console.log(opened);
  }, [opened])


  return (
    <>
      <div className={"w-screen h-screen grid grid-cols-12 grid-rows-9 gap-5 bg-darkback"}>
        <div id="Draw" className={"col-start-2 col-end-6 row-start-2 row-end-7 border-5 border-lightback"}>
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
            <Collapsible id="1" trigger="1. Pitch the idea" accordionPosition={"1"} open={false}>
              <p>
                A low-pressure activity to start, increasing comfort among the team and enhancing creativity, motivating the team to enjoy sessions and increase productivity. Contribution: The idea that every session should start with play. Role: Organise the activity session to session.
              </p>
            </Collapsible>
            <Collapsible id="2" trigger="2. Notice areas for development." className='text-[red]' accordionPosition={"2"}>
              <p>
                Everyone came across very nervous, communication was poor among the team. Contribution: bring LEGO bricks as an icebreaker, something to do with our hands while we get to know each other. Sam and I asked each member for an opening line about themselves, before prompting the team to repeat another’s opening line back. My role: manage conversation through play, motivate the team become comfortable with one another.              </p>
            </Collapsible>
            <Collapsible id="3" trigger="3. Consult HR Manager." className='text-[red]' open={opened==="3"}>
              <p>
                We video-called Sam’s HR Manager from SNYK for advice on improving communication. Q: How do you get Interns and Juniors to talk to each other? A: Split into focus groups of 3-5. Give them no-pressure tasks. Q: How can we put together an engaging session for Juniors and Interns? A: Think personal, what would motivate me?
                Give them choice over what happens during sessions. Approach brainstorming more creatively.              </p>
            </Collapsible>
            <Collapsible id="4" trigger="4. Make play an opprtunity." className='text-[red]' open={opened === "4"}>
              <p>
                A low-pressure activity to start, increasing comfort among the team and enhancing creativity, motivating the team to enjoy sessions and increase productivity. Contribution: The idea that every session should start with play. Role: Organise the activity session to session.
              </p>
            </Collapsible>
            <Collapsible id="5" trigger="5. Play to design." className='text-[red]' open={opened==="5"}>
              <p>
                A low-pressure activity to start, increasing comfort among the team and enhancing creativity, motivating the team to enjoy sessions and increase productivity. Contribution: The idea that every session should start with play. Role: Organise the activity session to session.
              </p>
            </Collapsible>
            <Collapsible id="6" trigger="6. Dedicate a session to play." className='text-[red]' open={opened==="6"}>
              <p>
                A low-pressure activity to start, increasing comfort among the team and enhancing creativity, motivating the team to enjoy sessions and increase productivity. Contribution: The idea that every session should start with play. Role: Organise the activity session to session.
              </p>
            </Collapsible>
            <Collapsible id="7" trigger="7. Ask for feedback." className='text-[red]' open={opened==="7"}>
              <p>
                A low-pressure activity to start, increasing comfort among the team and enhancing creativity, motivating the team to enjoy sessions and increase productivity. Contribution: The idea that every session should start with play. Role: Organise the activity session to session.
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

export default LegodScreen;