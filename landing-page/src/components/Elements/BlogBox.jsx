import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export default function BlogBox({ tag, title, text, author, image }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => setIsExpanded(!isExpanded);

  const truncatedText =
    text.length > 100 && !isExpanded ? `${text.substring(0, 100)}...` : text;

  return (
    <StyledCard>
      <CardActionArea onClick={handleToggle}>
        <Box sx={{ position: "relative", overflow: "hidden" }}>
          <CardMedia
            component="img"
            image={image}
            alt={title}
            sx={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
        </Box>
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            fontWeight="bold"
            sx={{ color: "#1c2229" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ margin: "20px 0", color: "#3a3f45" }}
          >
            {truncatedText}
          </Typography>
          <Typography variant="body2" sx={{ color: "#3a3f45" }} fontWeight="bold">
            {author}
          </Typography>
          <Chip
            label={tag}
            size="small"
            sx={{
              marginTop: "10px",
              color: "#ffffff",
              backgroundColor: "#ca6314",
            }}
          />
          {text.length > 100 && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "12px",
                  padding: "8px 16px",
                  backgroundColor: "#fb8122",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#fb8122",
                  },
                }}
              >
                {isExpanded ? "Show Less" : "Show More"}
              </Button>
            </Box>
          )}
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}

const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#ffffff",
  marginTop: "30px",
  padding: "0px",
  textAlign: "left",
  borderRadius: "15px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease-in-out",
  // Removed hover effect for a more professional look
  [theme.breakpoints.up("sm")]: {
    padding: "0px",
  },
}));
