/**
 * Projects Component
 * Displays a showcase of the developer's portfolio projects.
 * Each project card includes an image, description, technologies used, and links to live demo and source code.
 */

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Stack,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

// Styled components for custom styling
const ProjectsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#0f0f0f',
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(255, 255, 255, 0.05)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.3)',
  },
}));

const TechChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(144, 202, 249, 0.12)',
  color: theme.palette.primary.light,
  margin: '4px',
  '&:hover': {
    backgroundColor: 'rgba(144, 202, 249, 0.2)',
  },
}));

const Projects: React.FC = () => {
  // Theme instance
  const theme = useTheme();
  
  // Project data
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
      image: '/placeholder.svg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example/ecommerce',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/placeholder.svg',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material UI'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example/task-manager',
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Material UI, showcasing projects and skills.',
      image: '/placeholder.svg',
      technologies: ['React', 'TypeScript', 'Material UI', 'Vite'],
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example/portfolio',
    },
  ];

  return (
    <ProjectsSection id="projects">
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
            Featured Projects
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto' }}
          >
            A collection of my recent work and personal projects
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <ProjectCard>
                {/* Project Image */}
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />

                {/* Project Content */}
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h3"
                    sx={{ color: theme.palette.primary.main, fontWeight: 600 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    paragraph
                    sx={{ mb: 3 }}
                  >
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {project.technologies.map((tech, techIndex) => (
                      <TechChip
                        key={techIndex}
                        label={tech}
                        size="small"
                      />
                    ))}
                  </Stack>
                </CardContent>

                {/* Project Actions */}
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    size="small"
                    startIcon={<GitHubIcon />}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      color: theme.palette.text.secondary,
                      '&:hover': { color: theme.palette.primary.main }
                    }}
                  >
                    Source Code
                  </Button>
                  <Button
                    size="small"
                    startIcon={<LaunchIcon />}
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      color: theme.palette.primary.main,
                      '&:hover': { 
                        color: theme.palette.primary.light,
                        backgroundColor: 'rgba(144, 202, 249, 0.08)'
                      }
                    }}
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 