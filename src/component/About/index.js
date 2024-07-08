import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Spline from '@splinetool/react-spline';

const move = keyframes`
  0% { transform: translateY(-5px); }
  50% { transform: translateY(10px) translateX(10px); }
  100% { transform: translateY(-5px); }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutSection = styled.section`
  width: 100vw;
  height: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const CurvedLine = styled.div`
  width: 12rem;
  height: 3rem;
  border: solid 5px var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const AboutText = styled.div`
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease, transform 1s ease;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
`;


const About = () => {
  const aboutTextRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, options);

    if (aboutTextRef.current) {
      observer.observe(aboutTextRef.current);
    }

    return () => {
      if (aboutTextRef.current) {
        observer.unobserve(aboutTextRef.current);
      }
    };
  }, []);

  return (
    <div id="about" className="mb-[10rem] sm:mt-[10rem] xs:mt-[24rem] md:mt-[0rem] w-full">
      <AboutSection id="about">
        <Main>
          <div className="mx-auto mb-[10rem]">
            <div className="text-white inline-block text-[3rem] font-semibold">About Me</div>
            <CurvedLine />
          </div>
          <div ref={aboutTextRef} className={isVisible ? "is-visible flex flex-col-reverse sm:flex-col z-100 relative xs:flex-col gap-[8rem] text-center items-center md:w-[100%] sm:w-screen xs:w-screen" : "flex flex-col-reverse sm:flex-col z-100 relative xs:flex-col gap-[8rem] text-center items-center md:w-[100%] sm:w-screen xs:w-screen"}>
            <div className="absolute md:-left-[5rem] sm:-left-[22rem] -top-[12rem] z-100 opacity-[100%] transition-all duration-500 ease-in-out lg:scale-100 md:scale-75 sm:-scale-75 xs:-scale-75  mx-auto justify-items-center">
            <Spline scene="https://prod.spline.design/i6FyJ1raxm5Z-k0e/scene.splinecode" />
            </div>
            <AboutText className={isVisible ? "is-visible mt-[35rem] justify-items-start mx-auto md:w-[50rem] sm:w-[20rem] xs:w-[20rem]" : "mt-[20rem] justify-items-start mx-auto w-[50rem]"}>
              <div className="flex flex-col justify-items-start gap-8 w-[100%] z-100">
                <h1 className="font-intern font-bold text-[40px] text-richblack-5">
                  Crafting Visual Stories: The Mun Showreel Experience
                </h1>
                <p className="items-start flex justify-content-start font-inter text-[#CF9FFF] text-[20px]">
                I thrive on crafting captivating multimedia content, from designing striking logos and eye-catching thumbnails to seamlessly editing videos. My passion for animation drives me to create both intricate 3D animations and charming hand-drawn 2D masterpieces. While I excel in video editing and graphic design for diverse clients, animation remains my personal passion, where creativity knows no bounds.
                </p>
              </div>
            </AboutText>
          </div>
        </Main>
      </AboutSection>

    
    </div>
  );
};

export default About;
