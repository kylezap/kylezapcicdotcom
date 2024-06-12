import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
      //#FAF9F6
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
    h1: {fontSize: 86,
         fontWeight: 500
    },
    h2: {fontSize: 32,
         fontWeight: 400,
         lineHeight: 1.6
    },
    body1: {fontSize: 20,
            fontWeight: 400,
            lineHeight: 1.6
    },
  },
    
});

theme = responsiveFontSizes(theme);

export default theme;
