import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function Content() {

  return (
    <Container
      maxWidth="xl"
      sx={{mt: {xs: 3, sm: 7}}}
    >
      <Avatar
        alt="Me"
        src="https://media.licdn.com/dms/image/D5603AQFn5Pkz21Wcug/profile-displayphoto-shrink_400_400/0/1700704826162?e=1720051200&v=beta&t=O7zZ2C-aAZkLbHhhizPe4oX2BcdDZRxiHxCZWzKvc50"
        sx={{
          width: {xs: 60, sm: 90},
          height: {xs: 60, sm: 90},
        }}
      />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: '100%',
            height: 128,
            fontWeight: 100,
            mt: {xs: 2, sm: 5},
          },
        }}
      >
        <Typography
          sx={{typography: {xs: 'h4', sm: 'h2'}}}
          gutterBottom
        >
          Hi, I'm Jason
          <br />
          a CS student with a knack for innovation. This is my digital playground.
        </Typography>
      </Box>
      <Divider />
    </Container>
  )
}

export default Content;