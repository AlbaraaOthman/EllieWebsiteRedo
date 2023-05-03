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
import FrontScreen from './front.screen';
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
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [textSize, setTextSize] = useState("");
  const [textSpace, setTextSpace] = useState("0");
  const [headingSize, setHeadingSize] = useState("1");
  const [headSpace, setHeadSpace] = useState("0");
  const [titleSize, setTitleSize] = useState("1");
  const [titlSpace, setTitlSpace] = useState("0");

  useEffect(() => {
    console.log('Screen height ' + windowSize.current[1])
    if (windowSize.current[1] >= 1200) {
      setTextSize("20px");
      setHeadingSize("20px");
      setTitleSize("20px");

      setTextSpace("23");
      setHeadSpace("24");
      setTitlSpace("24")
    }
    else if (windowSize.current[1] > 850 && windowSize.current[1] < 1200) {
      setTextSize("16px");
      setHeadingSize("16px");
      setTitleSize("16px");

      setTextSpace("18");
      setHeadSpace("19");
      setTitlSpace("19")
    } else if (windowSize.current[1] <= 850) {
      setTextSize("14px");
      setHeadingSize("14px");
      setTitleSize("14px");

      setTextSpace("16");
      setHeadSpace("17");
      setTitlSpace("17")
    }
  }, []);
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
        <div id="Draw" className={"col-start-2 col-end-7 row-start-2 row-end-9 row-span-6 z-0"}>
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
            <span className="opacity-50 text-head font-neues text-sm/[20px]">How to Model a Play Activity</span>
            <div className='h-[20px]'></div>
            <Collapsible className="z-10" id="1" transitionTime={500} trigger="&nbsp; 1. Pitch the idea." open={"1" === open} onOpening={() => setNumber(1)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]' >
              <p className='ml-4'>A low-pressure activity to start, increasing comfort among the team and enhancing creativity, motivating the team to enjoy sessions and increase productivity. This approach was inspired by my work at LEGO, where we&rsquo;re actively encouraged to play on the job in order to achieve our best work. I also felt really motivated by our training videos, highlighting through strong brand values that prioritising imagination and play is integral to maintaining an open-mind and approaching situations laterally. <br />
                <br />Role: Organise the activities session to session.<br /> </p>
              <div className='h-[20px]'></div>
            </Collapsible>
            <Collapsible className="z-10" id="2" transitionTime={500} trigger="&nbsp; 2. Notice areas for development." open={"2" === open} onOpening={() => setNumber(2)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                <p>
                  Everyone came across very nervous, communication was poor among the team.
                </p><br /><p>
                  Contribution: Bring LEGO bricks as an icebreaker, something to do with our hands while we get to know each other. Sam and I asked each member for an opening line about themselves, before prompting the team to repeat another’s opening line back.
                </p><br /><p>
                  Role: Manage conversation through play, motivate the team to become comfortable with one another.
                </p>
                <div className='h-[20px]'></div>
              </div>
            </Collapsible>
            <Collapsible className="z-10" id="3" transitionTime={500} trigger="&nbsp;  3. Consult HR Manager." open={open === "3"} onOpening={() => setNumber(3)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                <p>We video-called Sam’s HR Manager from SNYK for advice on improving communication.</p>
                <br />
                <p>Q1: How do you get Interns and Juniors to talk to each other?</p>
                <br />
                <p>A: Split into focus groups of 3-5. Give them no-pressure tasks.</p>
                <br />
                <p>Q2: How can we put together an engaging session for Juniors and Interns?</p>
                <br />
                <p>A: Think personal, what would motivate me? Give them choice over what happens during sessions. Approach brainstorming more creatively.</p>
                <div className='h-[20px]'></div>
              </div>
            </Collapsible>
            <Collapsible className="z-10" id="4" transitionTime={500} trigger="&nbsp;  4. Make play an opportunity." open={open === "4"} onOpening={() => setNumber(4)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                <p>I tailored play specifically to the problems we were having around communication by curating communication-based activities to motivate the team to talk to each other.</p>
                <br />
                <p>Blind Lego Building: Split into groups of three, one person describes the building instructions while the other two build based on their description alone, aiming to improve their communication by fuelling detailed discussion and questioning to understand the instructions as if they were looking at them themselves.</p>
                <br />
                <p>String Pen Drawing: Each member controls a piece of string tied around one central pen with the goal of drawing collaboratively. This motivated them to communicate with each other about what they were drawing, how to move the pen, and consider each other’s perspectives. I was conscious not to input too much straight away and take control of the situation to motivate learning through doing, but they still seemed reluctant to communicate with each other. I encouraged them to ask each other questions by asking them myself “if we don’t talk to each other, how will we know where to move the pen?” and “whose perspective are we going to draw from?”. Upon asking this, even Sam realised that she hadn’t considered the perspective, and this opened up further dialogue between her and the team as they began to ask each other questions I had been suggesting.</p>
                <br />
                <p>Having the team draw directly onto the table was a major aspect of the play activities and brainstorming sessions, I wanted to motivate them to feel like nothing was off-limits, to really loosen up, care less about the outcome and focus on being creative.</p>
                <div className='h-[20px]'></div>
              </div>
            </Collapsible>
            <Collapsible className="z-10" id="5" trigger="&nbsp;  5. Play to design." open={open === "5"} onOpening={() => setNumber(5)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                <p>&.LIBS, based on Mad Libs, was designed to motivate Seniors to be adaptable and develop concepts quickly and creatively by unknowingly writing ridiculous briefs for themselves. Having Seniors pitch their solutions to the team allowed us to assess their presentation skills ahead of the G. F. Smith pitch and build their confidence.</p>
                <br />
                <p>Contribution: Delegation in having Sam create presentation templates, writing the brief template collaboratively with Matthew, highlighting the aim of the session in pushing themselves to the limit and coming up with creative concepts in response to a brief that verged on making no sense, taking notes during presentations, and providing positive feedback immediately following to ensure the team felt valued.</p>
                <br />
                <p>I wanted to further validate our Seniors by outlining how impressed I was with the standard of work they had completed in such a short time, and how well they had connected the dots within the brief, turning them into coherent concepts, I backed up this praise by asking them to send us copies of their presentations for us to look back over and share with other Creative Directors.</p>

                <div className='h-[20px]'></div>
              </div>
            </Collapsible>
            <Collapsible className="z-10" id="6" trigger="&nbsp;  6. Ask for feedback." open={open === "6"} onOpening={() => setNumber(6)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                <p>
                  Matthew and I put together a survey to evidence the motivational effects of the play activities throughout Semester 1 and 2. I was always conscious of making our team sessions worthwhile and I personally needed the validation that everyone was enjoying our sessions and felt they were actively achieving in being part of &.LAB. I made a habit of asking the team at the end of play activities if they had enjoyed them, and if they felt they were worthwhile, and while verbal feedback sufficed in the moment, I felt I needed more solid reassurance that I was doing right by my team.
                </p>
                <br />
                <p>
                  Q: How do you think "Design Through Play" impacted your ability to come up with creative concepts and design solutions?
                </p>
                <br />
                <p>
                  A1: It’s enabled me to think from different perspectives and beyond whilst designing.
                </p>
                <br />
                <p>
                  A2: I feel like it had a great impact on coming up with concepts and design solutions. Because it took a lot of pressure you might feel off - and it was just a good non judgemental atmosphere any idea was a good idea… and it created a great base/ starting point to develop ideas.
                </p>
                <br />

                <p>
                  A3: I have less stress with ‘Design through play’ than finishing it as a mission.
                </p>
                <br />

                <p>
                  A4: They definitely helped make us more comfortable and starting to feel creative during sessions. I liked the legos because it takes some of the pressure off to be talking a lot if you have something to do with your hands.
                </p>
                <br />
                <p>
                  A5: They made me feel so comfortable, especially as I often feel intimidated going straight into a brief.
                </p>
              </div>
              <div className='h-[20px]'></div>
            </Collapsible>
            <Collapsible className="z-10" id="7" trigger="&nbsp;  7. Reflect." open={open === "7"} onOpening={() => setNumber(7)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
             <div className='ml-4'>
              <p>
                The play activities were the times that I felt the most proud of my contribution to the agency, I could feel everyone enjoying themselves.
              </p>
              <br />
              <p>
                This was my main contribution during Semester 1, an idea I had from the beginning to help fulfil my goal of everyone feeling motivated to put in the effort to get the most out of their time with &.LAB. It was important for my development as a leader to gather feedback from the team, confirming that the model I had created in Semester 1 was a success and should continue in Semester 2. This was evidenced not only through the input and development that I witnessed in the team during our weekly sessions, but also in their own words of how they felt that the play activities contributed to their personal development and whether or not they felt inspired to continue using them in the future.
              </p>
              <br />
              <p>
                Setting up this routine allowed me to feel a sense of achievement as a Creative Director, I felt like I was getting the most out of our team in keeping them feeling motivated to turn up to our sessions, especially after applying the feedback from HR and using the play activities to develop the confidence of the team.
              </p>
              <div className='h-[20px]'></div>
              </div>
            </Collapsible>
          </>
        </div>
      </div >
    </>
  );
}

export default LegodScreen;