import React, { useState } from "react";
import { Grid, Container, Typography, Button, Box } from "@mui/material";
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
  { title: "Responsive Website", category: "E-commerce", image: workImgFour },
  { title: "Graphic Design", category: "Design", image: workImgSix },
  { title: "Ideas & Blog", category: "Website", image: workImgEight },
  { title: "ZOSS Logo", category: "Logo", image: workImgSeven },
];

const Projects = () => {
  const [visibleRows, setVisibleRows] = useState(2); // Number of rows to show initially
  const [isExpanded, setIsExpanded] = useState(false); // Toggle for expand/collapse

  // Calculate number of items to show based on rows
  const itemsToShow = visibleRows * 4;

  // Handle show more button click
  const handleToggle = () => {
    if (isExpanded) {
      setVisibleRows(2); // Reset to initial 2 rows
    } else {
      setVisibleRows(Math.min(Math.ceil(projectsData.length / 4), visibleRows + 1)); // Show one more row at a time
    }
    setIsExpanded(!isExpanded); // Toggle state
  };

  return (
    <Container>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        align="center"
        sx={{ mb: 4, fontWeight: 'bold' }}
      >
        Recent Projects
      </Typography>
      <Grid container spacing={4}>
        {projectsData.slice(0, itemsToShow).map((project, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ProjectsCard
              title={project.title}
              category={project.category}
              image={project.image}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button 
          variant="outlined" 
          onClick={handleToggle}
          sx={{ borderRadius: '20px', padding: '10px 20px', borderColor: isExpanded ? '#dc3545' : '#007bff', color: isExpanded ? '#dc3545' : '#007bff', '&:hover': { borderColor: isExpanded ? '#c82333' : '#0056b3', color: isExpanded ? '#c82333' : '#0056b3' } }}
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </Button>
      </Box>
    </Container>
  );
};

export default Projects;
