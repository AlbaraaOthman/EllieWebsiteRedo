import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Ironh from '../components/Legod';
import Logo from '../components/Legod';
import DrawingArea from '../components/DrawingArea';
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
  const [open, setOpen] = useState("");
  const [number, setNumber] = useState(0);
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
        <div id="Draw" className={"col-start-2 col-end-6 row-start-2 row-end-7 border-5 border-lightback z-0"}>
          <>
            <Canvas id="Obj" className="canvas" >
              <OrbitControls enableZoom={false} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Logo />
            </Canvas>
          </>
        </div>

        <div className={"col-start-8	col-end-11 col-span-2 row-start-2 w-auto h-auto text-lightback text-[16px] z-20"}>
          <>
            <span>How to model a play activity</span>
            <Collapsible className="z-10" id="1" transitionTime={500} trigger="1. Pitch the idea" open={"1" === open} onOpening={() => setNumber(1)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-[red]'>
              <p>
                A low-pressure activity to start, increasing comfort among the team and enhancing creativity, motivating the team to enjoy sessions and increase productivity.
              </p>
              <br />
              <p>
                Contribution: The idea that every session should start with play.
              </p>
              <br />
              <p>
                Role: Organise the activities session to session.              </p>
              <br />
            </Collapsible>
            <Collapsible className="z-10" id="2" trigger="2. Notice areas for development." open={"2" === open} onOpening={() => setNumber(2)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-[red]'>
              <p>
                Everyone came across very nervous, communication was poor among the team.
              </p><br /><p>
                Contribution: Bring LEGO bricks as an icebreaker, something to do with our hands while we get to know each other. Sam and I asked each member for an opening line about themselves, before prompting the team to repeat another’s opening line back.
              </p><br /><p>
                Role: Manage conversation through play, motivate the team to become comfortable with one another.
              </p>
            </Collapsible>
            <Collapsible className="z-10" id="3" trigger="3. Consult HR Manager." open={open === "3"} onOpening={() => setNumber(3)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-[red]'>
              <p>
                We video-called Sam’s HR Manager from SNYK for advice on improving communication.
                <br></br>
                Q1:<br />
                How do you get Interns and Juniors to talk to each other?
                <br></br>
                A:<br />
                Split into focus groups of 3-5. Give them no-pressure tasks.
                <br></br>
                Q2:<br />
                How can we put together an engaging session for Juniors and Interns?
                <br></br>
                A:<br />
                Think personal, what would motivate me?
                Give them choice over what happens during sessions. Approach brainstorming more creatively.             </p>
            </Collapsible>
            <Collapsible className="z-10" id="4" trigger="4. Make play an opprtunity." open={open === "4"} onOpening={() => setNumber(4)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-[red]'>
              <p>
                I tailored play specifically to the problems we were having around communication by curating communication-based activities to motivate the team to talk to each other.
                <br></br>
                Blind Lego Building: Split into groups of three, one person describes the building instructions while the other two build based on their description alone.
                <br></br>
                String Pen Drawing: Each member controls a piece of string tied around one central pen with the goal of drawing collaboratively. This motivated them to communicate with each other and consider different perspectives.
                <br></br>
                Having the team draw directly onto the table was a large aspect of the play activities and brainstorming sessions, I wanted to motivate them to feel like nothing was off-limits, to really loosen up, care less about the outcome and focus on being creative.              </p>
            </Collapsible>
            <Collapsible className="z-10" id="5" trigger="5. Play to design." open={open === "5"} onOpening={() => setNumber(5)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-[red]'>
              <p>
                &LIBS was designed to motivate Seniors to be adaptable and develop concepts quickly and creatively by unknowingly writing ridiculous briefs for themselves. Having Seniors pitch their solutions to the team allowed us to assess their presentation skills ahead of the G. F. Smith pitch and build their confidence.
                <br></br>
                Contribution: Delegation in having Sam create presentation templates, writing the brief template collaboratively with Matthew, taking notes during presentations, and providing positive feedback to ensure the team felt valued.              </p>
            </Collapsible>
            <Collapsible className="z-10" id="6" trigger="6. Ask for feedback." open={open === "6"} onOpening={() => setNumber(6)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-[red]'>
              <p>
                Matthew and I put together a survey to evidence the motivational effects of the play activities throughout Semester 1 and 2.
                <br></br>
                Q:<br></br>
                How do you think "Design Through Play" impacted your ability to come up with creative concepts and design solutions?
                <br></br>
                A1:<br></br>
                It’s enabled me to think from different perspectives and beyond whilst designing.
                <br></br>
                A2:<br></br>
                I feel like it had a great impact on coming up with concepts and design solutions. Because it took a lot of pressure you might feel off - and it was just a good non judgemental atmosphere any idea was a good idea… and it created a great base/ starting point to develop ideas.
                <br></br>
                A3:<br></br>
                I have less stress with ‘Design through play’ than finishing it as a mission.
                <br></br>
                A4:<br></br>
                They definitely helped make us more comfortable and starting to feel creative during sessions. I liked the legos because it takes some of the pressure off to be talking a lot if you have something to do with your hands.
                <br></br>
                A5:<br></br>
                They made me feel so comfortable, especially as I often feel intimidated going straight into a brief.              </p>
            </Collapsible>
            <Collapsible className="z-10" id="7" trigger="7. Reflect." open={open === "7"} onOpening={() => setNumber(7)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-[red]'>
              <p>
                The play activities were the times that I felt the most proud of my contribution to the agency, I could feel everyone enjoying themselves.
                <br></br>
                This was my main contribution during Semester 1, an idea I had from the beginning to help fulfil my goal of everyone feeling motivated to put in the effort to get the most out of their time with &.LAB.
                <br></br>
                Setting up this routine allowed me to feel a sense of achievement as a Creative Director, I felt like I was getting the most out of our team and keeping them feeling motivated to turn up to our sessions, especially after applying the feedback from HR and using the play activities to develop the confidence of the team.              </p>
            </Collapsible>
          </>
        </div>
      </div >
    </>
  );
}

export default LegodScreen;