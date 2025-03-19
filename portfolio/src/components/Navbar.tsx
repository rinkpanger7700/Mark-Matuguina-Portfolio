/**
 * Navbar Component
 * A responsive navigation bar that includes links to different sections of the portfolio.
 * Features a mobile-friendly drawer menu for smaller screens.
 */

import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// Navigation items configuration
const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const Navbar: React.FC = () => {
  // State for mobile drawer
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Handler for mobile drawer toggle
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Mobile drawer content
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', py: 2 }}>
      <Typography variant="h6" sx={{ my: 2, color: theme.palette.primary.main }}>
        Portfolio
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} component="a" href={item.href} sx={{
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: 'rgba(144, 202, 249, 0.08)'
            }
          }}>
            <ListItemText 
              primary={item.name} 
              primaryTypographyProps={{
                sx: { 
                  color: theme.palette.text.primary,
                  '&:hover': { color: theme.palette.primary.main }
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Main AppBar */}
      <AppBar position="fixed" elevation={0}>
        <Toolbar>
          {/* Logo/Brand */}
          <Typography
            variant="h6"
            component="div"
            sx={{ 
              flexGrow: 1, 
              display: 'block', 
              fontWeight: 'bold',
              color: theme.palette.primary.main
            }}
          >
            Portfolio
          </Typography>

          {/* Navigation Links */}
          {isMobile ? (
            // Mobile menu button
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            // Desktop navigation links
            <Box sx={{ display: 'flex' }}>
              {navItems.map((item) => (
                <Button 
                  key={item.name} 
                  href={item.href}
                  sx={{ 
                    color: theme.palette.text.primary,
                    mx: 1,
                    '&:hover': {
                      color: theme.palette.primary.main,
                      backgroundColor: 'rgba(144, 202, 249, 0.08)'
                    }
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Spacer to prevent content from hiding behind fixed AppBar */}
      <Toolbar />
    </Box>
  );
};

export default Navbar; 