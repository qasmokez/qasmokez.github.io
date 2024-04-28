'use client';
import Main from './Main'

import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000"
    },
    secondary: {
      main: "#ffffff"
    }
  }
});

export default function Page() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  )
};