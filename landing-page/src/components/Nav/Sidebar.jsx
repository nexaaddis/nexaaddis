import React from "react";
import { Link } from "react-scroll";
import { Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LogoIcon from "../../assets/svg/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Box
      sx={{
        width: { xs: '100%', sm: '400px' },
        height: '100vh',
        position: 'fixed',
        top: 0,
        right: sidebarOpen ? 0 : '-100%',
        backgroundColor: '#1c2229',
        color: '#f1f1f1',
        display: 'flex',
        flexDirection: 'column',
        padding: 3,
        transition: 'right 0.3s ease',
        overflowY: 'auto',
        zIndex: 10002,
        '@media (max-width: 400px)': {
          width: '100%',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 3,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LogoIcon />
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
              ml: 2,
              display: { xs: 'block', sm: 'none' },
            }}
          >
            NexaAddis
          </Typography>
        </Box>
        <IconButton
          onClick={() => toggleSidebar(!sidebarOpen)}
          sx={{ color: '#f1f1f1' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexGrow: 1,
          justifyContent: 'center',
          mb: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {['Home', 'Services', 'Projects', 'Blog', 'Testimonial'].map((section) => (
            <Typography
              key={section}
              component={Link}
              to={section}
              spy={true}
              smooth={true}
              offset={-60}
              onClick={() => toggleSidebar(!sidebarOpen)}
              sx={{
                color: '#f1f1f1',
                fontWeight: '600',
                fontSize: { xs: '1rem', sm: '1.1rem' },
                mb: 2,
                p: '10px 20px',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#fb8122',
                },
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          // flexDirection: 'row',
          // flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px',
        }}
      >
        <Typography
          component="a"
          href="/"
          sx={{
            color: '#f1f1f1',
            fontWeight: '600',
            fontSize: { xs: '1rem', sm: '1.1rem' },
            mb: 2,
            textDecoration: 'none',
            margin: '0 10px',
            borderRadius: '8px',
            transition: 'color 0.3s ease',
            '&:hover': {
              color: '#fb8122',
            },
          }}
        >
          Log in
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#fb8122',
            color: '#ffffff',
            borderRadius: '12px',
            padding: '5px 10px',
            fontWeight: '600',
            fontSize: { xs: '0.7rem', sm: '.9rem' },
            transition: 'color 0.5s ease backgroundColor 0.5s ease',
            '&:hover': {
              backgroundColor: 'transparent',
              color: '#fb8122',
            },
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
}
