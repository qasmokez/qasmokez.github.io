'use client';
import {Theme} from './Theme'
import {ThemeProvider} from "@mui/material";

import Main from './Main/Main'

export default function Page() {
  return (
    <ThemeProvider theme={Theme}>
      <Main />
    </ThemeProvider>
  )
};