import React, { useState } from "react";
import { Grid, Container, Typography, Button, Box, Collapse } from "@mui/material";
import ProjectsCard from "./ProjectsCard";
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

// Array of project data
const projectsData = [
  { title: "Blog Website", category: "Website", image: workImgThree },
  { title: "Business Card Design", category: "Design", image: workImgOne },
  { title: "Infinity Logo", category: "Logo", image: workImgTwo },
  { title: "Mobile Application", category: "Shopping", image: workImgFive },
  { title: "Responsive Website", category: "E-commerce", image: workImgFour },
  { title: "Graphic Design", category: "Design", image: workImgSix },
  { title: "Ideas & Blog", category: "Website", image: workImgEight },
  { title: "ZOSS Logo", category: "Logo", image: workImgSeven },
  { title: "Blog Website", category: "Website", image: workImgThree },
  { title: "Business Card Design", category: "Design", image: workImgOne },
  { title: "Infinity Logo", category: "Logo", image: workImgTwo },
  { title: "Mobile Application", category: "Shopping", image: workImgFive },
  { title: "Responsive Website", category: "E-commerce", image: workImgFour },
  { title: "Graphic Design", category: "Design", image: workImgSix },
  { title: "Ideas & Blog", category: "Website", image: workImgEight },
  { title: "ZOSS Logo", category: "Logo", image: workImgSeven },
];

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Calculate number of items to show based on whether expanded or not
  const itemsToShow = isExpanded ? projectsData.length : 8; // Show all if expanded, else show initial 8 items

  // Handle show more button click
  const handleToggle = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <Container
      activeClass="active"
      id="projects"
      sx={{
        mt: '3rem',
        mb: 4,
        // backgroundColor: 'transparent',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.8)',  // Inset border shadow
        color: '#f0f0f0'  // Light text color for contrast
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="left"
        sx={{ mb: 5, fontWeight: '800', color: '#f0f0f0' }}
      >
        Recent Projects
      </Typography>
      <Typography
        variant="body1"
        align="left"
        sx={{ mb: 4, lineHeight: 1.6, color: '#d0d0d0' }}  // Slightly lighter text for the body
      >
        We specialize in delivering innovative and efficient software solutions designed to meet diverse business and user needs. Our expertise spans web development, mobile applications, and graphic design, ensuring high-quality outcomes that combine technical excellence with a superior user experience.
        <br />
        <br />
        Each project showcases our commitment to excellence, blending cutting-edge technology with creative design to achieve impactful and user-centric results.
      </Typography>

      <Grid container spacing={4}>
        {projectsData.slice(0, itemsToShow).map((project, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ProjectsCard
              title={project.title}
              category={project.category}
              image={project.image}
              sx={{
                backgroundColor: '#2a2a2a',  // Darker card background
                color: '#f0f0f0',
                borderRadius: '8px',
                boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.5)',  // Subtle inset shadow for cards
              }}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button
          variant="outlined"
          onClick={handleToggle}
          sx={{
            borderRadius: '12px',
            padding: '8px 16px',
            borderColor: isExpanded ? '#dc3545' : '#007bff',
            color: isExpanded ? '#dc3545' : '#007bff',
            '&:hover': {
              borderColor: isExpanded ? '#c82333' : '#0056b3',
              color: isExpanded ? '#c82333' : '#0056b3',
              boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.6)'  // Add inset shadow on hover
            },
            backgroundColor: '#2a2a2a',  // Button background for contrast
            '&:hover': {
              backgroundColor: '#333333'  // Darker on hover
            }
          }}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </Button>
      </Box>
    </Container>

  );
};

export default Projects;
