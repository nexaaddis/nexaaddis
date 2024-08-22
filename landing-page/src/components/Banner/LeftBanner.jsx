import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Box, Typography, Button } from '@mui/material';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Building Innovative Websites.",
      "Designing Engaging UI / UX.",
      "Enhancing Your Online Presence.",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 25,
    delaySpeed: 2500,
  });

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 4,
        padding: { xs: 2, md: 4 },
        color: 'white',
        textAlign: 'center',
        mt: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Small Text */}
        <Typography
          variant="subtitle2"
          sx={{
            fontSize: { xs: '0.75rem', sm: '0.85rem', md: '1rem' },
            color: 'grey', // Cool color
            textTransform: 'capitalize',
            letterSpacing: 1.5,
          }}
        >
          NEXA ADDIS
        </Typography>

        {/* Main Heading */}
        <Typography
          variant="h3"
          sx={{
            fontWeight: '700',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.6rem' },
            color: '#ffffff',
            lineHeight: 1,
            // letterSpacing: 1,
          }}
        >
          Welcome to{' '}
          <span style={{ color: '#f76c6c' }}>Innovative Solutions</span>
        </Typography>

        {/* Typewriting Text */}
        <Box
          sx={{
            textAlign: 'center',
            display: 'inline-block',
            position: 'relative',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            width: '99%', // Adjust width to fit text
            maxWidth: '99%', // Ensures text doesn't overflow
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: '700',
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' },
              color: '#ffd700', // Cool color for typewriter effect
              lineHeight: 1.2,
              display: 'inline',
            }}
          >
            {text}
          </Typography>
          <Cursor
            cursorStyle={<strong style={{ fontSize: '2.5rem', fontWeight: '1000', color: '#ffd700' }}>|</strong>}
          />
        </Box>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' },
            color: '#e0e0e0', // Softer text color for readability
            lineHeight: 1.6,
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          At Innovative Solutions, we specialize in creating exceptional digital experiences. Our dedicated team designs and develops cutting-edge websites that captivate audiences and drive business success.
        </Typography>

        {/* Unique Button */}
        <Button
          variant="contained"
          sx={{
            mt: 3,
            px: 3,
            py: 1.5,
            borderRadius: '50px',
            backgroundColor: '#f76c6c',
            color: '#ffffff',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: 1,
            boxShadow: 3,
            '&:hover': {
              backgroundColor: '#e74c3c',
              boxShadow: 6,
            },
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default LeftBanner;
