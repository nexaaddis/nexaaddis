import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

export default function TestimonialBox({ text, author, imgSrc }) {
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: "250px",
        minHeight: "300px",
        padding: "30px",
        marginTop: "20px",
        marginBottom: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        color: "var(--bg-hover-color)",
        "@media (max-width: 600px)": {
          padding: "10px",
          marginTop: "15px",
          minHeight: "300px",
        },
        "@media (min-width: 600px) and (max-width: 960px)": {
          marginTop: "25px",
          minHeight: "240px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center", // Align Avatar and text in the center
          marginBottom: "15px", // Reduce space for a lighter feel
        }}
      >
        <Avatar
          alt={author}
          src={imgSrc}
          sx={{
            width: "70px",
            height: "70px",
            marginRight: "15px", // Slightly reduce the space
            boxShadow: "0 3px 6px rgba(0, 0, 0, 0.2)", // Lighter shadow
            "@media (max-width: 600px)": {
              width: "60px",
              height: "60px",
            },
            "@media (min-width: 600px) and (max-width: 960px)": {
              width: "65px",
              height: "65px",
            },
          }}
        />
        <Typography
          variant="subtitle2"
          sx={{
            color: "var(--hover-primary-color)",
            fontSize: "1rem",
            "@media (max-width: 600px)": {
              fontSize: "0.9rem",
            },
            "@media (min-width: 600px) and (max-width: 960px)": {
              fontSize: "0.95rem",
            },
          }}
        >
          <em>{author}</em>
        </Typography>
      </Box>

      <Box sx={{ zIndex: 1 }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1rem",
            lineHeight: 1.5, // Improve readability
            color: "#555", // Lighter text color for readability
            "@media (max-width: 600px)": {
              fontSize: "0.9rem",
            },
            "@media (min-width: 600px) and (max-width: 960px)": {
              fontSize: "0.95rem",
            },
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
