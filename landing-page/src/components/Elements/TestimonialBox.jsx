import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

export default function TestimonialBox({ text, author, imgSrc }) {
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: "300px",
        minHeight: "250px",
        padding: "30px",
        marginTop: "30px",
        marginBottom: "30px",
        position: "relative",
        backgroundColor: "#eee",
        borderRadius: "12px",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        color: "var(--bg-hover-color)",
        "@media (max-width: 600px)": {
          padding: "20px",
          marginTop: "20px",
          minHeight: "220px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          marginBottom: "20px",
        }}
      >
        <Avatar
          alt={author}
          src={imgSrc}
          sx={{
            width: "80px",
            height: "80px",
            marginRight: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            "@media (max-width: 600px)": {
              width: "60px",
              height: "60px",
            },
          }}
        />
        <Typography
          variant="subtitle2"
          sx={{
            color: "var(--hover-primary-color)",
            alignSelf: "center",
            fontSize: "1rem",
            "@media (max-width: 600px)": {
              fontSize: "0.9rem",
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
            "@media (max-width: 600px)": {
              fontSize: "0.9rem",
            },
          }}
        >
          {text}
        </Typography>
      </Box>
    </Box>
  );
}
