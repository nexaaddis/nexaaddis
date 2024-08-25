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
        width: '100%',
        backgroundColor: '#ffffff', // White background
        border: '1px solid #ddd', // Light gray border
        borderRadius: '8px',
        transition: 'transform 0.3s, box-shadow 0.3s',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for contrast
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Darker shadow on hover
          backgroundColor: '#f7f7f7', // Slightly darker on hover
        },
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
            '&:hover': { opacity: 0.8 },
            objectFit: 'cover',
            height: { xs: '140px', sm: '180px', md: '200px' }
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
              color: '#fb8122', // Icon color for theme consistency
              transition: 'color 0.3s',
              '&:hover': { color: '#ff6347' } // Different hover color for better UX
            }}
            aria-label="Live Preview"
          >
            <VisibilityIcon />
          </IconButton>
        </Box>
      </Box>
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: 'bold', color: '#333333' }} // Dark text for contrast
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: '#666666' }} // Gray text for secondary info
        >
          {category}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectsCard;
