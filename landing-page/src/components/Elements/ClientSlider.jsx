import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Box, styled } from '@mui/material';
import {
  blackEagle,
  freeFoodDelivery,
  greenFactory,
  moon,
  realEstate,
  sLetter,
  vFLetter,
  xLetter,
  mechanic,
} from '../../assets';

export default function ClientSlider() {
  const sliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 7,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
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
        sliderRef.current.slickNext();
      } else {
        sliderRef.current.slickPrev();
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <StyledSliderContainer>
      <Slider {...settings} ref={sliderRef}>
        <LogoWrapper>
          <ImgStyle src={blackEagle} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={greenFactory} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={freeFoodDelivery} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={vFLetter} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={mechanic} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={xLetter} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={moon} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={sLetter} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={realEstate} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={moon} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={sLetter} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper>
          <ImgStyle src={realEstate} alt="client logo" />
        </LogoWrapper>
      </Slider>
    </StyledSliderContainer>
  );
}

const StyledSliderContainer = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  backgroundColor: '#e7e7e7',
  padding: '15px 0',
  borderRadius: '10px',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    padding: '10px 0',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '8px 0',
  },
}));

const LogoWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '80px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  outline: 'none',
  padding: '0 10px',
  [theme.breakpoints.down('md')]: {
    height: '70px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '60px',
  },
}));

const ImgStyle = styled('img')(({ theme }) => ({
  border: 'none',
  width: 'auto',
  maxHeight: '100%', // Ensure image scales well
  filter: 'grayscale(100%)', // Black and white effect
  transition: 'filter 0.3s ease',
  ':hover': {
    filter: 'grayscale(0%)', // Show actual color on hover
    // transform: 'scale(1.05)',
  },
}));
