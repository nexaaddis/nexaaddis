import React from "react";
import styled from "styled-components";
import { Container, Box, Typography, Button, Grid } from "@mui/material";

// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";

// Assets
import { aboutus1 } from "../../assets";
const smallImage = "https://via.placeholder.com/400x300";
// import { bg1 } from '../../assets';

export default function Services() {
  return (
    <Wrapper id="services">
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: '#eee',
          zIndex: -1,
        }}
      />

      {/* Service Section */}
      <Section sx={{ p: '4rem 1rem 15rem 1rem', position: 'relative' }}>
        {/* Slider */}
        <Container
          maxWidth="lg"
          sx={{
            position: 'absolute',
            bottom: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
          }}
        >
          <ClientSlider />
        </Container>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4, textAlign: { xs: "center", md: "center", lg: 'left' } }}>
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
              Leading Software Solutions
            </Typography>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{ fontWeight: '800', color: '#1c2229' }}
            >
              Turning Ideas into Reality
            </Typography>
            <Typography variant="body1" mt={1} color="#3a3f45">
            We build innovative software tailored to your needs, helping your business thrive in the digital age.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <ServiceBox
                icon="roller"
                title="Designing"
                subtitle="We create impactful visual designs that clearly communicate your brand’s message and connect with your target audience."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ServiceBox
                icon="monitor"
                title="Web Development"
                subtitle="Our team builds responsive and user-friendly websites that enhance your online presence and effectively showcase your business."
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ServiceBox
                icon="browser"
                title="Mobile Development"
                subtitle="We develop robust mobile applications that bring your services to your customers' fingertips, ensuring a seamless experience."
              />
            </Grid>
          </Grid>
        </Container>
      </Section>

      {/* About Us Section */}
      <Section sx={{ py: '5rem', bgcolor: '#e7e7e7', }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Left Content */}
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
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
                  About us
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                    fontWeight: "bold",
                    color: "var(--secondary-color)",
                    mb: "1.5rem",
                  }}
                >
                  Software & Designing Firm
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
                    color: "var(--bg-muted-color)",
                    mb: "4rem",
                    mt: "2rem"
                  }}
                >
                  We are a team of creative professionals committed to delivering high-quality software and design solutions. Our mission is to empower businesses through innovative technology and exceptional design, turning your ideas into reality.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-start", mt: '2rem' },
                    gap: "1rem",
                  }}
                >
                  <Button
                    // variant="contained"
                    sx={{
                      textTransform: "uppercase",
                      border: "1px solid var(--primary-color)",
                      fontWeight: "bold",
                      p: "0.75rem 1.5rem",
                      backgroundColor: "var(--primary-color)",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: "var(--primary-color)",
                      },
                    }}
                    onClick={() => alert("Get Started clicked")}
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      p: "0.75rem 1.5rem",
                      borderColor: "var(--primary-color)",
                      color: "var(--primary-color)",
                      "&:hover": {
                        backgroundColor: "var(--primary-color)",
                        color: "white",
                        borderColor: "var(--primary-color)",
                      },
                    }}
                    onClick={() => alert("Contact Us clicked")}
                  >
                    Contact Us
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Right Image */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                {/* Large Image */}
                <Box
                  component="img"
                  src={aboutus1}
                  alt="Large Office"
                  objectFit='cover'
                  sx={{
                    width: "100%",
                    height: "500px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                    zIndex: 1,
                  }}
                />
                {/* Small Image */}
                {/* <Box
                  component="img"
                  src={aboutus3}
                  alt="Small Office"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "70%",
                    height: "auto",
                    borderRadius: "8px",
                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                    zIndex: 2,
                  }}
                /> */}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Section = styled(Box)`
  padding: 4rem 0;
`;

