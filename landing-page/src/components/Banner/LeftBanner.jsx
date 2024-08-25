import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Box, Typography, Button } from '@mui/material';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Boost Your Online Presence.",
      "Elevate Your Brand Identity.",
      "Enhance Customer Engagement.",
      "Maximize Efficiency and Growth.",
      "Achieve Seamless Integration.",
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
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 2,
        padding: { xs: 2, md: 4 },
        color: 'var(--text-color)',
        textAlign: 'left',
        mt: 2,
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: { xs: '0.75rem', sm: '0.85rem', md: '1rem' },
          color: 'var(--text-muted-color)',
          textTransform: 'uppercase',
          letterSpacing: 1.5,
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        NEXA ADDIS
      </Typography>

      <Typography
        variant="h3"
        sx={{
          fontWeight: '900',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '2.8rem', lg: '3.1rem' },
          color: 'var(--text-color)',
          lineHeight: 1.2,
          fontFamily: 'Roboto, sans-serif',
          position: 'relative',
          '&:before': {
            content: "''",
            position: 'absolute',
            width: '50%',
            height: '4px',
            bottom: '-10px',
            left: '0',
            backgroundColor: 'var(--primary-color)',
          },
        }}
      >
        Shaping the Future with{' '}<br></br>
        <span style={{ color: 'var(--text-muted-color)' }}>Innovative Solutions</span>
      </Typography>

      <Box
        sx={{
          textAlign: 'left',
          display: 'inline-block',
          position: 'relative',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          width: '100%',
          maxWidth: '100%',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: '700',
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem', lg: '2.5rem' },
            color: 'var(--primary-color)',
            lineHeight: 1.2,
            display: 'inline',
            fontFamily: 'Courier New, monospace',
          }}
        >
          {text}
        </Typography>
        <Cursor
          cursorStyle={<strong style={{ fontSize: '2rem', fontWeight: '1000', color: 'var(--primary-color)' }}>|</strong>}
        />
      </Box>

      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.1rem' },
          color: 'var(--text-subtitle-color)',
          lineHeight: 1.6,
          maxWidth: '600px',
          textAlign: 'left',
          mt: '2rem',
          fontFamily: 'Verdana, sans-serif',
        }}
      >
        Delivering top-tier software and design services in Ethiopia.
      </Typography>

      {/* Unique Button */}
      <Button
        sx={{
          mt: '1rem',
          borderRadius: '20px',
          backgroundColor: 'var(--primary-color)',
          outline: 'none',
          width: { xs: '100px', sm: '150px', lg: '170px' },
          padding: { xs: '6px 12px', sm: '8px 16px', lg: '8px auto' },
          fontWeight: 'bold',
          fontSize: { xs: '0.8rem', sm: '0.9rem', lg: '1.1rem' },
          color: '#ffffff',
          textTransform: 'capitalize',
          "&:hover": {
            backgroundColor: 'var(--bg-muted-color)',
            color: 'var(--accent-color)',
          }
        }}
      >
        Get In Touch
      </Button>

    </Box>
  );
};

export default LeftBanner;
