import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import Navbar from './Navbar';


const IndexPage = () => {

  return (
    <div>
      
      <Navbar />

      <div className="m-2 p-2 flex w-1/2">
        <div className="flex flex-col items-center p-2 m-2 justify-center homediv">
          <Typography variant="h1" className="p-2 m-2 font-bold text-4xl">Welcome To GetSanity</Typography>
          <Typography variant="h6" className="font-bold text-4xl">Holistic Mental Health Diagnosing Platform</Typography>
          <div className='flex flex-col items-center justify-center'>
            <Typography variant="h6" className="font-bold text-4xl">Login to Continue</Typography>
          </div>
        </div>
        <Box
          sx={{
            display: 'flex',
            '& > :not(style)': {
              m: 1,
              width: 700,
              height: 450,
              margin: 5,
              padding: 2,
            },
          }}
        >
          <Paper className="m-1 p-1 homelogo" variant="outlined" />
        </Box>
      </div>
    </div>
  )
}

export default IndexPage