import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import YouTube from "react-youtube";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import Resume from "../CV";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:100%;
  padding: 5rem 0;
  position: relative;
`;

const Title = styled.h1`
  color: #c5c7d4;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;
  @media only Screen and (max-width: 40em) {
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #E0B0FF;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #E0B0FF;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const VideoContainer = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`;

const VideoTitle = styled.h2`
  color: #c5c7d4;
  font-size: 2rem;
  margin-top: 1rem;
`;

const VideoSubtitle = styled.p`
  color: #E0B0FF;
  font-size: 1rem;
  margin-top: 0.5rem;
`;

const Reels = () => {
  const sliderRef = useRef(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [opts, setOpts] = useState({
    height: "450",
    width: "800",
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const videos = [
    {
      id: "BzFUNL_hYoQ",
      title: "Video Editing",
      description: "Learn about our video editing services.",
    },
    {
      id: "Fq2ESwvwNo8",
      title: "Graphic Design",
      description: "Discover our creative graphic design work.",
    },
    {
      id: "T4Ls_WlLLMk",
      title: "Animation",
      description: "Explore our captivating animation projects.",
    },
  ];

  const updateVideoSize = () => {
    if (window.innerWidth <= 600) {
      setOpts({
        height: "250",
        width: "300",
        playerVars: {
          autoplay: 0,
          modestbranding: 1,
          rel: 0,
        },
      });
    } else if (window.innerWidth <= 768) {
      setOpts({
        height: "350",
        width: "500",
        playerVars: {
          autoplay: 0,
          modestbranding: 1,
          rel: 0,
        },
      });
    } else {
      setOpts({
        height: "450",
        width: "800",
        playerVars: {
          autoplay: 0,
          modestbranding: 1,
          rel: 0,
        },
      });
    }
  };

  useEffect(() => {
    updateVideoSize();
    window.addEventListener("resize", updateVideoSize);
    return () => window.removeEventListener("resize", updateVideoSize);
  }, []);

  return (
    <Section className="relative md:top-[0.2rem] sm:top-[10rem] xs:top-[24rem] xs:h-[10rem] xs:mb-[20rem] max-h-max-content" >
      <Title id="reels" className="text-richblack-100 mb-[5rem]">Showreel</Title>
      <Carousal className="relative z-10 mt-8 sm:w-[5rem] xs:w-[6rem]">
        <Slider ref={sliderRef} {...settings}>
          {videos.map((video, index) => (
            <VideoContainer key={index}>
              <YouTube videoId={video.id} opts={opts} />
              <div className="w-full flex flex-col mx-auto justify-center items-center p-4 align-items-center place-items-center">
                <VideoTitle className="relative font-semibold font-mono sm:font-[1.5rem] ">{video.title}</VideoTitle>
                <VideoSubtitle className="justify-center font-inter">{video.description}</VideoSubtitle>
              </div>
            </VideoContainer>
          ))}
        </Slider>
      </Carousal>
      <div className="w-full md:mt-[20rem] sm:mt-[15rem] md:mb-[0.2rem] xs:mb-[20rem]">
        <Spline className="transition-all xs:opacity-0 md:opacity-100 duration-400 ease-in-out md:scale-100 sm:scale-50 xs:-scale-50" scene="https://prod.spline.design/qVd8sVI2QEQnrgHE/scene.splinecode" />
        <Resume />
      </div>
    </Section>
  );
};

export default Reels;
