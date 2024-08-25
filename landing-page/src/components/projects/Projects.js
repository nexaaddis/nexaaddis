import React, { useState } from "react";
import { Grid, Container, Typography, Button, Box, Collapse, dividerClasses } from "@mui/material";
import ProjectsCard from "./ProjectsCard";
import {
  workImgOne,
  workImgTwo,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";

// Array of project data
const projectsData = [
  { title: "Blog Website", category: "Website", image: workImgTwo },
  { title: "Business Card Design", category: "Design", image: workImgOne },
  { title: "Infinity Logo", category: "Logo", image: workImgTwo },
  { title: "Mobile Application", category: "Shopping", image: workImgFive },
  { title: "Responsive Website", category: "E-commerce", image: workImgFour },
  { title: "Graphic Design", category: "Design", image: workImgSix },
  { title: "Ideas & Blog", category: "Website", image: workImgEight },
  { title: "ZOSS Logo", category: "Logo", image: workImgSeven },
  { title: "Blog Website", category: "Website", image: workImgEight },
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


  const itemsToShow = isExpanded ? projectsData.length : 8;

  // Handle show more button click
  const handleToggle = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div activeClass="active" style={{ backgroundColor: '#222', display: 'flex', justifyContent: 'center' }}>
      <Container
        id="projects"
        sx={{ color: '#f0f0f0', width: "99%", padding: '5rem auto', m: '3rem 0' }}
      >
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
          Projects
        </Typography>
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
          sx={{ mb: 8, lineHeight: 1.6, color: '#d0d0d0' }}
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
                  backgroundColor: '#2a2a2a',
                  color: '#f0f0f0',
                  borderRadius: '8px',
                  boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.5)',
                }}
              />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            onClick={handleToggle}
            sx={{
              borderRadius: '12px',
              padding: '8px 16px',
              borderColor: '#fb8122',
              color: isExpanded ? '#dc3545' : '#fb8122',
              '&:hover': {
                borderColor: isExpanded ? '#c82333' : '#0056b3',
                color: isExpanded ? '#c82333' : '#0056b3',
                boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.6)',
              },
              backgroundColor: '#2a2a2a',
              '&:hover': {
                backgroundColor: '#333333',
              },
              transition: 'all 0.3s ease',
            }}
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </Button>

        </Box>
      </Container >
    </div>
  );
};

export default Projects;
