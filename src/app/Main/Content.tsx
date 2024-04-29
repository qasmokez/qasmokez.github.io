import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Content() {

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: '100%',
            height: 128,
            fontWeight: 100,
          },
        }}
      >
        <Typography variant="h2" gutterBottom>
          Hi, I'm Jason
          <br />
          a CS student with a knack for innovation. This is my digital playground.
        </Typography>
      </Box>
    </Container>
  )
}

export default Content;