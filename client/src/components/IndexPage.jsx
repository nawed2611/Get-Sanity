import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAuth0 } from "@auth0/auth0-react";


const IndexPage = () => {

  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              GetSanity
            </Typography>
            
            <Button onClick={() => loginWithRedirect()} color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="m-2 p-2 flex flex-col">
        <div className="flex flex-col items-center justify-center homediv">
          <Typography variant="h1" className="font-bold text-4xl">Welcome to Sanity</Typography>
          <Typography variant="subtitle1" className="font-bold text-4xl">Holistic Mental Health Diagnosing Platform</Typography>
        </div>
      </div>
    </div>
  )
}

export default IndexPage