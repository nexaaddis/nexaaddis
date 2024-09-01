import React from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { websiteBG } from "../../assets";

// Inline styles for the updated design
const WebsiteDesignPage = () => {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "40vh", md: "60vh" },
          backgroundImage: `url(${websiteBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
            backgroundColor: "rgba(28, 34, 41, 0.8)",
          }}
        />
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            px: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              color: "#e1e2e2",
              fontFamily: "Roboto, sans-serif",
              mb: 1,
            }}
          >
            Empowering Your Business with Stunning Websites
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
            We design functional, beautiful websites that help you reach your
            goals.
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
            Contact Us
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
            fontSize: { xs: "1.4rem", md: "1.8rem" },
            mb: 2,
            fontFamily: "'Playfair Display', serif",
            color: "#333",
          }}
        >
          Why a Good Website Matters
        </Typography>

        <Typography variant="body1" paragraph>
          In Ethiopia, where digital transformation is rapidly growing, your
          website is often the first impression customers have of your business.
          A well-crafted website not only attracts visitors but convinces them
          to engage with your services. From aesthetics to functionality, good
          web design ensures a seamless and satisfying user experience.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Key Aspects of Web Design:</strong>
          <ul>
            <li>
              <strong>User Experience (UX):</strong> Creating intuitive, easy-to-navigate websites that make your visitors' journey enjoyable.
            </li>
            <li>
              <strong>Visual Design:</strong> We ensure that your site reflects your brand with appealing visuals, appropriate color schemes, and fonts that resonate with your audience.
            </li>
            <li>
              <strong>Responsive Design:</strong> Your website will be optimized for all devices, ensuring a perfect look and functionality on smartphones, tablets, and desktops.
            </li>
            <li>
              <strong>Performance:</strong> Fast, reliable, and efficient websites reduce bounce rates and keep users engaged.
            </li>
          </ul>
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              mb: 2,
              fontFamily: "'Playfair Display', serif",
              color: "#333",
            }}
          >
            Our Web Development Process
          </Typography>
          <Typography variant="body1" paragraph>
            We approach web development with a clear strategy and a commitment
            to excellence. Our process includes:
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>1. Planning and Discovery:</strong> Understanding your
            business goals, audience, and unique needs to create a tailored
            website plan.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>2. Design:</strong> Crafting wireframes and visual designs
            that align with your brand's goals and user expectations.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>3. Development:</strong> Building robust, scalable websites
            using the latest technologies to ensure performance and security.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>4. Testing:</strong> Rigorous testing on all devices and
            browsers to ensure a flawless user experience.
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>5. Launch:</strong> Deploying your website with all the
            necessary configurations, followed by continuous support and
            updates.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              mb: 2,
              fontFamily: "'Playfair Display', serif",
              color: "#333",
            }}
          >
            Why Choose Us
          </Typography>
          <Typography variant="body1" paragraph>
            At our company, we understand the Ethiopian market and the unique
            challenges of local businesses. We offer:
            <ul>
              <li>
                <strong>Customized Solutions:</strong> Tailored designs that
                reflect your brand and appeal to your target audience.
              </li>
              <li>
                <strong>Expertise and Experience:</strong> A team of skilled
                professionals who are passionate about web development and
                committed to delivering quality work.
              </li>
              <li>
                <strong>Competitive Pricing:</strong> High-quality services that
                fit within your budget, helping you get the best return on your
                investment.
              </li>
              <li>
                <strong>Ongoing Support:</strong> We don't just build websites;
                we provide ongoing support to ensure your site remains up-to-date
                and effective.
              </li>
            </ul>
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              mb: 2,
              fontFamily: "'Playfair Display', serif",
              color: "#333",
            }}
          >
            Visual Examples of Our Work
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  bgcolor: "#e1e2e2",
                  height: 200,
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* <Typography variant="body2" color="text.secondary">
                  <strong>Example of an E-commerce Site</strong>
                </Typography> */}
                <img src="https://uicookies.com/wp-content/uploads/2019/04/free-simple-website-template.jpg" alt="E-commerce Site page" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  bgcolor: "#e1e2e2",
                  height: 200,
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  <strong>Portfolio Showcase</strong>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  bgcolor: "#e1e2e2",
                  height: 200,
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  <strong>Service Business Website</strong>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default WebsiteDesignPage;
