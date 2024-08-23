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

  const truncatedText = text.length > 100 && !isExpanded ? `${text.substring(0, 100)}...` : text;

  return (
    <StyledCard>
      <CardActionArea onClick={handleToggle}>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt={title}
            sx={{
              filter: "brightness(0.7)",
              transition: "filter 0.3s, transform 0.3s",
              "&:hover": { filter: "brightness(1)", transform: "scale(1.05)" },
            }}
          />
        </Box>
        <CardContent>
          <Typography variant="h6" component="div" fontWeight="bold" color="#f0f0f0">
            {title}
          </Typography>
          <Typography variant="body2" color="#bdbdbd" sx={{ margin: "20px 0" }}>
            {truncatedText}
          </Typography>
          <Typography variant="body2" color="#eee" fontWeight="bold">
            {author}
          </Typography>
          <Chip label={tag} size="small" sx={{ marginTop: "10px", color: "#ffffff", backgroundColor: "rgb(255, 0, 0, .5)" }} />
          {text.length > 100 && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "12px",
                  padding: "8px 16px",
                  borderColor: "#ff5722",
                  color: "#ff5722",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#ff5722",
                    color: "#ffffff",
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
  backgroundColor: "#1c1c1c",
  marginTop: "30px",
  padding: "20px",
  textAlign: "left",
  borderRadius: "15px",
  boxShadow: "inset 0 0 10px #000000",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "inset 0 0 15px #000000",
  },
}));
