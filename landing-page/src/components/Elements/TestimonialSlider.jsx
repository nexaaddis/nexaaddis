import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Container, Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
// Components
import TestimonialBox from "./TestimonialBox";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgEight,
} from "../../assets";

export default function TestimonialSlider() {
  const sliderRef = React.useRef(null);

  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      text: "Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.",
      author: "Ralph Waldo Emerson",
      imgSrc: workImgOne,
    },
    {
      text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson",
      imgSrc: workImgTwo,
    },
    {
      text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      author: "Ralph Waldo Emerson",
      imgSrc: workImgThree,
    },
    {
      text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson",
      imgSrc: workImgFour,
    },
    {
      text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      author: "Ralph Waldo Emerson",
      imgSrc: workImgFive,
    },
    {
      text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson",
      imgSrc: workImgEight,
    },
    {
      text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      author: "Ralph Waldo Emerson",
      imgSrc: workImgSix,
    },
  ];

  return (
    <div id="testimonial" style={{ padding: '4rem 0 4rem 0', width: "100%", backgroundColor: '#fff7f1' }}>
      <Container>
        <Box sx={{ mb: '1rem', textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="body1"
            fontWeight="bold"
            letterSpacing="1.5"
            sx={{
              fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1.2rem' },
              mb: '0.5rem',
              color: 'var(--primary-color)',
              textTransform: 'uppercase',
            }}
          >
            Testimonials
          </Typography>
          <Typography
            variant="h4"
            sx={{ mb: 5, fontWeight: "800", color: "#2a2f35" }}
          >
            What They Say?
          </Typography>
          <Typography variant="body1" mb={4} color="#3a3f45">
            Hear from our clients and partners about their experiences with our
            products.
            <br />
            Your feedback helps us grow and improve.
          </Typography>
        </Box>
        <SliderWrapper>
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <LogoWrapper key={index} className="flexCenter">
                <TestimonialBox
                  text={testimonial.text}
                  author={testimonial.author}
                  imgSrc={testimonial.imgSrc}
                />
              </LogoWrapper>
            ))}
          </Slider>
          <ArrowWrapper>
            <IconButton
              onClick={() => sliderRef.current.slickPrev()}
              sx={{
                color: "var(--primary-color)",
                marginRight: "20px",
              }}
            >
              <ArrowBackIos />
            </IconButton>
            <IconButton
              onClick={() => sliderRef.current.slickNext()}
              sx={{ color: "var(--primary-color)" }}
            >
              <ArrowForwardIos />
            </IconButton>
          </ArrowWrapper>
        </SliderWrapper>
      </Container>
    </div>
  );
}

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 !important;
  padding: 0 !important;
`;

const LogoWrapper = styled.div`
  width: 100%;
  padding: 0 5%;
`;

const ArrowWrapper = styled.div`
  position: absolute;
  bottom: -30px;  /* Positioned at the bottom */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;
