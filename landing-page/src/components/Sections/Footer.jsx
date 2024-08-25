import React from "react";
import { Box, Container, Typography, Grid, Link, Divider, IconButton } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// Assets
import LogoImg from "../../assets/svg/Logo";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: '#1c2229',
        color: '#e1e2e2',
        py: { xs: 4, sm: 6, md: 8 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Link
              href="#home"
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'white',
                scrollBehavior: 'smooth',
              }}
            >
              <LogoImg />
              <Typography
                variant="h6"
                sx={{ ml: 1, fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.2rem' } }}
              >
                NexaAddis
              </Typography>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.2rem' } }}>
              Company
            </Typography>
            <Link
              href="/about"
              sx={{
                textDecoration: 'none',
                color: 'white',
                '&:hover': {
                  color: '#fb8122',
                },
                scrollBehavior: 'smooth',
              }}
            >
              <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: '0.875rem', sm: '.8rem' } }}>About</Typography>
            </Link>
            <Link
              href="/contact"
              sx={{
                textDecoration: 'none',
                color: 'white',
                '&:hover': {
                  color: '#fb8122',
                },
                scrollBehavior: 'smooth',
              }}
            >
              <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: '0.875rem', sm: '.8rem' } }}>Contact Us</Typography>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.2rem' } }}>
              What We Do
            </Typography>
            <Link
              href="/services/mobile-development"
              sx={{
                textDecoration: 'none',
                color: 'white',
                '&:hover': {
                  color: '#fb8122',
                },
                scrollBehavior: 'smooth',
              }}
            >
              <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: '0.875rem', sm: '.8rem' } }}>Mobile Development</Typography>
            </Link>
            <Link
              href="/services/website-development"
              sx={{
                textDecoration: 'none',
                color: 'white',
                '&:hover': {
                  color: '#fb8122',
                },
                scrollBehavior: 'smooth',
              }}
            >
              <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: '0.875rem', sm: '.8rem' } }}>Website Development</Typography>
            </Link>
            <Link
              href="/services/designing"
              sx={{
                textDecoration: 'none',
                color: 'white',
                '&:hover': {
                  color: '#fb8122',
                },
                scrollBehavior: 'smooth',
              }}
            >
              <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: '0.875rem', sm: '.8rem' } }}>Designing</Typography>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.2rem' } }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: '0.875rem', sm: '.8rem' } }}>Phone: (+251) 953-431-572</Typography>
            <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: '0.875rem', sm: '.8rem' } }}>Email: nexaaddis@gmail.com</Typography>
            <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: '0.875rem', sm: '.8rem' } }}>Address: Addis Ababa, Ethiopia</Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'grey.800' }} />

        <Box
          sx={{
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 1,
            mt: 4,
          }}
        >
          <Typography variant="body2">
            © {getCurrentYear()} NexaAddis, LLC
          </Typography>
          <Typography variant="body2">
            <Link
              href="/privacy-policy"
              sx={{
                textDecoration: 'none',
                color: '#b0b0b0',
                fontSize: { xs: '0.9rem', sm: '.9rem' },
                '&:hover': {
                  color: '#ca6314',
                },
                scrollBehavior: 'smooth',
              }}
            >
              Privacy Policy
            </Link>
          </Typography>
        </Box>

        {/* <IconButton
          href="#home"
          sx={{
            position: 'absolute',
            bottom: { xs: 10, sm: 20 },
            right: { xs: 10, sm: 20 },
            color: 'white',
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': {
              bgcolor: '#fb8122',
              color: '#fff',
            },
            scrollBehavior: 'smooth',
          }}
        >
          <ArrowUpwardIcon />
        </IconButton> */}
      </Container>
    </Box>
  );
}
