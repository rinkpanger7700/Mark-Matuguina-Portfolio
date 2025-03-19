/**
 * Footer Component
 * The footer section of the portfolio website that includes copyright information,
 * social media links, and quick navigation links.
 */

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Link,
  Divider,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

// Styled components for custom styling
const FooterSection = styled(Box)(({ theme }) => ({
  backgroundColor: '#050505',
  padding: theme.spacing(6, 0),
  marginTop: 'auto',
  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
}));

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  
  // Social media links
  const socialLinks = [
    {
      icon: <GitHubIcon />,
      label: 'GitHub',
      url: 'https://github.com',
    },
    {
      icon: <LinkedInIcon />,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
    },
    {
      icon: <TwitterIcon />,
      label: 'Twitter',
      url: 'https://twitter.com',
    },
    {
      icon: <InstagramIcon />,
      label: 'Instagram',
      url: 'https://instagram.com',
    },
  ];

  // Quick navigation links
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <Box component="footer">
      <FooterSection>
        <Container>
          <Grid container spacing={4}>
            {/* Brand Section */}
            <Grid item xs={12} md={4}>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ color: theme.palette.primary.main }}
              >
                Mark Matuguina
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Full Stack Developer passionate about creating innovative web solutions
                and building user-friendly applications.
              </Typography>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ color: theme.palette.primary.main }}
              >
                Quick Links
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {quickLinks.map((link, index) => (
                  <Box component="li" key={index} sx={{ mb: 1 }}>
                    <Link
                      href={link.href}
                      color="text.secondary"
                      sx={{
                        textDecoration: 'none',
                        '&:hover': {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {link.name}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* Social Links */}
            <Grid item xs={12} sm={6} md={4}>
              <Typography 
                variant="h6" 
                gutterBottom
                sx={{ color: theme.palette.primary.main }}
              >
                Connect With Me
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    sx={{
                      color: theme.palette.text.secondary,
                      '&:hover': {
                        color: theme.palette.primary.main,
                        backgroundColor: 'rgba(144, 202, 249, 0.08)',
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </Grid>
          </Grid>

          {/* Divider */}
          <Divider sx={{ my: 4, backgroundColor: 'rgba(255, 255, 255, 0.05)' }} />

          {/* Copyright */}
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              © {currentYear} Mark Matuguina. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </FooterSection>
    </Box>
  );
};

export default Footer; 