import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
// Assets
import QuoteIcon from "../../assets/svg/Quotes";

export default function TestimonialBox({ text, author, imgSrc }) {
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: "300px",
        minHeight: "200px",
        padding: "20px",
        marginTop: "30px",
        marginBottom: "30px",
        position: "relative",
        background: "linear-gradient(135deg, #333, #111)",
        borderRadius: "12px",
        boxShadow: "inset 0 0 15px rgba(0, 0, 0, 0.7), 0 8px 16px rgba(0, 0, 0, 0.6), 0 0 10px rgba(255, 165, 0, 0.8)", // Glowing border contrast
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "#bdbdbd",
        "@media (max-width: 600px)": {
          padding: "15px",
          marginTop: "20px",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-35px",
          left: "-17px",
          color: "#FFA500",
          fontSize: "2.5rem",
          "@media (max-width: 600px)": {
            fontSize: "3rem",
          },
        }}
      >
        <QuoteIcon />
      </Box>

      <Box sx={{ zIndex: 1, paddingBottom: "1.5rem" }}>
        <Typography
          variant="body1"
          sx={{
            paddingBottom: "20px",
            color: "#bdbdbd",
            fontSize: "0.9rem",
            "@media (max-width: 600px)": {
              marginTop: "20px",
              fontSize: "0.9rem",
            },
          }}
        >
          {text}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: "#FFA500",
            alignSelf: "flex-end",
            fontSize: "0.85rem",
            "@media (max-width: 600px)": {
              fontSize: "0.75rem",
            },
          }}
        >
          <em>{author}</em>
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          "@media (max-width: 600px)": {
            bottom: "5px",
            right: "5px",
          },
        }}
      >
        <Avatar
          alt={author}
          src={imgSrc}
          sx={{
            width: "60px",
            height: "60px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            "@media (max-width: 600px)": {
              width: "50px",
              height: "50px",
            },
          }}
        />
      </Box>
    </Box>
  );
}
