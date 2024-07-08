import styled from "styled-components";
import ParticlesComponent from "../ParticleComponent";
import { useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { ReactTyped as Typed } from 'react-typed';

const HomeSection = styled.section`
  width: 100vw;
  height: 45vw;
  background-color: #303030;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;  /* Ensure particles don't overflow outside Hero section */
  @media only Screen and (max-width: 48em) {
    height: 70vw;
    display: block;
  }
  @media only Screen and (max-width: 420px) {
    height: auto;
    padding-bottom: 2rem;
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

const Hero = () => {
  const [click, setClick] = useState(false);
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
    <HomeSection>
      <ParticlesComponent id="Particles" />
      <MainContent id="home">
        <Lb>
          <Title>Mun Showreel</Title>
          <div className="content text-lg font-semibold flex flex-row gap-2 w-[30rem]">
            <p>Hi there, I am into </p>
            <Typed
              className="text-yellow-100 text-[1.5rem] font-semibold"
              strings={['Graphic Designer', 'Video Editor', 'Animator']}
              typeSpeed={40}
              backSpeed={40}
              loop
            />
          </div>
          <div className="text-richblack-50">
            Welcome to my portfolio! I specialize in creating visually stunning graphics and engaging video content. With a keen eye for design and a passion for storytelling, I bring ideas to life through innovative and dynamic visuals. Let's work together to elevate your brand with captivating graphics and compelling videos. 🎨🎥✨
          </div>
          <CTA href="#contact" onClick={(e) => handleClick("contact", e)}>
            Get in touch &nbsp;
          </CTA>
        </Lb>
      </MainContent>
      <Spline
        className="absolute -right-[24%] -top-[5%]"
        scene="https://prod.spline.design/KFMbIfqEsO7vC4ez/scene.splinecode"
      />
    </HomeSection>
  );
};

export default Hero;
