import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';  // Adjust the import path according to your file structure
import Spline from '@splinetool/react-spline';

const ResumeSection = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  z-index: 2;
`;

const Info = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin-bottom: 2rem;
  z-index: 2;
`;

const ButtonContainer = styled.div`
  z-index: 2;
`;

const Button = styled.a`
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  margin: 0 1rem;
  cursor: pointer;
  z-index: 2;
  position: relative;
`;

const SplineContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;  
`;

const Resume = () => {
  const [showModal, setShowModal] = useState(false);
  const cvUrl = "https://drive.google.com/file/d/143OamcyDqJD63af2B4eYnpNDEKOIbW52/preview";

  return (
    <ResumeSection id="resume" className='md:p-[7rem] sm:py-[5rem] xs:py-[6rem] sm:px-[2rem] xs:px-[2rem]'>
      <SplineContainer>
        <Spline scene="https://prod.spline.design/c6csh0d7Z6ybLPTi/scene.splinecode" />
      </SplineContainer>
      <Title className='text-richblack-50 font-intern'>Download My CV</Title>
      <Info className='text-richblack-100 font-inter'>
        Interested in my work? Download my CV to see more about my skills, experience, and the projects I have worked on. I am always excited to collaborate on new projects and bring creative ideas to life.
      </Info>
      <ButtonContainer className='flex lg:flex-row md:flex-row sm:flex-col xs:flex-col md:space-y-[0rem] xs:space-y-[1rem] ' >
        <Button
          className='bg-[#CF9FFF] text-richblack-900 font-semibold font-mono hover:bg-richblack-800 hover:text-richblack-100'
          href="https://drive.google.com/uc?export=download&id=143OamcyDqJD63af2B4eYnpNDEKOIbW52"
          download
        >
          Download CV
        </Button>
        <Button
          className='bg-[#CF9FFF] text-richblack-900 font-semibold font-mono hover:bg-richblack-800 hover:text-richblack-100'
          onClick={() => setShowModal(true)}
        >
          View CV
        </Button>
      </ButtonContainer>
      <Modal show={showModal} onClose={() => setShowModal(false)} cvUrl={cvUrl} />
    </ResumeSection>
  );
};

export default Resume;
