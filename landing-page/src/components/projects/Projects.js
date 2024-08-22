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
];

const Projects = () => {
  const [visible, setVisible] = useState(4); // Number of visible projects

  // Handle show more button click
  const handleShowMore = () => {
    setVisible(prev => prev + 4);
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
        {projectsData.slice(0, visible).map((project, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ProjectsCard
              title={project.title}
              category={project.category}
              image={project.image}
            />
          </Grid>
        ))}
      </Grid>
      {visible < projectsData.length && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button 
            variant="outlined" 
            onClick={handleShowMore}
            sx={{ borderRadius: '20px', padding: '10px 20px', borderColor: '#007bff', color: '#007bff', '&:hover': { borderColor: '#0056b3', color: '#0056b3' } }}
          >
            Show More
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Projects;
