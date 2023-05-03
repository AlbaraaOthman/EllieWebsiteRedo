import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Ironh from '../components/Logo';
import Logo from '../components/Logo';
import DrawingArea from '../components/DrawingArea';
import { Euler } from 'three';
import Collapsible from 'react-collapsible';
type boardScreenProp = StackNavigationProp<RootStackParamList, 'Logo'>;

function BoardyScreen() {
  const navigation = useNavigation<boardScreenProp>();
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

  // useEffect(() => {
  //   console.log('Screen height ' + windowSize.current[1])
  //   if (windowSize.current[1] >= 1200) {
  //     setTextSize("20px");
  //     setHeadingSize("20px");
  //     setTitleSize("20px");

  //     setTextSpace("23");
  //     setHeadSpace("24");
  //     setTitlSpace("24")
  //   }
  //   else if (windowSize.current[1] > 850 && windowSize.current[1] < 1200) {
  //     setTextSize("16px");
  //     setHeadingSize("16px");
  //     setTitleSize("16px");

  //     setTextSpace("18");
  //     setHeadSpace("19");
  //     setTitlSpace("19")
  //   } else if (windowSize.current[1] <= 850) {
  //     setTextSize("14px");
  //     setHeadingSize("14px");
  //     setTitleSize("14px");

  //     setTextSpace("16");
  //     setHeadSpace("17");
  //     setTitlSpace("17")
  //   }
  // }, []);
  // useEffect(() => {
  //   let myDiv = document.getElementById("Obj");
  //   let offsets = myDiv?.getBoundingClientRect();
  //   if (offsets?.top !== undefined) {
  //     setxloc(offsets?.top);
  //   }
  //   if (offsets?.left !== undefined) {
  //     setyloc(offsets?.left);

  //   }
  // }, []);

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
            <span className="opacity-50 text-head font-neues text-sm/[20px]">How to Model a Brand</span>
            <div className='h-[20px]'></div>
            <Collapsible className="z-10" id="1" transitionTime={500} trigger="&nbsp; 1. Set clear goals." open={"1" === open} onOpening={() => setNumber(1)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]' >
              <div className='ml-4'>
                <p>I wanted to be the difference and avoid the negative agency experiences we&apos;ve all had previously. It was crucial for me that everyone felt proud of their work and that it wasn&apos;t a waste of their time or mine &mdash; if we don&apos;t feel proud of our work, what will motivate us and our team to put the effort in? I wanted everyone to enjoy themselves and have fun while working on projects.&nbsp;</p>
                <p><br /></p>
                <p>Contribution: Setting goals for our agency based on everything I wanted to achieve.</p>
                <div className='h-[20px]'></div>
              </div>
            </Collapsible>
            <Collapsible className="z-10" id="2" trigger="&nbsp; 2. Curate the brand." open={"2" === open} onOpening={() => setNumber(2)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                <p>As Creative Director, curating the tone of voice and brand strategy was of utmost importance. I scoured our independent and joint values and took inspiration from brands we aspired to be like, and considered our target market to design our brand strategy.</p>
                <p><br /></p>
                <p>Coming up with the perfect name for our brand was time-consuming, but it was crucial for me to set the right tone and represent my goals. I took control of the process and set the standard by keeping us at the studio until we had the right name, as Sam was quite eager to settle on something quickly and move on to start the visual design. Together, we came up with the word mark that captured our brand&apos;s essence.</p>
                <p><br /></p>
                <p>It was important to avoid using common buzzwords, focusing on creating an authentic and unique language system that reflected our brand values and identity. By establishing guidelines for promotional copy, emails, roles and titles, we were able to create consistency within the brand and ensure that everyone on the team was aligned with the brand&apos;s messaging, particularly when Matthew took over the role of emailing in Semester 2.&nbsp;</p>
                <p><br /></p>
                <p>Contribution: Ensuring that we stayed focused, and coming up with our name. Drawing our logo assets, modelling them, and rendering the final word mark. Establishing clear guidelines for communicating with our team and clients.</p>
                <div className='h-[20px]'></div>
              </div>
            </Collapsible>
            <Collapsible className="z-10" id="3" trigger="&nbsp;  3. Assign a uniform." open={open === "3"} onOpening={() => setNumber(3)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                Matthew made sure our uniforms became a reality after Sam and I had the idea in Semester 1. Our uniforms motivated us in the sense that we could all feel like part of an established team, especially during our pitch to G. F. Smith. Our lab coats were a symbol of equality and pride in our team, helping to visualise the equal hierarchy we aimed to achieve.
                <div className='h-[20px]'></div>
              </div>
            </Collapsible>
            <Collapsible className="z-10" id="4" trigger="&nbsp;  4. Be the most excited." open={open === "4"} onOpening={() => setNumber(4)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                As Creative Directors, in line with our tone of voice, we threw professionalism out the window and reminded our team every session that they were part of the best agency, totally unopposed to getting a solid dig in at the other agencies who were, in &.LAB’s opinion, doing incredibly boring work compared to us. We backed up our claims after gaining recognition from a handful of our tutors, peers and mentors as a well-established brand who got everything “absolutely spot on”.
                <div className='h-[20px]'></div>
              </div>
            </Collapsible>
            <Collapsible className="z-10" id="5" trigger="&nbsp;  5. Ask for feedback." open={open === "5"} onOpening={() => setNumber(5)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                <p>Q1: How did it feel to part of &amp;.LAB the brand, and &amp;.LAB the team?&nbsp;<br /><br />A1: very slay since we are such a great group. The lab coats helped a lot as well. The quality of the agency was definitely maintained during the semester, last year my creative directors really fell off and did not care very much.&nbsp;<br /><br />A2: &amp;.LAB has been my favourite agency experience ever. I&apos;ve been questioning whether graphic design is a route I want to go down, but after being in a subversive and fun agency I feel a lot of my passion is back. I loved the ironic and light-hearted approach to the play activities and pitch decks as it took alot of the pressure off that I normally feel. I feel like I really learnt and grew as a designer and I had alot of fun. I feel like this is how an agency should be.<br /><br />Q2: If you had to repeat Semester 1, would you still want to join &amp;.LAB? Why or why not?<br /><br />A1: Yesssss- because I really enjoyed listening to you the creative directors the way you think and approached things, and I feel like I learnt so much just being around you.&nbsp;<br /><br />A2: Yes i&rsquo;d still want to join &amp;Lab, I love how each member of the team are equal, as in having the opportunity to share ideas and speak up.&nbsp;<br /><br />A3: I still want to join. &amp;LAB was my favorite in semester one. I always want to go back to &amp;lab. I was happy and relaxed in &amp;lab. And this was my first time that the creative director can remember my name.</p>

                <div className='h-[20px]'></div>
              </div>
            </Collapsible>
          </>
        </div>
      </div >
    </>
  );
}

export default BoardyScreen;