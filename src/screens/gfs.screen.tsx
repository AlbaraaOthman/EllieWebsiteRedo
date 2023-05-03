import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Ironh from '../components/Gfd';
import Logo from '../components/Gfd';
import DrawingArea from '../components/DrawingArea';
import { Euler } from 'three';
import Collapsible from 'react-collapsible';
type gfsScreenProp = StackNavigationProp<RootStackParamList, 'Logo'>;

function GFSScreen() {
  const navigation = useNavigation<gfsScreenProp>();
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
        <div id="Draw" className={"col-start-2 col-end-6 row-start-2 row-end-7 z-0"}>
          <>
            <Canvas id="Obj" className="canvas" >
              <OrbitControls enableZoom={false} /> //allows 3d rotation, also says no zooming!
              <ambientLight intensity={0.5} /> //adds light, stops it from being black
              <directionalLight position={[-2, 5, 2]} intensity={1} /> // //adds light to give it 3D Effect
              <Ironh />
            </Canvas>
          </>
        </div>
        <svg onClick={() => navigation.navigate('Front')} className='w-[20px] h-auto col-start-1 col-span-1 row-start-1 flex items-center justify-center z-20' viewBox="0 0 43 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.70639 20.7284C0.764537 19.7738 0.764537 18.2262 1.70639 17.2716L17.0548 1.71593C17.9966 0.761357 19.5237 0.761357 20.4655 1.71593C21.4074 2.6705 21.4074 4.21817 20.4655 5.17274L9.23428 16.5557H42V21.4443H9.23428L20.4655 32.8273C21.4074 33.7818 21.4074 35.3295 20.4655 36.2841C19.5237 37.2386 17.9966 37.2386 17.0548 36.2841L1.70639 20.7284Z" fill="#F8F3F4" stroke="#F8F3F4" />
        </svg>

        <div className={`col-start-7 col-end-11 col-span-2 row-start-2 w-auto h-auto text-lightback z-20 font-neue text-sm/[16px]`}>
          <>
            <span className="opacity-50 text-head font-neues text-sm/[20px]">How to Model a G.F.Smith Brick:Phase 1</span>
            <div className='h-[20px]'></div>
            <Collapsible className="z-10" id="1" transitionTime={500} trigger="&nbsp; 1. Set the standard." open={"1" === open} onOpening={() => setNumber(1)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]' >
              <div className='ml-4'>
                <p>During phase one of the brief, I found myself leading our ideation sessions, introducing methods from my own experience to motivate the team in coming up with as many ideas as possible using post-it notes and time constraints to fuel ideation. This role was a good fit for me, as I felt like my working method was the driving force behind &amp;.LAB&rsquo;s concept-driven approach to design.<br /><br />At the start of these sessions, I set clear, achievable goals for the team to keep us on track and on time for client presentations. On this occasion I made the team aware of when the pitch would be, and that by the end of our sessions we needed to make final decisions on concept, visuals, paper choice and presentation format. My role was corroborated by Josie and Georgie in their feedback surveys.<br /><br />To motivate the team, I reminded them of our agency&apos;s purpose and encouraged them to question their assumptions; in particular, aiming to bring them round to the idea of making a literal paper brick, regardless of their initial fixation on creating a &ldquo;traditional&rdquo; publication as directed by the brief. I reiterated the &ldquo;&amp;.LAB way&rdquo;, referring back to the brand values I created; reminding them of the reason they wanted to join &amp;.LAB in the first place; pushing the constraints of the brief as far as possible, and using our speculative approach to design to back up our often unconventional design solutions.<br /><br />My contributions facilitated a productive session and led to us achieving outcomes that the team could genuinely be proud of, in line with the out-of-the-box, futuristic reputation we had gained as a brand.<br /><br />I ensured that I provided the Seniors with immediate feedback and validation of their ideas during these sessions, evidencing this &nbsp;specifically through crediting them in the later client pitch. I asked the Seniors for confirmation of my efforts through written feedback.<br /><br />Q: The last time you completed a project, did you receive recognition and can you provide any examples?<br /><br />A1: During the GF Smith brief I felt my ideas like Repap and making a net were encouraged<br /><br />A2: Yes we got credited during the G.F Smith Pitch and during sessions.</p>
              </div>
              <div className='h-[20px]'></div>
            </Collapsible>
            <Collapsible className="z-10" id="2" trigger="&nbsp; 2. Coordinate and delegate." open={"2" === open} onOpening={() => setNumber(2)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                <p>Sam opted to put together the template for the client presentation and made the decision to run a Figma workshop with the Seniors the day before the pitch, by which point we hadn&rsquo;t yet made any final decisions or have anything tangible to show during the presentation. I didn&rsquo;t want to step on Sam&rsquo;s toes, so took Charlotte and myself away from the situation to work on finalising our research and concept.<br /><br />Upon our return, Sam asked &ldquo;did you guys actually do anything?&rdquo;, highlighting to us that their Figma workshop hadn&rsquo;t reaped many rewards, as Matthew confirmed that the session turned into another case of Sam venturing off-topic.<br /><br />Charlotte and I shared our insights with the team, and I made sure the last hour of the session was spent collaboratively finalising the concept, bringing everyone up to our understanding of the research and ensuring everyone was able to feel a sense of achievement and input ahead of the presentation.<br /><br />I was responsible for ensuring that we chose the right paper for the project, outlining to our Seniors the requirements of the paper based on the final concept, but motivating them to provide input on which stock they thought was most appropriate, and why.<br /><br />I set the standard for the copywriting in the pitch, using my previous pitching experience and advising that we lift phrases directly from the brief and slow-walk the client to the sensitive realisation that paper is approaching obsolescence, in order to win the client over gently.</p>              <div className='h-[20px]'></div>
              </div>
            </Collapsible>
            <Collapsible className="z-10" id="3" trigger="&nbsp;  3. Make up for lost time." open={open === "3"} onOpening={() => setNumber(3)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                <p>Upon the end of the session, we still didn&rsquo;t have a final outcome to show at the pitch. Matthew and I had to take on the responsibility of staying back for hours after the session to refine the concept, providing feedback to each other on ideas, passing our final thoughts on to Charlotte to condense into the copy for the presentation.<br /><br />Matthew and I split up the roles amongst ourselves to fulfil different visual aspects of the concept, it didn&rsquo;t make sense to pass on responsibility for designing visual elements to people who weren&rsquo;t present during our ideation and therefore didn&rsquo;t have a full grasp of the concept. I took on the role of designing the brick, 3D modelling it and rendering images for our presentation.<br /><br />Matthew and I were integral to achieving an actual outcome ahead of our presentation, without our input and management the team would have come across unprepared and unprofessional in front of the client, because there was no evidence of the other directors stepping up to help.</p>              </div>
              <div className='h-[20px]'></div>
            </Collapsible>
          </>
        </div>
      </div >
    </>
  );
}

export default GFSScreen;