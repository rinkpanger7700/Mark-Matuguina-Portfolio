/**
 * Skills Component
 * Displays the developer's technical skills and expertise in various categories.
 * Features a grid layout with skill cards showing proficiency levels and descriptions.
 */

import React from 'react';
import { Box, Container, Typography, Grid, Paper, LinearProgress, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components for custom styling
const SkillsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#0a0a0a',
}));

const SkillCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
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

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  '.MuiLinearProgress-bar': {
    borderRadius: 4,
    backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
  },
}));

const Skills: React.FC = () => {
  // Theme instance
  const theme = useTheme();
  
  // Skill categories with their respective skills
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Material UI', level: 80 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQL', level: 70 },
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'CI/CD', level: 75 },
      ],
    },
  ];

  return (
    <SkillsSection id="skills">
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
            Skills & Expertise
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto' }}
          >
            A comprehensive overview of my technical skills and proficiency levels
          </Typography>
        </Box>

        {/* Skills Grid */}
        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={4} key={index}>
              <SkillCard elevation={3}>
                <Typography 
                  variant="h5" 
                  component="h3" 
                  gutterBottom
                  sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
                >
                  {category.title}
                </Typography>
                <Box sx={{ mt: 3 }}>
                  {category.skills.map((skill, skillIndex) => (
                    <Box key={skillIndex} sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {skill.name}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ color: theme.palette.primary.light }}
                        >
                          {skill.level}%
                        </Typography>
                      </Box>
                      <StyledLinearProgress
                        variant="determinate"
                        value={skill.level}
                      />
                    </Box>
                  ))}
                </Box>
              </SkillCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SkillsSection>
  );
};

export default Skills; 