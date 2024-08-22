import React from "react";
import { Grid, Container, Typography } from "@mui/material";
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

const Projects = () => {
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
        <Grid item xs={12} sm={6} md={3}>
          <ProjectsCard
            title="Blog Website"
            category="Website"
            image={workImgThree}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProjectsCard
            title="Business Card Design"
            category="Design"
            image={workImgOne}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProjectsCard
            title="Infinity Logo"
            category="Logo"
            image={workImgTwo}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProjectsCard
            title="Mobile Application"
            category="Shopping"
            image={workImgFive}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProjectsCard
            title="Responsive Website"
            category="E-commerce"
            image={workImgFour}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProjectsCard
            title="Graphic Design"
            category="Design"
            image={workImgSix}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProjectsCard
            title="Ideas & Blog"
            category="Website"
            image={workImgEight}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ProjectsCard
            title="ZOSS Logo"
            category="Logo"
            image={workImgSeven}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
