import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './RootStackPrams';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Ironh from '../components/Smithpost';
import Logo from '../components/Smithpost';
import DrawingArea from '../components/DrawingArea';
import { Euler } from 'three';
import Collapsible from 'react-collapsible';
type smithScreenProp = StackNavigationProp<RootStackParamList, 'Logo'>;

function SmithScreen() {
  const navigation = useNavigation<smithScreenProp>();
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
              <Logo />
            </Canvas>
          </>
        </div>
        <svg onClick={() => navigation.navigate('Front')} className='w-[20px] h-auto col-start-1 col-span-1 row-start-1 flex items-center justify-center z-20' viewBox="0 0 43 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.70639 20.7284C0.764537 19.7738 0.764537 18.2262 1.70639 17.2716L17.0548 1.71593C17.9966 0.761357 19.5237 0.761357 20.4655 1.71593C21.4074 2.6705 21.4074 4.21817 20.4655 5.17274L9.23428 16.5557H42V21.4443H9.23428L20.4655 32.8273C21.4074 33.7818 21.4074 35.3295 20.4655 36.2841C19.5237 37.2386 17.9966 37.2386 17.0548 36.2841L1.70639 20.7284Z" fill="#F8F3F4" stroke="#F8F3F4" />
        </svg>

        <div className={`col-start-7 col-end-11 col-span-2 row-start-2 w-auto h-auto text-lightback z-20 font-neue text-sm/[16px]`}>
          <>
            <span className="opacity-50 text-head font-neues text-sm/[20px]">How to Model a G.F.Smith Brick: Phase 2</span>
            <div className='h-[20px]'></div>
            <Collapsible className="z-10" id="1" transitionTime={500} trigger="&nbsp; 1. Be the driving force." open={"1" === open} onOpening={() => setNumber(1)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]' >
              <div className='ml-4'>
                <p>Matthew and I realised we were the only directors who actually cared about how our brand came across to clients, not only were we responsible for the content of the presentation, we were the only ones who actually turned up.<br /><br />After the success of the pitch we were able to feel a sense of achievement in ourselves, knowing that the majority of the work was due to our contributions. We made a point of congratulating each other in our agency group chat to passive-aggressively acknowledge the achievement as our own.<br /><br />It was my idea, following the pitch, to email the presentation to our Seniors to make sure their contributions were acknowledged and praised, especially since the pitch was such a success. I felt it was important to update them since they weren&rsquo;t involved in the visual design and seeing the concept come to life.<br /><br />This was a prime example of us as Creative Directors honouring the Seniors&rsquo; chosen roles, and the Seniors seeing their roles come to life, with the hierarchy flipped in essence. Both Seniors were hired under the role of &ldquo;Brain-in-Residence&rdquo;, where they were both more comfortable contributing ideas rather than designs. This proved to be a good fit as evidenced in their contribution to fleshing out the concept.</p>              </div>
              <div className='h-[20px]'></div>
            </Collapsible>
            <Collapsible className="z-10" id="2" trigger="&nbsp; 2. Be Mummy." open={"2" === open} onOpening={() => setNumber(2)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                <p>I&rsquo;ve referred to myself as &ldquo;Mummy&rdquo; throughout this experience because I felt like I was the only Creative Director being proactive. A specific example of this was figuring out how to source our materials to make the brick and what recipe we would actually be using in practice.<br /><br />I had initially delegated this task to Charlotte to try and level the hierarchy out, since Matthew and I had realised we were the ones carrying this project forward and putting in the most effort. Charlotte informed that she didn&rsquo;t feel &ldquo;in the loop&rdquo; with the project, I felt this was likely because she didn&rsquo;t attend the pitch.<br /><br />I, again, took responsibility for sourcing the recipe and materials, since I had been so invested in the project already and only actually trusted myself to get job done properly. I organised a lift myself from our Semester 2 HR-elect, Nicole, who drove me to buy the materials for our project. Nicole questioned why I was the only one in the team going to buy the materials, in reality I was the only one who knew anything about what we actually needed.<br /><br />I could highlight here that I should have made more of an effort to generate a collective understanding of the project, but saying this would perpetuate my role as &ldquo;Mummy&rdquo;, as I didn&rsquo;t feel I should be responsible for making sure my supposedly equal co-directors were clued in and babied on everything that was happening during our projects. Honestly, I got really tired of spelling everything out, rather than my teammates making a proactive effort to acknowledge the sheer workload I was carrying and offering assistance off their own backs, rather than me having to ask for it.</p>
              </div>
              <div className='h-[20px]'></div>
            </Collapsible>
            <Collapsible className="z-10" id="3" trigger="&nbsp;  3. Adapt to setbacks." open={open === "3"} onOpening={() => setNumber(3)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                <p>Part of my role was 3D modelling the casts we needed to make the brick, and sending them off to 3D print. We ran into issues when I went to pick up our models, but the technicians hadn&rsquo;t actually printed them.<br /><br />I took responsibility for rectifying this, as I had assigned myself the job of making a mould for the brick, as the director with the most relevant experience in this area.&nbsp;<br /><br />To demonstrate my leadership, I adapted quickly to the setback. After fortunately acquiring a 3D printer at home and spending a day figuring out the mechanics, I was able to reassure my team with a mould for the creation of our brick.<br /><br />Again, Matthew and I found ourselves taking the lead in the project to make the brick. Actually, it was more so that I made the brick and Matthew watched. I brought this up to him during our feedback session, asking why he hadn&rsquo;t volunteered to help me make the brick, and he said it was simply because it seemed like I knew exactly what I was doing. I let him know that this reconfirmed my feelings as the team &ldquo;Mummy&rdquo; and would have appreciated an offer for help without me having to direct him to help, but I ultimately understood where he was coming from because I did know what I was doing, because I had put in the work and done the research myself. My role as &ldquo;Mummy&rdquo; was furthered in having to make sure we had all the relevant equipment we needed, despite making a note of everything we needed in Asana and asking Sam if she would mind sourcing a particular drill-bit we needed to blend the paper. She didn&rsquo;t end up getting this, so I adapted last minute again and brought in my own blender from home since we were running out of time to make our final prototype.&nbsp;<br /><br />We wanted our Seniors to experience the manufacturing process in order to feel more involved in the design aspect of the project, so I walked Josie through making the brick during one of our play sessions. To further her involvement in the project, after witnessing her confidence in presenting during the &amp;.LIBS brief, I invited Josie (the only Senior present) to take part in our final client pitch with the role of talking about our brand, to test how well we conveyed the brand and our goals as an agency to the rest of our team. The final pitch was even more successful than the first, so I made sure to send them a message again congratulating them on the outcome of the project and highlighting it as their achievement as an integral part of our team.</p>              <div className='h-[20px]'></div>
              </div>
            </Collapsible>
            <Collapsible className="z-10" id="4" trigger="&nbsp;  4. Consult HR." open={open === "4"} onOpening={() => setNumber(4)} onClosing={() => setNumber(0)} triggerOpenedClassName='text-redish text-sm/[17px] font-neues' triggerClassName='font-neues text-sm/[17px]'>
              <div className='ml-4'>
                <p>I became impatient with how much work I was having to do to get my fellow directors to take on some leadership, so I actively took a step back and focused on replying to the hoard of emails in our inbox to see how the team would respond. I enlisted the help of Nicole, HR-elect, to sit in and observe the dynamics of the session, and also to take our Seniors for a 1:1 to discuss the hierarchy within the team to prove to myself that I wasn&rsquo;t just a control freak and that I was pulling as much weight as I felt I was.<br /><br />I brought up the hierarchy during a later session, asking the loaded question &ldquo;so who&rsquo;s the leader?&rdquo;. Sam thought it was either her or I, with everyone quickly confirming my thoughts that I had been the driving force directing all of the sessions, and ensuring we met all of our goals. Charlotte confirmed in my feedback that I also demonstrated leadership in a maternal sense, ensuring that everyone felt comfortable and valued throughout our sessions, revealing that she felt like &amp;.LAB motivated the return of her creative spark, because she felt like all ideas were encouraged and nothing felt off-limits.&nbsp;<br /><br />Following up with Nicole post-semester with Matthew and Charlotte, we realised that all four of us agreed on the hierarchy, with my role and contribution landing the main leadership position and Matthew being &ldquo;second-in-command&rdquo; as my backbone, Charlotte and Sam falling somewhere after that. In the Seniors&rsquo; feedback, they agreed somewhat, but it became apparent that they didn&rsquo;t see all of the work that Matthew had been doing in the background, and they saw Sam as contributing more than we actually witnessed as fellow directors.&nbsp;<br /><br />Georgie: Sam made cool presentations and was very good at teaching us figma and setting deadlines. Ellie lead alot of the sessions and clearly set out what are goals were each week Matthew and Charlotte seemed to do more background work and they had strong ideas about concepts and directions&nbsp;<br /><br />Josie: Ellie typically led our sessions, especially with the games we started with, and I found that Sam organised things like agency presentations. Charlotte and Matthew were more involved with design processes. I actually expected more of a hierarchy to emerge between the directors since that typically happens in group projects, but from my point of view things were generally equal between them.</p>              </div>
            </Collapsible>
          </>
        </div>
      </div >
    </>
  );
}


export default SmithScreen;