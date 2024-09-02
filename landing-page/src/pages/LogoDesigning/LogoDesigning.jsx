import React from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../../components/Sections/Footer";
import Contact from "../../components/Contact/Contact";
import { logoBG, websiteBG } from "../../assets"; // Background image representing Ethiopian artistic patterns

const LogoDesignPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "50vh", md: "70vh" },
          backgroundImage: `url(${websiteBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#e1e2e2",
          textAlign: "center",
          mt: "3rem",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            px: 2,
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3.5rem" },
              fontFamily: "Roboto, sans-serif",
              mb: 1,
            }}
          >
            Unleash Your Brand with Unique Ethiopian-inspired Logos
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              mb: 3,
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.5,
            }}
          >
            We craft logos that tell your story. Combining Ethiopian heritage
            with cutting-edge design to create logos that stand out and
            resonate.
          </Typography>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#e91e63",
                color: "#fff",
                padding: "0.7rem 2rem",
                borderRadius: "8px",
                textTransform: "none",
                transition: "background-color 0.3s",
                "&:hover": {
                  backgroundColor: "transparent",
                  border: "2px solid #e91e63",
                  color: "#e91e63",
                },
              }}
            >
              Get Started
            </Button>
          </Link>
        </Box>
      </Box>

      {/* Main Content */}
      <Container
        maxWidth="lg"
        sx={{
          mt: 5,
          mb: 5,
          py: 4,
          backgroundColor: "#f9f9f9",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            mb: 2,
            fontFamily: "'Playfair Display', serif",
            color: "#333",
            textAlign: "center",
          }}
        >
          Why Your Business Needs a Unique Logo
        </Typography>
        <Typography variant="body1" paragraph sx={{ textAlign: "center" }}>
          In the bustling market of Ethiopia, a logo is more than just a symbol—it's your brand's identity, a unique blend of your values, culture, and vision. A compelling logo can set you apart, make your brand memorable, and instantly connect with your target audience.
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", md: "1.8rem" },
              mb: 2,
              fontFamily: "'Playfair Display', serif",
              color: "#333",
            }}
          >
            Our Unique Approach
          </Typography>
          <Typography variant="body1" paragraph>
            At our company, we believe that a logo should not only be visually appealing but also meaningful. We draw inspiration from Ethiopia’s rich heritage—its colors, patterns, and history—and fuse it with contemporary design trends. Whether it's the vibrant hues of the Ethiopian flag or the intricate patterns of traditional textiles, every logo we create is a tribute to the beauty of Ethiopia.
          </Typography>
          <Typography variant="body1" paragraph>
            Our process includes:
            <ul>
              <li><strong>Discovery and Research:</strong> We start by understanding your business, your vision, and your audience.</li>
              <li><strong>Concept Development:</strong> We brainstorm and sketch multiple ideas, exploring various visual directions.</li>
              <li><strong>Design and Refine:</strong> We refine the best concepts, focusing on details, colors, and typography.</li>
              <li><strong>Feedback and Finalization:</strong> Your feedback is crucial. We make adjustments until the logo is perfect.</li>
            </ul>
          </Typography>
        </Box>

        {/* Showcase Section */}
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", md: "1.8rem" },
              mb: 2,
              fontFamily: "'Playfair Display', serif",
              color: "#333",
            }}
          >
            Showcase of Our Work
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  overflow: "hidden",
                  height: 220,
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.1) rotate(3deg)",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <img
                  src="path_to_logo_image_1"
                  alt="Logo Design 1"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  overflow: "hidden",
                  height: 220,
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.1) rotate(-3deg)",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <img
                  src="path_to_logo_image_2"
                  alt="Logo Design 2"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  overflow: "hidden",
                  height: 220,
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.1) rotate(5deg)",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <img
                  src="path_to_logo_image_3"
                  alt="Logo Design 3"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default LogoDesignPage;
