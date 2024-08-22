import React from 'react';
import { Box } from '@mui/material';
import Design from './Design'; // Import the Design component
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const Banner = () => {
  return (
    <Box
      id="home"
      sx={{
        position: 'relative', // Ensure positioning is relative for overlay effect
        width: '100%',
        pt: 10,
        pb: 20,
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        gap: { xs: 2, lg: 0 },
        alignItems: 'center',
        borderBottom: '1px solid',
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5))',
        borderColor: 'black',
        fontFamily: 'titleFont',
        overflow: 'hidden', // Ensure no overflow outside the Box
      }}
    >
      {/* <Design /> */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1, // Ensure content is above the background
          display: 'flex',
          width: '100%',
          height: '100%',
        }}
      >
        <LeftBanner />
        {/* <RightBanner /> */}
      </Box>
    </Box>
  );
};

export default Banner;
