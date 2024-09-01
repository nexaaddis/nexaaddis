import React from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link"; 
import { websiteBG } from "../../assets";



const MobileAppDesigning = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "50vh", md: "60vh" },
          backgroundImage: `url(${websiteBG})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          color: "#e1e2e2",
          textAlign: "center",
          padding: 2,
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
            backgroundColor: "rgba(28, 34, 41, 0.7)",
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            px: 3,
            ml: { xs: 2, md: 8 },
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
              mb: 2,
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Crafting responsive and intuitive mobile applications that empower
            your business.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fb8122",
              color: "#e1e2e2",
              "&:hover": {
                backgroundColor: "transparent",
                border: "1px solid #fb8122",
              },
              mt: 2,
              px: 4,
            }}
            component={Link}
            to="/contact"
          >
            Get Started
          </Button>
        </Box>
      </Box>

      {/* Main Content */}
      <Container
        maxWidth="lg"
        sx={{
          mt: 5,
          mb: 5,
          py: 3,
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          color: "#333",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.4rem", md: "2rem" },
            mb: 6,
            fontFamily: "Roboto, sans-serif",
            color: "#333",
            textAlign: "center",
          }}
        >
          Why Mobile Apps are Essential for Your Business
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              In today's fast-paced digital world, a mobile app is not just a
              tool, but a necessity. With a large and growing number of
              smartphone users in Ethiopia, having a mobile app can significantly
              boost your customer engagement and streamline your business
              processes. We specialize in creating apps that are not only
              visually appealing but also functional and user-friendly.
            </Typography>
            <Typography variant="body1" paragraph>
              <Typography sx={{ mb: ".5rem", fontWeight: '600', fontSize: '1.2rem' }} >Key Benefits of Mobile Apps:</Typography>
              <ul>
                <li>
                  <strong>Increased Accessibility:</strong> Your services are
                  just a tap away, providing convenience and ease to your
                  customers.
                </li>
                <li>
                  <strong>Better User Engagement:</strong> Mobile apps foster
                  better communication and customer loyalty through personalized
                  content.
                </li>
                <li>
                  <strong>Efficiency:</strong> Streamline operations with
                  features that cater directly to your business needs.
                </li>
                <li>
                  <strong>Revenue Growth:</strong> With the right strategies,
                  mobile apps can open up new revenue streams.
                </li>
              </ul>
            </Typography>
          </Grid>

          {/* Adding a different visual approach for mobile design */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: 250,
                backgroundImage: `url(${websiteBG})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "8px",
              }}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "600",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              mb: 2,
              color: "#333",
            }}
          >
            Our Mobile Development Services
          </Typography>
          <Typography variant="body1" paragraph>
            Our team provides end-to-end mobile app development services that
            cover the full project lifecycle, from initial concept to
            deployment and ongoing support. Our services include:
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>1. Strategy and Consulting:</strong> We work with you to
            understand your goals and define the right strategy for your mobile
            presence.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>2. UI/UX Design:</strong> Our designers create visually
            appealing and intuitive interfaces that provide a seamless user
            experience.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>3. Cross-Platform Development:</strong> We build apps for
            both Android and iOS platforms, ensuring a broad reach.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>4. Testing and QA:</strong> Rigorous testing is conducted
            to ensure your app runs smoothly on all devices.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>5. Launch and Support:</strong> We help you launch your app
            and provide ongoing support to keep it updated and relevant.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              mb: 2,
              color: "#333",
            }}
          >
            The Future is Mobile
          </Typography>
          <Typography variant="body1" paragraph>
            As more people rely on their mobile devices for everyday tasks, the
            importance of having a strong mobile presence cannot be overstated.
            Whether you're looking to improve customer engagement, streamline
            operations, or boost your sales, our mobile development services are
            designed to help you achieve your business goals in the most
            effective way.
          </Typography>
        </Box>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fb8122",
              border: "1px solid #fb8122",
              borderRadius: "12px",
              color: "#fff",
              "&:hover": {
                backgroundColor: "transparent",
                border: "1px solid #fb8122",
                color: '#fb8122',
              },
              mt: 2,
              px: 4,
            }}
            component={Link}
            to="/#projects"
          >
            View Our Work
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default MobileAppDesigning;
