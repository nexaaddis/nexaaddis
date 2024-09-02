import React from "react";
import { Box, Container, Typography, Grid, Link, Divider } from "@mui/material";
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
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
        p: { xs: '4 0', sm: '5 0', md: "8 0 4 0" },
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
              <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: '0.875rem', sm: '.8rem' } }}>Contact</Typography>
            </Link>
            <Link
              href="/#blog"
              sx={{
                textDecoration: 'none',
                color: 'white',
                '&:hover': {
                  color: '#fb8122',
                },
                scrollBehavior: 'smooth',
              }}
            >
              <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: '0.875rem', sm: '.8rem' } }}>Blogs</Typography>
            </Link>

            <Link
              href="/#testimonial"
              sx={{
                textDecoration: 'none',
                color: 'white',
                '&:hover': {
                  color: '#fb8122',
                },
                scrollBehavior: 'smooth',
              }}
            >
              <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: '0.875rem', sm: '.8rem' } }}>Testimonial</Typography>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.2rem' } }}>
              Our Services
            </Typography>

            <Link
              href="/websitedevelopment"
              sx={{
                textDecoration: 'none',
                color: 'white',
                '&:hover': {
                  color: '#fb8122',
                },
                scrollBehavior: 'smooth',
              }}
            >
              <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: '0.875rem', sm: '.8rem' } }}>Website Design & Development</Typography>
            </Link>

            <Link
              href="/appdevelopment"
              sx={{
                textDecoration: 'none',
                color: 'white',
                '&:hover': {
                  color: '#fb8122',
                },
                scrollBehavior: 'smooth',
              }}
            >
              <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: '0.875rem', sm: '.8rem' } }}>Mobile Appk Design & Development</Typography>
            </Link>

            <Link
              href="/logodesigning"
              sx={{
                textDecoration: 'none',
                color: 'white',
                '&:hover': {
                  color: '#fb8122',
                },
                scrollBehavior: 'smooth',
              }}
            >
              <Typography variant="body2" sx={{ mb: 1, fontSize: { xs: '0.875rem', sm: '.8rem' } }}>Logo Designing</Typography>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.2rem' } }}>
              Find Us
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
            p: "1rem 0",
          }}
        >
          <Typography variant="body2">
            © {getCurrentYear()} NexaAddis, LLC
          </Typography>
          <Typography variant="body2">
            <Link
              href="/privacy"
              sx={{
                textDecoration: 'none',
                color: '#ca6314',
                fontSize: { xs: '0.9rem', sm: '.9rem' },
                '&:hover': {
                  color: '#cb6314',
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
