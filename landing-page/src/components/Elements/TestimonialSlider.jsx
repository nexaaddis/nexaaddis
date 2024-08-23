import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Container, Box, Typography } from "@mui/material";
// Components
import TestimonialBox from "./TestimonialBox";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
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
    <Container sx={{ m: {lg: '3rem auto'}, p: '2rem 0', width: '100%' }}>
      <Box sx={{ mb: 8, textAlign: { xs: "center", md: "left" } }}>
        <Typography variant="h4" sx={{ mb: 5, fontWeight: '800', color: '#f0f0f0' }}>
          What They Say?
        </Typography>
        <Typography variant="body1" mb={4} color="#bdbdbd">
          Hear from our clients and partners about their experiences with our products.
          <br />
          Your feedback helps us grow and improve.
        </Typography>
      </Box>
      <Slider {...settings}>
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
    </Container>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
