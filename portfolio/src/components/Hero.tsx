/**
 * Hero Component
 * The main landing section of the portfolio that introduces the developer.
 * Features a prominent display of the developer's name, role, and a call-to-action button.
 */

import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { styled } from '@mui/material/styles';

// Styled components for custom styling
const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)`,
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  padding: theme.spacing(4),
}));

const HeroContent = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto',
}));

const ProfileImageBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '50%',
  width: '400px',
  height: '400px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
}));

const Hero: React.FC = () => {
  return (
    <HeroSection id="home">
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <HeroContent>
              {/* Main heading with name */}
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 'bold',
                  mb: 2,
                  color: theme => theme.palette.primary.light,
                }}
              >
                Mark Matuguina
              </Typography>

              {/* Role/Title */}
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  mb: 4,
                  opacity: 0.9,
                }}
              >
                Full Stack Developer
              </Typography>

              {/* Brief introduction */}
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.8,
                }}
              >
                Crafting beautiful and functional web applications with modern technologies
              </Typography>

              {/* Call-to-action button */}
              <Button
                variant="contained"
                color="secondary"
                size="large"
                href="#contact"
                sx={{
                  fontSize: '1.1rem',
                  padding: '12px 32px',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: 3,
                  },
                }}
              >
                Get in Touch
              </Button>
            </HeroContent>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <ProfileImageBox>
              {/* You can add a profile image here */}
              <Typography variant="h5" color="rgba(255, 255, 255, 0.6)">
                Profile Image
              </Typography>
            </ProfileImageBox>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 8
          }}
        >
          <Button
            href="#about"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'rgba(255, 255, 255, 0.6)',
              '&:hover': {
                backgroundColor: 'transparent',
                color: theme => theme.palette.primary.main
              }
            }}
          >
            <Typography variant="body2" sx={{ mb: 1 }}>
              Scroll Down
            </Typography>
            <ArrowDownwardIcon />
          </Button>
        </Box>
      </Container>
    </HeroSection>
  );
};

export default Hero; 