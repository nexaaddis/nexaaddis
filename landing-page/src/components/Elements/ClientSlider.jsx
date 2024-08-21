import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
// Assets
import ClientLogo01 from "../../assets/img/clients/logo01.svg";
import ClientLogo02 from "../../assets/img/clients/logo02.svg";
import ClientLogo03 from "../../assets/img/clients/logo03.svg";
import ClientLogo04 from "../../assets/img/clients/logo04.svg";
import ClientLogo05 from "../../assets/img/clients/logo05.svg";
import ClientLogo06 from "../../assets/img/clients/logo06.svg";

export default function ClientSlider() {
  const sliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const settings = {
    infinite: false, // Disable infinite scrolling for manual control
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows: false,
    autoplay: false, // Disable autoplay for manual control
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollPosition(scrollTop);

      if (scrollTop > lastScrollTop) {
        // Scroll down
        sliderRef.current.slickNext();
      } else {
        // Scroll up
        sliderRef.current.slickPrev();
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <SliderWrapper>
      <Slider {...settings} ref={sliderRef}>
        <LogoWrapper>
          <ImgStyle src={ClientLogo01} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={ClientLogo02} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={ClientLogo03} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={ClientLogo04} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={ClientLogo05} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={ClientLogo06} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={ClientLogo03} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={ClientLogo04} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={ClientLogo01} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={ClientLogo02} alt="client logo" />
        </LogoWrapper>
      </Slider>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: transparent;
  padding: 20px 0;
`;

const LogoWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ImgStyle = styled.img`
  width: 100px;
  height: auto;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  :hover {
    opacity: 1;
  }
`;
