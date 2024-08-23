import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Collapse from "@mui/material/Collapse";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";
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

export default function Blog() {
  const [expanded, setExpanded] = useState(false);
  const [visibleBlogs, setVisibleBlogs] = useState(3);

  const blogData = [
    {
      tag: "Company News",
      title: "New Office Opened",
      text: "We are excited to announce the opening of our new office in San Francisco.",
      author: "John Doe, 2 days ago",
      image: workImgEight,
    },
    {
      tag: "Company News",
      title: "New Office Opened",
      text: "We are excited to announce the opening of our new office in San Francisco.",
      author: "John Doe, 2 days ago",
      image: workImgSeven,
    },
    {
      tag: "Product Update",
      title: "Version 2.0 Released",
      text: "Our latest version comes with several new features and improvements.",
      author: "Jane Smith, 1 week ago",
      image: workImgFive,
    },
    {
      tag: "Company News",
      title: "New Office Opened",
      text: "We are excited to announce the opening of our new office in San Francisco.",
      author: "John Doe, 2 days ago",
      image: workImgSix,
    },
    {
      tag: "Product Update",
      title: "Version 2.0 Released",
      text: "Our latest version comes with several new features and improvements.",
      author: "Jane Smith, 1 week ago",
      image: workImgTwo,
    },
    {
      tag: "Company News",
      title: "New Office Opened",
      text: "We are excited to announce the opening of our new office in San Francisco.",
      author: "John Doe, 2 days ago",
      image: workImgThree,
    },
    {
      tag: "Product Update",
      title: "Version 2.0 Released",
      text: "Our latest version comes with several new features and improvements.",
      author: "Jane Smith, 1 week ago",
      image: workImgFour,
    },
    // Add more blog entries as needed
  ];

  const handleLoadMore = () => {
    setExpanded(!expanded);
    setVisibleBlogs(expanded ? 3 : blogData.length);
  };

  return (
    <Container  id="blog" sx={{ width: "100%", padding: '5rem 0' }}>
      <Box
        sx={{
          backgroundColor: "#121212",
          color: "#ffffff",
          boxShadow: "inset 0 0 10px #000000",
          borderRadius: "20px",

        }}
      >
        <Box sx={{ mb: 4, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            align="left"
            sx={{ mb: 5, fontWeight: '800', color: '#f0f0f0' }}
          >
            Our Blog Stories
          </Typography>
          <Typography variant="body1" mt={2} color="#bdbdbd">
            Discover the latest updates and insights from our team.
            <br />
            Stay tuned for exciting news and product launches.
          </Typography>
        </Box>
        <Grid container spacing={3} justifyContent="center">
          {blogData.slice(0, visibleBlogs).map((blog, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Collapse in={true} timeout={500}>
                <BlogBox
                  tag={blog.tag}
                  title={blog.title}
                  text={blog.text}
                  author={blog.author}
                  image={blog.image}
                />
              </Collapse>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Button
            variant="outlined"
            onClick={handleLoadMore}
            sx={{
              borderRadius: '12px',
              padding: '8px 16px',
              borderColor: expanded ? '#dc3545' : '#007bff',
              color: expanded ? '#dc3545' : '#007bff',
              '&:hover': {
                borderColor: expanded ? '#c82333' : '#0056b3',
                color: expanded ? '#c82333' : '#0056b3',
                boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.6)'  // Add inset shadow on hover
              },
              backgroundColor: '#2a2a2a',  // Button background for contrast
              '&:hover': {
                backgroundColor: '#333333'  // Darker on hover
              }
            }}
          >
            {expanded ? "Show Less" : "Load More"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
