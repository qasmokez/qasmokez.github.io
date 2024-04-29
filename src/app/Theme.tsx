'use client';
import {createTheme} from "@mui/material";

// const darkMode = 1;

export const Theme = createTheme({
  typography: {
    fontFamily: 'Cormorant Garamond',
  },
  palette: {
    primary: {
      main: "#121212"
    },
    secondary: {
      main: "#f0f0f0"
    },
    // mode: darkMode ? 'dark' : 'light',
  }
});
