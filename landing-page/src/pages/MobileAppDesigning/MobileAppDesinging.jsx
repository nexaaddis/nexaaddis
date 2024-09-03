import React, { useEffect } from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { HashLink as Link } from "react-router-hash-link";
import Footer from '../../components/Sections/Footer'
import Contact from '../../components/Contact/Contact'
import { websiteBG } from "../../assets";

const MobileAppDesigning = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box bgcolor="#f3f3f3">
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "60vh", md: "80vh" },
          backgroundImage: `url(${websiteBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#e1e2e2",
          textAlign: "center",
          padding: { xs: 2, md: 4 },
          mt: { xs: "2rem", md: "4rem" },
          mb: { xs: "2rem", md: "4rem" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            px: { xs: 2, md: 4 },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.7rem", md: "2.7rem" },
              color: "#e1e2e2",
              fontFamily: "Roboto, sans-serif",
              mb: 2,
            }}
          >
            Drive Engagement with Exceptional Mobile Experiences
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              color: "#e1e2e2",
              mb: 3,
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Crafting responsive and intuitive mobile applications that empower your business.
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
              },
              mt: 3,
              px: { xs: 3, md: 5 },
              py: 1,
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
            component={Link}
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
          mt: 4,
          mb: 4,
          py: { xs: 2, md: 4 },
          color: "#333",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.4rem", md: "2rem" },
            mb: 4,
            fontFamily: "Roboto, sans-serif",
            color: "#333",
            textAlign: "center",
          }}
        >
          Why Mobile Apps are Essential for Your Business
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
              In today's fast-paced digital world, a mobile app is not just a tool, but a necessity. With a large and growing number of smartphone users in Ethiopia, having a mobile app can significantly boost your customer engagement and streamline your business processes. We specialize in creating apps that are not only visually appealing but also functional and user-friendly.
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: '600',
                  fontSize: { xs: "1.2rem", md: "1.4rem" },
                  mb: 2,
                }}
              >
                Key Benefits of Mobile Apps:
              </Typography>
              <ul>
                <li>
                  <strong>Increased Accessibility:</strong> Your services are just a tap away, providing convenience and ease to your customers.
                </li>
                <li>
                  <strong>Better User Engagement:</strong> Mobile apps foster better communication and customer loyalty through personalized content.
                </li>
                <li>
                  <strong>Efficiency:</strong> Streamline operations with features that cater directly to your business needs.
                </li>
                <li>
                  <strong>Revenue Growth:</strong> With the right strategies, mobile apps can open up new revenue streams.
                </li>
              </ul>
            </Typography>
          </Grid>

          {/* Adding a different visual approach for mobile design */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: { xs: 200, md: 250 },
                backgroundImage: `url(${websiteBG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
                mb: 4,
              }}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              mb: 3,
              color: "#333",
            }}
          >
            Our Mobile Development Services
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 3 }}>
            Our team provides end-to-end mobile app development services that cover the full project lifecycle, from initial concept to deployment and ongoing support. Our services include:
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 2 }}>
            <strong>1. Strategy and Consulting:</strong> We work with you to understand your goals and define the right strategy for your mobile presence.
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 2 }}>
            <strong>2. UI/UX Design:</strong> Our designers create visually appealing and intuitive interfaces that provide a seamless user experience.
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 2 }}>
            <strong>3. Cross-Platform Development:</strong> We build apps for both Android and iOS platforms, ensuring a broad reach.
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 2 }}>
            <strong>4. Testing and QA:</strong> Rigorous testing is conducted to ensure your app runs smoothly on all devices.
          </Typography>
          <Typography variant="body1" paragraph sx={{ mb: 2 }}>
            <strong>5. Launch and Support:</strong> We help you launch your app and provide ongoing support to keep it updated and relevant.
          </Typography>
        </Box>

        <Box sx={{ mt: 4, textAlign: { xs: "center", md: "left" } }}>
          <Link
            to="/#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              textDecoration: "none",
              color: "#fb8122",
              fontWeight: "600",
              fontSize: "1rem",
              transition: "transform 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#fb8122",
                mr: 1,
                display: "inline-flex",
                alignItems: "center",
                fontWeight: "600",
                transition: "color 0.3s",
              }}
            >
              See our recent works
            </Typography>
            <ArrowForward sx={{ color: "#fb8122" }} />
          </Link>
        </Box>
      </Container>
      <Contact />
      <Footer />
    </Box>
  );
};

export default MobileAppDesigning;
