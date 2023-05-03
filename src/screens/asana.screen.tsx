import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Ironh from '../components/Asana';
import Asana from '../components/Asana';
import DrawingArea from '../components/DrawingArea';
import { Euler } from 'three';
import Collapsible from 'react-collapsible';
type asanaScreepProp = StackNavigationProp<RootStackParamList, 'Asana'>;

function AsanaScreen() {
  const navigation = useNavigation<asanaScreepProp>();
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
        <div id="Draw" className={"col-start-2 col-end-7 row-start-2 row-end-9 row-span-6 z-0"}>
          <>
            <Canvas id="Obj" className="canvas" >
              <OrbitControls enableZoom={true} /> //allows 3d rotation, also says no zooming!
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
            <span className="opacity-50 text-head font-neues text-sm/[20px]">How to Model a Creative Director</span>
            <div className='h-[20px]'></div>
            <Collapsible className="z-10" id="1" transitionTime={500} trigger="&nbsp; 1. Don't micromanage." open={"1" === open} onOpening={() => setNumber(1)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]' >
              <div className='ml-4'>
                <p>I realised the importance of delegating tasks effectively to manage and motivate team members in response to Sam, who assigned tasks randomly on Asana without consulting us first. I made sure to always check that the team were happy to be given tasks before delegating them, otherwise I felt like I was belittling them. I used language that made them feel valued and appreciated, for example asking Sam to put together a pitch template for the &amp;.LIBS brief, as her skillset lends itself best to this task.<br /><br />This approach was corroborated by Charlotte and Matthew, who provided positive feedback on how I delegate tasks. Charlotte shared that she feels like she learns from our sessions, because I make sure her input is valued, instead of assigning tasks remotely and making her feel less like a Creative Director and more like a Senior Designer. She cited a specific example during the G. F. Smith brief, after asking for feedback on her designs, I prompted her for an opinion on making elements larger, rather than demanding that she do so.<br /><br />I learned that micromanaging can be detrimental to team dynamics, in the case of Charlotte, and that it&apos;s essential to build trust and respect with team members through effective delegation.</p>
              </div>
              <div className='h-[20px]'></div>
            </Collapsible>
            <Collapsible className="z-10" id="2" trigger="&nbsp; 2. Be selfless and adapt." open={"2" === open} onOpening={() => setNumber(2)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                <p>In actualising my leadership role, it was crucial for me to understand how my team worked best and to make adjustments to accommodate them, specifically through working collaboratively, in-person. We often discussed how we felt that a collaborative planning session in the studio was the most effective way to create engaging sessions, and for every Creative Director to be aware of the session schedule. We spoke about this in response to the chaos we experienced having to plan sessions remotely, often after Sam left the studio in order to complete her own work at home, where she would assign tasks remotely on Asana, stressing us all out with the hoard of notifications.<br /><br />In contrast, I was aware of the impact of my decisions on the team. I felt an internal pressure to ensure that I was available for them when they needed me, rather than assuming others would pick up the slack. I wanted to be transparent with Sam, saying &ldquo;it would have been good if you could have been there... re-explaining everything takes a lot of time&rdquo;, after realising that it was, in fact, using up a lot of valuable time to relay decisions we were making about the G. F. Smith project as a team, just so that she could work on them from home.<br /><br />I always sought input and feedback from my fellow directors before making any decisions, it was really important for my own conscience to ensure they felt their opinions were valued as leaders, rather than assigning tasks randomly without any measurable expectation.</p>              </div>
              <div className='h-[20px]'></div>
            </Collapsible>
            <Collapsible className="z-10" id="3" trigger="&nbsp;  3. Use sessions appropriately." open={open === "3"} onOpening={() => setNumber(3)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                <p>I aimed to lead by example, demonstrating my leadership during sessions by taking charge and keeping us on track, rather than just stating my position as a leader. It was important for me to ensure that everyone was focused on the task, rather than using session time for personal interests. Sam didn&rsquo;t demonstrate that she was fully committed to the team and often distracted us by talking about moving to London, job interviews, and Game of Thrones during sessions.<br /><br />It felt like she was trying to make herself seem more relatable to the rest of the team, and I felt burdened with the &ldquo;bad-cop&rdquo; responsibility of keeping us on task. Matthew also highlighted to me that during sessions she would watch TV programmes with headphones in, whereas I was conscious not to even bring my laptop out if I didn&rsquo;t need it as it became a barrier for collaboration and prevented me from being fully engaged. In contrast, Sam felt removed from sessions by actively cutting off the team to pursue her own interests.</p>
              </div>
              <div className='h-[20px]'></div>
            </Collapsible>
            <Collapsible className="z-10" id="4" trigger="&nbsp;  4. Support your team." open={open === "4"} onOpening={() => setNumber(4)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                <p>During Semester 1, I felt out of control and overwhelmed because I was the only one who seemed to care about the development of our brand. However, with a team of 4, I felt like we could achieve much more since we had each other to rely on, and we could all take on more specific roles, for example Matthew picking up my role of emailing the team weekly, freeing me up to focus on planning our play activities.<br /><br />While Sam and I may have founded the brand, Matthew and Charlotte earned their leadership roles, and I made an active effort to recognise that after they confided in me that they often felt othered by Sam when she repeatedly distinguished us as Co-Founders, and Matthew and Charlotte as &ldquo;coming along later&rdquo;.</p>              </div>
              <div className='h-[20px]'></div>
            </Collapsible>
            <Collapsible className="z-10" id="5" trigger="&nbsp;  5. Be open to criticism." open={open === "5"} onOpening={() => setNumber(5)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                <p>At the end of the semester, Matthew, Charlotte and I made a conscious effort to ask each other for feedback and learn from each other&apos;s mistakes. Sam couldn&rsquo;t attend any of these sessions in-person due to her being in London, but she also didn&rsquo;t make an effort to join any of the sessions remotely upon us informing her of when these would be, or explicitly asking if she wanted to set up a call in the group chat.<br /><br />I&rsquo;ve often described Sam as impenetrable, when you try to give her feedback you can tell you aren&rsquo;t really getting through to her because she will generally feel removed from the situation due to reasons previously discussed; but Charlotte, Matthew and I learned the benefit of accepting criticism openly after creating an environment where we could all air our annoyances with each other throughout the semester and become closer as co-directors and friends.</p>              <div className='h-[20px]'></div>
              </div>
            </Collapsible>
          </>
        </div>
      </div >
    </>
  );
}

export default AsanaScreen;