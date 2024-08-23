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
    infinite: false,
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows: false,
    autoplay: false,
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
      </Slider>
    </StyledSliderContainer>
  );
}

const StyledSliderContainer = styled(Box)({
  overflow: 'hidden',
  backgroundColor: '#666',
  padding: '20px 0',
  zIndex: 1,
  // boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
  borderRadius: '10px',
});

const LogoWrapper = styled(Box)({
  width: '100%',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  // backgroundColor: 'rgba(255, 255, 255, 0.1)',
  // borderRadius: '8px',
  padding: '10px',
  transition: 'transform 0.3s ease',
  ':hover': {
    transform: 'scale(1.05)',
  },
});

const ImgStyle = styled('img')({
  width: '100px',
  height: 'auto',
  opacity: 0.9,
  transition: 'opacity 0.3s ease',
  ':hover': {
    opacity: 1,
  },
});
