import React, { useEffect } from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import Footer from "../../components/Sections/Footer";
import Contact from "../../components/Contact/Contact";
import { HashLink as HashLink } from "react-router-hash-link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


import { logoBG, websiteBG } from "../../assets";

const LogoDesignPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box bgcolor="#f9f9f9">
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "90vh", md: "75vh" },
          backgroundImage: `url(${websiteBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#e1e2e2",
          textAlign: "center",
          px: 2,
          pt: "6rem",
          backgroundColor: "rgba(255, 255, 255, .8)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(1, 1, 1, .7)",
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            px: 2,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", md: "2.3rem" },
              color: "#e1e2e2",
              fontFamily: "Roboto, sans-serif",
              mb: 2,
              maxWidth: "99%",
              mx: "auto",
            }}
          >
            Elevate Your Brand with Ethiopian-Inspired Designs
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "#e1e2e2",
              mb: 4,
              fontFamily: "Roboto, sans-serif",
              maxWidth: "80%",
              mx: "auto",
              textAlign: "center",
            }}
          >
            We make logos that tell your story. Combining Ethiopian heritage with cutting-edge design to create logos that stand out and resonate.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fb8122",
              border: "1px solid #fb8122",
              borderRadius: '12px',
              color: "#fff",
              fontWeight: "600",
              "&:hover": {
                backgroundColor: "transparent",
                border: "1px solid #fb8122",
                color: "#fb8122",
              },
              mt: 3,
              px: 4,
              py: 1,
            }}
            component={HashLink}
            to="#contact"
          >
            Let's Talk
          </Button>
        </Box>
      </Box>

      {/* Main Content */}
      <Container
        maxWidth="lg"
        sx={{
          mt: { xs: 4, md: 6 },
          mb: { xs: 4, md: 6 },
          py: { xs: 3, md: 5 },
          px: { xs: 2, md: 4 },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", md: "2rem" },
            mb: 2,
            color: "#333",
          }}
        >
          Why Your Business Needs a Unique Logo?
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.6, px: { xs: 1, md: 3 } }}
        >
          In the bustling market of Ethiopia, a logo is more than just a symbol—it's your brand's identity, a unique blend of your values, culture, and vision. A compelling logo can set you apart, make your brand memorable, and instantly connect with your target audience.
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", md: "1.8rem" },
              mb: 2,
              color: "#333",
            }}
          >
            Our Unique Approach
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
            At our company, we believe that a logo should not only be visually appealing but also meaningful. We draw inspiration from Ethiopia’s rich heritage—its colors, patterns, and history—and fuse it with contemporary design trends. Whether it's the vibrant hues of the Ethiopian flag or the intricate patterns of traditional textiles, every logo we create is a tribute to the beauty of Ethiopia.
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
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
            {["path_to_logo_image_1", "path_to_logo_image_2", "path_to_logo_image_3"].map((src, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
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
                    position: "relative",
                    "&:hover": {
                      transform: "scale(1.1) rotate(3deg)",
                      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
                    },
                    "&:hover .arrow-btn": {
                      opacity: 1,
                      transition: "opacity 0.3s",
                    },
                  }}
                >
                  <img
                    src={src}
                    alt={`Logo Design ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 10,
                      left: 10,
                    }}
                  >
                    <Button
                      className="arrow-btn"
                      size="small"
                      endIcon={<ArrowForwardIcon />}
                      sx={{ color: "#fb8122", opacity: 0, transition: "opacity 0.3s" }}
                    >
                      View Recent Works
                    </Button>
                  </Box>
                </Box>
              </Grid>

            ))}
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
