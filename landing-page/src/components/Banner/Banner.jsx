import React from 'react';
import { Box } from '@mui/material';
import Design from './Design'; // Import the Design component
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import { bg1 } from '../../assets';

const Banner = () => {
  return (
    <Box
      id="home"
      sx={{
        position: 'relative', // Position relative for overlay effects
        width: '100%',
        pt: 10,
        pb: 20,
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        gap: { xs: 2, lg: 0 },
        alignItems: 'center',
        borderBottom: '1px solid',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5))', // Background gradient for overlay effect
        borderColor: 'black',
        fontFamily: 'titleFont',
        overflow: 'hidden', // Prevent overflow outside the box
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `url(${bg1}) no-repeat center center/cover`, // Background image
          filter: 'brightness(0.5)', // Darken the background image
          zIndex: 1, // Background stays behind all content
        }}
      />

      {/* <Design /> */}

      <Box
        sx={{
          position: 'relative',
          zIndex: 1, // Content stays above the background
          display: 'flex',
          width: '100%',
          height: '100%',
        }}
      >
        <LeftBanner />
        {/* Uncomment this line if you want to include the RightBanner component */}
        {/* <RightBanner /> */}
      </Box>
    </Box>
  );
};

export default Banner;
