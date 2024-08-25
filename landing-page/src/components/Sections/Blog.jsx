import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Collapse from "@mui/material/Collapse";
// Components
import BlogBox from "../Elements/BlogBox";
import {
  workImgTwo,
  workImgOne,
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
      image: workImgOne,
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
    <div style={{ margin: "0 !important" }} activeClass="active">
      <Container id="blog" sx={{ width: "100%", padding: '5rem 0', bgcolor: '#fff' }}>
        <Box
          sx={{
            px: 2,
            color: "#ffffff",
            borderRadius: "20px",
          }}
        >
          <Box sx={{ mb: 4, textAlign: { xs: "center", md: "left" } }}>
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
              Blogs
            </Typography>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              sx={{ fontWeight: '800', color: '#1c2229' }}
            >
              Our Blog Stories
            </Typography>
            <Typography variant="body1" mt={1} color="#3a3f45">
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
                borderRadius: "12px",
                padding: "8px 16px",
                borderColor: expanded ? "var(--hover-primary-color)" : "var(--primary-color)",
                color: expanded ? "var(--hover-primary-color)" : "var(--primary-color)",
                "&:hover": {
                  borderColor: "var(--hover-primary-color)",
                },
              }}
            >
              {expanded ? "Show Less" : "Show More"}
            </Button>

          </Box>
        </Box>
      </Container>
    </div>
  );
}
