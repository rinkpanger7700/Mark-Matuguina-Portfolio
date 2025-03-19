/**
 * About Component
 * A section that provides detailed information about the developer's background,
 * experience, and professional journey. Includes a brief bio and key highlights.
 */

import React from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import DevicesIcon from '@mui/icons-material/Devices';
import StorageIcon from '@mui/icons-material/Storage';
import { styled } from '@mui/material/styles';

// Styled components for custom styling
const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '200px',
    background: 'linear-gradient(180deg, #0f0f0f 0%, transparent 100%)',
    zIndex: 1,
  },
}));

const ContentWrapper = styled(Box)({
  position: 'relative',
  zIndex: 2,
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(255, 255, 255, 0.05)',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 12px 28px rgba(0, 0, 0, 0.3)',
  },
}));

const About: React.FC = () => {
  // Theme instance
  const theme = useTheme();

  // Key highlights about the developer
  const highlights = [
    {
      title: 'Experience',
      description: '5+ years of experience in full-stack development, working with various technologies and frameworks.'
    },
    {
      title: 'Education',
      description: 'Bachelor\'s degree in Computer Science with a focus on software engineering and web development.'
    },
    {
      title: 'Passion',
      description: 'Passionate about creating elegant solutions to complex problems and building user-friendly applications.'
    }
  ];

  return (
    <AboutSection id="about">
      <ContentWrapper>
        <Container>
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: theme.palette.primary.light,
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: '800px', mx: 'auto' }}
            >
              A dedicated full-stack developer with a passion for creating innovative web solutions
            </Typography>
          </Box>

          {/* Main Content */}
          <Grid container spacing={4}>
            {/* Bio Section */}
            <Grid item xs={12} md={6}>
              <StyledPaper elevation={3}>
                <Typography 
                  variant="h5" 
                  component="h3" 
                  gutterBottom
                  sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
                >
                  My Journey
                </Typography>
                <Typography paragraph sx={{ color: theme.palette.text.secondary }}>
                  I started my journey in web development during my college years, where I discovered
                  my passion for creating digital experiences. Since then, I've worked on various
                  projects ranging from small business websites to complex enterprise applications.
                </Typography>
                <Typography paragraph sx={{ color: theme.palette.text.secondary }}>
                  My approach to development combines technical expertise with a keen eye for design
                  and user experience. I believe in writing clean, maintainable code and staying
                  up-to-date with the latest technologies and best practices.
                </Typography>
              </StyledPaper>
            </Grid>

            {/* Highlights Section */}
            <Grid item xs={12} md={6}>
              <Grid container spacing={3}>
                {highlights.map((highlight, index) => (
                  <Grid item xs={12} key={index}>
                    <StyledPaper elevation={2}>
                      <Typography 
                        variant="h6" 
                        component="h4" 
                        gutterBottom
                        sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
                      >
                        {highlight.title}
                      </Typography>
                      <Typography sx={{ color: theme.palette.text.secondary }}>
                        {highlight.description}
                      </Typography>
                    </StyledPaper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </ContentWrapper>
    </AboutSection>
  );
};

export default About; 