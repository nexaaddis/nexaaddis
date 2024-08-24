import React from "react";
import styled from "styled-components";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage1 from "../../assets/img/add/1.png";
import AddImage2 from "../../assets/img/add/2.png";
import AddImage3 from "../../assets/img/add/3.png";

import { bg1 } from '../../assets';

export default function Services() {
  return (
    <Wrapper id="services">
      {/* bg img */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          // background: `url(${bg1}) no-repeat center center/cover`,
          bgcolor: 'var(--secondary-color)',
          filter: 'brightness(0.8)',
          zIndex: -1,
        }}
      />

      {/* Slider */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'absolute',
          top: '-60px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: '1000',
        }}
      >
        <ClientSlider />
      </Container>

      {/* Service section */}
      <Section sx={{
        pt: '10rem',
      }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              mb: '1rem',
              textAlign: { xs: "center", md: "left" },
              p: { xs: 2, md: 3 },
              color: "var(--text-color)",
            }}
          >
            {/* Title */}
            <Typography
              variant="body1"
              fontWeight="bold"
              letterSpacing="1.5" 
              sx={{
                fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1.2rem" },
                marginBottom: "0.5rem",
                color: "var(--primary-color)",
                textTransform: "uppercase",
              }}
            >
              Leading Software Solutions
            </Typography>

            {/* Main Heading */}
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                fontWeight: "bold",
                color: "var(--accent-color)",
                marginBottom: "0.5rem",
                maxWidth: "60%",
              }}
            >
              Turning Ideas into Reality
            </Typography>

            {/* Additional Muted Text */}
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "0.625rem", sm: "0.75rem", md: "0.875rem" },
                color: "var(--text-muted-color)",
              }}
            >
              We build innovative software tailored to your needs, helping your business thrive in the digital age.
            </Typography>
          </Box>
          <ServiceBoxRow>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Graphic Design"
                subtitle="Transforming your ideas into captivating visual designs that resonate with your audience."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Web Design"
                subtitle="Crafting responsive and engaging websites that effectively represent your brand."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Software Development"
                subtitle="Developing custom software solutions to drive your business forward with innovation."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </Container>
      </Section>

      {/* About Us */}
      <Section>
        <Container maxWidth="lg">
          <Advertising>
            <AddLeft>
              <h4 className="font15 semiBold">About Us</h4>
              <h2 className="font40 extraBold">Software & Designing Company</h2>
              <p className="font12">
                We are a team of creative professionals committed to delivering high-quality software and design solutions. Our mission is to empower businesses through innovative technology and exceptional design.
              </p>
              <ButtonsRow>
                <FullButton title="Get Started" action={() => alert("Get Started clicked")} />
                <FullButton title="Contact Us" action={() => alert("Contact Us clicked")} border />
              </ButtonsRow>
            </AddLeft>
            <AddRight>
              <AddRightInner>
                <AddImgWrapp1>
                  <img src={AddImage1} alt="office" />
                </AddImgWrapp1>
                <AddImgWrapp2>
                  <img src={AddImage2} alt="office" />
                </AddImgWrapp2>
              </AddRightInner>
              <AddImgWrapp3>
                <img src={AddImage3} alt="office" />
              </AddImgWrapp3>
            </AddRight>
          </Advertising>
        </Container>
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  position: relative;
  // background: linear-gradient(180deg, #222, #333);
  color: white;
  // padding: 60px 0;
`;

const Section = styled(Box)`
  padding: 60px 0;
  &:nth-child(odd) {
    // background-color: #2c2c2c;
  }
  &:nth-child(even) {
    // background-color: #3a3a3a;
  }
`;

const HeaderInfo = styled(Box)`
  text-align: left;
  margin-bottom: 60px;

  h1 {
    color: #eee;
  }

  p {
    color: #bdbdbd;
    font-size: .9rem;
  }
`;

const ServiceBoxRow = styled(Box)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ServiceBoxWrapper = styled(Box)`
  width: 30%;
  padding: 20px;
  background-color: #444;
  border-radius: 8px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;

  @media (max-width: 860px) {
    width: 100%;
  }
`;

const Advertising = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 80px 0;
  padding: 100px 0;
  color: #ccc;

  @media (max-width: 860px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ButtonsRow = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  & > div {
    margin: 0 10px;
  }

  @media (max-width: 860px) {
    flex-direction: column;

    & > div {
      margin: 10px 0;
    }
  }
`;

const AddLeft = styled(Box)`
  width: 50%;

  @media (max-width: 860px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

const AddRight = styled(Box)`
  width: 50%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 860px) {
    width: 100%;
  }
`;

const AddRightInner = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const AddImgWrapp1 = styled(Box)`
  width: 48%;

  img {
    width: 100%;
    border-radius: 8px;
  }
`;

const AddImgWrapp2 = styled(Box)`
  width: 48%;

  img {
    width: 100%;
    border-radius: 8px;
  }
`;

const AddImgWrapp3 = styled(Box)`
  width: 100%;
  margin-top: 20px;

  img {
    width: 100%;
    border-radius: 8px;
  }
`;
