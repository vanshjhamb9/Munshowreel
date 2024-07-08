import './App.css';
import Spline from '@splinetool/react-spline';
import Header from './Header';
import { GlobalStyle } from "./globalStyles";
import { Suspense } from 'react';
import styled, { keyframes } from "styled-components";
import { useRef, useState } from "react";
import About from './component/About';
import { ReactTyped as Typed } from 'react-typed';
import Reels from './component/reel';
import ParticlesComponent from './component/ParticleComponent';
import Resume from './component/CV/index';

const move = keyframes`
0% { transform: translateY(-5px)  }
20% { transform: translateY(5px); }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;

const HomeSection = styled.section`
  width: 100vw;
  height: 45vw;
  background-color: #303030;
  display: flex;
  justify-content: center;
  position: relative;
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
  }
`;

const Blobs = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  @media only Screen and (max-width: 48em) {
    opacity: 0.5;
  }
`;



const MainContent = styled.div`
  display: flex;
  width: 70vw;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;


const MobileSvg = styled.img`
  max-width: 100%;
  width: calc(30% + 20vw);
  height: auto;
  z-index: 7;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 48em) {
    align-self: flex-start;
    position: absolute;
    bottom: 0;
    width: calc(30% + 20vw);
    opacity: 0.5;
  }
  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Lb = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 55%;
  line-height: 1.5;
  color: var(--white);
  position: relative;
  z-index: 15;

  @media only Screen and (max-width: 48em) {
    width: 80%;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    margin-top: calc(2.5rem + 2.5vw);
    filter: drop-shadow(2px 4px 6px black);
  }
  @media only Screen and (max-width: 40em) {
    filter: none;
  }
`;

const Topic = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nav);
  color: var(--white);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--purple);
  margin-right: 0.5rem;
`;

const Title = styled.h1`
  font-size: calc(2rem + 1vw);
  line-height: 1.2;
  padding: 0.5rem 0;
`;

const CTA = styled.button`
  background-color: var(--white);
  color: #0a0b10;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: calc(0.5rem + 0.5vw);
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: transform 0.2s;

  img {
    width: 1.5rem;
  }
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;


const Icons = styled.div`
  animation: ${move} 2.5s ease infinite;
`;


function App() {

  const [click, setClick] = useState(false);
  //const handleClick = () => setClick(!click);
  const ref = useRef(null);

  const scrollUp = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest", 
    });
  };
    
const handleClick = (id, e) => {
  setClick(!click);
  scrollUp(id, e);
};
  
  return (
    <>
    <div class="App" className="w-full max-w-screen h-max-content overflow-x-hidden py-[2rem] relative min-h-screen bg-[#303030] flex flex-col font-inter">
    <ParticlesComponent id="Particles" />
    
      <Suspense fallback={null}>
        <GlobalStyle />
        <Header/>
        <div className='max-w-11/12 overflow-visible md:ml-[5rem] sm:w-[140%] justify-center align-center sm:-ml-[14rem] xs:-ml-[15rem] relative -space-x-[34rem] mx-auto flex lg:flex-row md:flex-row sm:flex-col-reverse xs:flex-col-reverse'>
              <MainContent className="mb-[12rem] xs:w-[10rem] md:mt-[10rem] sm:mt-[5rem] xs:mt-[2rem] md:ml-[0rem] xs:ml-[18rem]" id="home">
                <Lb className="flex flex-col gap-4" id="leftBlock">
                  <Title className="font-semibold font-intern">Mun Showreel</Title>
                  <div className="content text-lg font-semibold flex flex-row md:flex-row sm:flex-col sm:w-[50%] xs:flex-col gap-2 mx-auto md:w-[30rem]">
                  <p>Hi there, I specialize in</p>
                    <Typed
                      className='text-yellow-100 text-[1.3rem] font-semibold'
                      strings={['Creative Graphic Designer',
    'Expert Video Editor',
    'Innovative Animator',
    'Visual Storyteller',
    'Multimedia Specialist',]}
                      typeSpeed={40}
                      backSpeed={40}
                      loop
                    />
                  </div>
                  <div className="text-richblack-50">
                    Welcome to my portfolio! I specialize in creating visually stunning graphics and engaging video content. With a keen eye for design and a passion for storytelling, I bring ideas to life through innovative and dynamic visuals. Let's work together to elevate your brand with captivating graphics and compelling videos. 🎨🎥✨
                  </div>
                  <CTA href="#resume" onClick={(e) => handleClick("resume", e)}>
                    Get in touch &nbsp;
                    {/* <img src={arrow} alt="cta" width="100" height="100" /> */}
                  </CTA>
                </Lb>
              </MainContent>

              <Spline className='relative trasition-all duration-400 ease-in-out  md:-left-[10rem] lg:-left-[12rem] xs:left-[43rem] xs:mt-[5rem] md:mt-0  lg:scale-100 md:scale-75 sm:scale-100 xs:scale-150  ' scene="https://prod.spline.design/KFMbIfqEsO7vC4ez/scene.splinecode" />
           </div>

<About />
<div className='relative w-full'>
<Icons className="absolute opacity-[50%] md:-top-[4rem] sm:top-[10rem] xs:top-[19rem] -left-[52rem] mx-auto justify-items-center transition-all ease-in-out duration-600 lg:scale-100 md:scale-75 sm:scale-50 xs:-scale-25 ">
      <Spline  scene="https://prod.spline.design/xVrFWjeSeDnIAdjG/scene.splinecode" />
      </Icons>
      <div id="Videos" className='absolute  md:top-[50rem] sm:top-[60rem] xs:top-[80rem]'></div>
<Reels id="reels" />


</div>


    </Suspense>


      
    </div>
    </>
  );
}

export default App;
