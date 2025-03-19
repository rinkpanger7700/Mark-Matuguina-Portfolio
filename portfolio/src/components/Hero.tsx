/**
 * Hero Component
 * The main landing section of the portfolio that introduces the developer.
 * Features a prominent display of the developer's name, role, and a call-to-action button.
 */

import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { styled, keyframes } from '@mui/material/styles';

// Animation keyframes
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Styled components for custom styling
const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  padding: theme.spacing(4),
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(125deg, #000000, #0f0f29, #24243e, #0f172a, #000000)`,
    backgroundSize: '400% 400%',
    animation: `${gradientAnimation} 15s ease infinite`,
    zIndex: -2,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'radial-gradient(circle at 15% 35%, rgba(144, 202, 249, 0.08) 0%, rgba(0, 0, 0, 0) 25%), radial-gradient(circle at 85% 65%, rgba(244, 143, 177, 0.08) 0%, rgba(0, 0, 0, 0) 25%)',
    zIndex: -1,
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
}));

const ProfileImageBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  borderRadius: '50%',
  width: '400px',
  height: '400px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -10,
    left: -10,
    right: -10,
    bottom: -10,
    background: 'linear-gradient(45deg, rgba(144, 202, 249, 0.15), rgba(244, 143, 177, 0.15))',
    filter: 'blur(20px)',
    zIndex: -1,
  },
}));

// Glowing dot animation
const glowAnimation = keyframes`
  0%, 100% {
    opacity: 0.1;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.5;
    transform: scale(1);
  }
`;

// Create a custom star component that doesn't expect a delay prop in its Box properties
const GlowingDot: React.FC<{ top: string; left: string; animationDelay: number }> = ({
  top,
  left,
  animationDelay,
}) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '4px',
        height: '4px',
        borderRadius: '50%',
        backgroundColor: 'primary.main',
        boxShadow: '0 0 8px 2px',
        color: 'primary.main',
        opacity: 0.3,
        top,
        left,
        animation: `${glowAnimation} ${3 + Math.random() * 4}s ease-in-out infinite`,
        animationDelay: `${animationDelay}s`,
      }}
    />
  );
};

const Hero: React.FC = () => {
  // Create an array of random star positions
  const stars = Array.from({ length: 40 }, (_, i) => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
  }));

  // Bouncing animation for scroll arrow
  const bounceAnimation = keyframes`
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  `;

  return (
    <HeroSection id="home">
      {/* Background stars */}
      {stars.map((star, index) => (
        <GlowingDot key={index} top={star.top} left={star.left} animationDelay={star.delay} />
      ))}

      <Container sx={{ position: 'relative', zIndex: 1 }}>
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
                  textShadow: '0 0 20px rgba(144, 202, 249, 0.4)',
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
                  textShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
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
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
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
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                  background: 'linear-gradient(to right, #f48fb1, #ce93d8)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.4)',
                    background: 'linear-gradient(to right, #f06292, #ba68c8)',
                  },
                }}
              >
                Get in Touch
              </Button>
            </HeroContent>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
            <ProfileImageBox>
              {/* Profile image */}
              <Box 
                component="img"
                src="/mark.jpg"
                alt="Mark Matuguina"
                sx={{
                  width: '300px',
                  height: '300px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '4px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)'
                }}
              />
            </ProfileImageBox>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 8,
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
                color: theme => theme.palette.primary.main,
              },
            }}
          >
            <Typography variant="body2" sx={{ mb: 1 }}>
              Scroll Down
            </Typography>
            <ArrowDownwardIcon
              sx={{
                animation: `${bounceAnimation} 2s infinite`,
              }}
            />
          </Button>
        </Box>
      </Container>
    </HeroSection>
  );
};

export default Hero;
