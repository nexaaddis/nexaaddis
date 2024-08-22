import React from "react";
import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import HeaderImage from "../../assets/img/header-img.png";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      id="home"
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        pt: 10,
        minHeight: '840px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          flex: 1,
          textAlign: isMobile ? 'center' : 'left',
          mb: isMobile ? 4 : 0,
          px: 2,
        }}
      >
        <Typography variant="h1" sx={{ fontWeight: 800, fontSize: '3rem' }}>
          We are Digital Agency.
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 2, mb: 4, lineHeight: 1.6, maxWidth: '470px', mx: 'auto' }}
        >
          We specialize in delivering innovative and efficient software solutions designed to meet diverse business and user needs. Our expertise spans web development, mobile applications, and graphic design, ensuring high-quality outcomes that combine technical excellence with a superior user experience.
          <br />
          <br />
          Each project showcases our commitment to excellence, blending cutting-edge technology with creative design to achieve impactful and user-centric results.
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Button variant="contained" color="primary" size="large">
            Get Started
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src={HeaderImage}
          alt="office"
          style={{
            width: isMobile ? '80%' : 'auto',
            height: isMobile ? 'auto' : 'auto',
            maxWidth: '100%',
            position: 'relative',
            zIndex: 9,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            left: isMobile ? 20 : 0,
            bottom: isMobile ? -50 : 50,
            maxWidth: '330px',
            p: 3,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            borderRadius: '8px',
            zIndex: 99,
            textAlign: 'center',
          }}
        >
          <Box sx={{ position: 'absolute', left: -20, top: -10 }}>
            <QuotesIcon />
          </Box>
          <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 1 }}>
            “Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.”
          </Typography>
          <Typography variant="body2" sx={{ color: 'orange' }}>
            Ralph Waldo Emerson
          </Typography>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            right: isMobile ? 100 : -100,
            bottom: 100,
            zIndex: 2,
            display: isMobile ? 'none' : 'block',
          }}
        >
          <Dots />
        </Box>
        {!isMobile && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '30%',
              height: '700px',
              backgroundColor: 'lightgray',
              zIndex: 0,
            }}
          />
        )}
      </Box>
    </Box>
  );
}
