import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Ironh from '../components/Interviewd';
import Logo from '../components/Interviewd';
import DrawingArea from '../components/DrawingArea';
import { Euler } from 'three';
import Collapsible from 'react-collapsible';
type interScreenProp = StackNavigationProp<RootStackParamList, 'Logo'>;

function InterScreen() {
  const navigation = useNavigation<interScreenProp>();
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
            <span className="opacity-50 text-head font-neues text-sm/[20px]">How to Model a Hiring System</span>
            <div className='h-[20px]'></div>
            <Collapsible className="z-10" id="1" transitionTime={500} trigger="&nbsp; 1. Design the Interview." open={"1" === open} onOpening={() => setNumber(1)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]' >
              <div className='ml-4'>
                <p>As Creative Director, I had an exact profile of the type of person I wanted to hire based on our brand values: thinkers capable of developing strong concepts and an ability to display confidence in their ideas. For this reason, we knew the interview had to be ridiculous and task-based to see how they dealt with curveballs &mdash; like the Oxbridge of design agencies. This interview style motivated the candidates to think creatively and conceptually, by leaving them with a ball of jelly with a pound inside and being told simply to &ldquo;do something with it&rdquo;, leaving them open to endless opportunities.&nbsp;<br /><br />We hadn&rsquo;t originally wanted to ask them any questions, but in consulting my manager on whether she hired solely on vibe or answers to questions, and her outlining that it was important to consider both, we opted to make our decisions based on their response to the task, and their answers to the questions: &ldquo;Why &amp;.LAB?&rdquo; and &ldquo;What do you think you can bring to the team?&rdquo; This immediately motivated them to consider how they would place themselves in the team, and allow us to gauge an understanding of how our brand was coming across and what kind of experience people were expecting to have.<br /><br />Contribution: Designing the interview and preparing the jelly for the task, writing the copy for the task cards and interview invitations.</p>                <div className='h-[20px]'></div>
              </div>
            </Collapsible>
            <Collapsible className="z-10" id="2" trigger="&nbsp; 2. Write up contracts." open={"2" === open} onOpening={() => setNumber(2)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                <p>I wrote contracts for the team, I thought it would be a great motivational tool and set my expectations of them as their people-leader for the sessions to come. The most important part of the contracts was the Employee Pledge, including light-hearted but motivating statements like &ldquo;Think my best thoughts&hellip; Repeat the daily affirmation of &lsquo;I am the best thinker who ever lived&rsquo;&hellip; Give merit to every idea I have, however bizarre.&rdquo; This established a positive and enthusiastic tone for our work together, encouraging everyone to bring their best ideas and efforts to the table.</p>                <div className='h-[20px]'></div>
              </div>
            </Collapsible>
            <Collapsible className="z-10" id="3" trigger="&nbsp;  3. Motivate others to join." open={open === "3"} onOpening={() => setNumber(3)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                <p>India approached us to ask for feedback, citing how disappointed she was not to be part of our team. We reassured her that she interviewed excellently, highlighting her potential to excel in &amp;.LAB if she was interested in leaving her assigned agency. We left the ball in her court and informed her of where our first session would be, giving her the autonomy to decide whether or not she wanted to join. Our role was to provide guidance and support, while respecting her agency assignment and allowing her to make an informed decision.<br /><br />Nicole approached Sam and I, informing us of Grace&rsquo;s disappointment at not gaining a place in &amp;.LAB due to how much she enjoyed our interview process, and how she felt that Grace was severely lacking in confidence. Upon consulting Nicole for her consent, we decided the best way to proceed in building Grace&rsquo;s confidence was to offer her a freelance contract with a separate Pledge, including allegiance to Nicole, granting her the opportunity to come and go from &amp;.LAB as she pleased, as we thought she could learn a lot from us about letting go of perfection and building confidence in her ideas.<br /><br />We specifically invited Grace to join our 3D modelling workshop, as we noticed Nicole staying back to hold workshops with her in order to improve confidence in her digital skillset. Some of the responses we got as to why people wanted to join &amp;.LAB was a desire to learn how to 3D model like us, so we thought it would be a great opportunity to fulfil this for our team, but specifically to give Grace a taste of the &amp;.LAB way of working so she may want to join us again for future sessions.</p>              </div>
                <div className='h-[20px]'></div>

            </Collapsible>
            <Collapsible className="z-10" id="4" trigger="&nbsp;  4. Communicate with no-shows." open={open === "4"} onOpening={() => setNumber(4)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                After the first session, we got word that Lucia didn’t attend many classes, as she didn’t show face at the first session or contact us at all. We contemplated terminating her contract immediately if there was a no-show at the next session, but after consulting Sam’s HR Manager, Bianca, we were advised to appeal to her human side, be transparent and invite her for a coffee and a chat, highlighting how important &.LAB was to us and that we’d appreciate knowing in advance if she wouldn’t be able to attend. We emailed, inviting her for a chat post session two, and upon following Bianca’s advice, Lucia attended every session and participated with enthusiasm. We learned from this that honesty in our roles as leaders was best in the pursuit of employee attendance, rather than the hostility of a contract termination.
              </div>
            </Collapsible>
          </>
        </div>
      </div >
    </>
  );
}

export default InterScreen;