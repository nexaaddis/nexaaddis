import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Box, Typography, Paper } from '@mui/material';
import { workImgThree } from '../../assets';

const ContactLeft = () => {
  return (
    <Paper
      sx={{
        width: '100%',
        lg: '35%',
        p: 3,
        background: 'linear-gradient(45deg, #1e2024, #23272b)',
        boxShadow: 'inset 0 0 10px #000',
        color: '#fff',
        mb: { xs: 4, lg: 0 },
      }}
    >
      <Box
        component="img"
        src={workImgThree}
        alt="Contact"
        sx={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
          borderRadius: 2,
          mb: 2,
        }}
      />
      <Typography variant="h3" fontWeight="bold">
        John Doe
      </Typography>
      <Typography variant="body1" color="gray" mb={2}>
        MERN Stack Developer
      </Typography>
      <Typography variant="body2" color="gray" mb={2}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis ipsam
        autem cumque, accusantium dicta odio.
      </Typography>
      <Typography variant="body2" color="gray" mb={1}>
        Phone: <span style={{ color: 'lightgray' }}>+968 97859628</span>
      </Typography>
      <Typography variant="body2" color="gray" mb={2}>
        Email: <span style={{ color: 'lightgray' }}>noor.jsdivs@gmail.com</span>
      </Typography>
      <Typography variant="h6" mb={2} sx={{ textTransform: 'uppercase' }}>
        Find me in
      </Typography>
      <Box display="flex" gap={2}>
        <Box component="span" sx={{ cursor: 'pointer', color: 'gray' }}>
          <FaFacebookF />
        </Box>
        <Box component="span" sx={{ cursor: 'pointer', color: 'gray' }}>
          <FaTwitter />
        </Box>
        <Box component="span" sx={{ cursor: 'pointer', color: 'gray' }}>
          <FaLinkedinIn />
        </Box>
      </Box>
    </Paper>
  );
};

export default ContactLeft;
