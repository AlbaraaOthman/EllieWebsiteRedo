import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Ironh from '../components/Gestare';
import Asana from '../components/Gestare';
import DrawingArea from '../components/DrawingArea';
import { Euler } from 'three';
import Collapsible from 'react-collapsible';
type gestareScreenProp = StackNavigationProp<RootStackParamList, 'Asana'>;

function GestareScreen() {
  const navigation = useNavigation<gestareScreenProp>();
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
    const updateFontSize = () => {
      const screenHeight = window.innerHeight;
      if (screenHeight >= 1200) {
        setTextSize("20px");
        setHeadingSize("20px");
        setTitleSize("20px");

        setTextSpace("23px");
        setHeadSpace("24px");
        setTitlSpace("24px")
      } else if (screenHeight > 850 && screenHeight < 1200) {
        setTextSize("16px");
        setHeadingSize("16px");
        setTitleSize("16px");

        setTextSpace("18px");
        setHeadSpace("19px");
        setTitlSpace("19px")
      } else if (screenHeight <= 850) {
        setTextSize("14px");
        setHeadingSize("14px");
        setTitleSize("14px");

        setTextSpace("16px");
        setHeadSpace("17px");
        setTitlSpace("17px")
      }
    };

    updateFontSize(); // set initial font size
    window.addEventListener("resize", updateFontSize);

    return () => {
      window.removeEventListener("resize", updateFontSize);
    };
  }, []);

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
              <Ironh />
            </Canvas>
          </>
        </div>
        <svg onClick={() => navigation.navigate('Front')} className='w-[20px] h-auto col-start-1 col-span-1 row-start-1 flex items-center justify-center z-20' viewBox="0 0 43 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.70639 20.7284C0.764537 19.7738 0.764537 18.2262 1.70639 17.2716L17.0548 1.71593C17.9966 0.761357 19.5237 0.761357 20.4655 1.71593C21.4074 2.6705 21.4074 4.21817 20.4655 5.17274L9.23428 16.5557H42V21.4443H9.23428L20.4655 32.8273C21.4074 33.7818 21.4074 35.3295 20.4655 36.2841C19.5237 37.2386 17.9966 37.2386 17.0548 36.2841L1.70639 20.7284Z" fill="#F8F3F4" stroke="#F8F3F4" />
        </svg>

        <div className={`col-start-7 col-end-11 col-span-2 row-start-2 w-auto h-auto text-lightback z-20 font-neue `} style={{ fontSize: textSize , lineHeight: textSpace}}>
          <>
            <span className="opacity-50 text-head font-neues " style={{ fontSize: titleSize , lineHeight: titlSpace}}>How to Model a Live Brief</span>
            <div className='h-[20px]'></div>
            <Collapsible className="z-10" id="1" transitionTime={500} trigger="&nbsp; 1. Talk about your team." open={"1" === open} onOpening={() => setNumber(1)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish  font-neues' triggerClassName='font-neues ' triggerStyle={{fontSize: headingSize, lineHeight: headSpace} }  >
              <div className='ml-4'>
                <p>I contributed a lot to the agency by finding clients for us to work with. I found this brief by gushing about our agency at every possible moment, and just so happened to do so in front of the right person.</p>
                <p><br />I didn&rsquo;t want to make the important decision of committing to a live brief without consulting my team, so I updated them on the prospect of working to create marketing materials for a final year film student to gauge their thoughts on whether or not it was a good use of our time.</p>
                <p><br />As 1 of 4 Creative Directors, I was conscious not to assume the role of the leader in every project, so I motivated Matthew to step up and take the role of Project Manager, highlighting it as an amazing opportunity for the progression of his career in Graphic Design for Film.</p>              <div className='h-[20px]'></div>
              </div>
              <div className='h-[20px]'></div>
            </Collapsible>
            <Collapsible className="z-10" id="2" transitionTime={500} trigger="&nbsp; 2. Organise client meetings." open={"2" === open} onOpening={() => setNumber(2)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish  font-neues' triggerClassName='font-neues ' triggerStyle={{fontSize: headingSize, lineHeight: headSpace} } >
              <div className='ml-4'>
                <p>I assumed more of an Admin role in this project, corresponding with the client directly about where and when we would meet and feeding this back to the team.<br/><br/>I had wished that Matthew would take the lead more during our meetings with the client, as I often felt like he wasn&rsquo;t proactive enough in leading the conversation and recording notes from the meetings. I found that, despite this, I was again the only one carrying the conversation and making notes during our meetings, resulting in the client solely corresponding with me rather than Matthew. Due to me consistently setting out goals and ensuring our sessions were productive, it was assumed that I had made a note of the questions we had discussed to ask the client in preparation with the Seniors, when I hadn&rsquo;t because I believed this became Matthew&rsquo;s responsibility once he accepted the lead role.<br/><br/>I highlighted these insights to him during our feedback session at the end of Semester 2, pointing out that regardless of his nomination and acceptance as Project Manager, I felt like the responsibility fell on me to co-ordinate sessions with the client. I thought it was important for him to know this to develop his leadership skills for when this project ultimately continues on post-university.</p>
                </div>
                  <div className='h-[20px]'></div>
                </Collapsible>
                </>
              </div>
            </div >
          </>
          );
}

          export default GestareScreen;