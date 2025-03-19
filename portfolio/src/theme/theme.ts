import { createTheme } from '@mui/material/styles';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#ffff00',
    },
    error: {
      main: '#ff1744',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
});

export default theme; 