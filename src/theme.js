import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '##FF0000'
    },
  },
  typography: {
    fontFamily: [
      "Inter", 'sans-serif'
    ].join(','),
    h1: {fontSize: 38,}
  },
});

theme = responsiveFontSizes(theme);

export default theme;


