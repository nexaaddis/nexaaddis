import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Visibility as VisibilityIcon } from "@mui/icons-material";
import Box from "@mui/material/Box";

const ProjectsCard = ({ image, title, category }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: 'transparent',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s, background-color 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          backgroundColor: '#f0f0f0'
        }
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={image}
          sx={{
            transition: 'opacity 0.3s',
            '&:hover': { opacity: 0.8 }
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            display: 'flex',
            flexDirection: 'column',
            gap: 1
          }}
        >
          <IconButton
            sx={{
              color: '#333',
              transition: 'color 0.3s',
              '&:hover': { color: '#00ff00' }
            }}
            aria-label="Live Preview"
          >
            <VisibilityIcon />
          </IconButton>
        </Box>
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {category}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectsCard;
