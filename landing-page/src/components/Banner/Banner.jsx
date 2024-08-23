import React from 'react';
import { Box } from '@mui/material';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import ClientSlider from '../Elements/ClientSlider';
import { bg1 } from '../../assets';

const Banner = () => {
  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
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
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `url(${bg1}) no-repeat center center/cover`,
          filter: 'brightness(0.8)',
          zIndex: -1,
        }}
      />

      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
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
