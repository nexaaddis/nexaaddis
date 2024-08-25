import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { aboutusBg2 } from '../../assets';

// import aboutus3 from "path-to-your-image/aboutus3.jpg";

const AboutUsSection = () => {
  const navigate = useNavigate();

  return (
    <Box component="section" id="about" sx={{ py: { xs: '3rem', md: '5rem' }, bgcolor: '#e7e7e7', width: '100%' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: "center", md: "left" }, px: { xs: 2, sm: 3 } }}>
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
                  onClick={() => navigate('/aboutus')}
                >
                  see more
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
                px: { xs: 2, sm: 3 },
              }}
            >
              <Box
                component="img"
                src={aboutusBg2}
                alt="Large Office"
                sx={{
                  width: { xs: "100%", sm: "80%", md: "100%" },
                  height: { xs: "auto", md: "500px" },
                  borderRadius: "8px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  zIndex: 1,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsSection;
