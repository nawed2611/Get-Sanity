import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import { useAuth0 } from "@auth0/auth0-react";
import quotes from './Quotes';

const Navbar = () => {

    // Auth0 implementation
    const { logout } = useAuth0();
    const { loginWithRedirect } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

    const handleClick = () => {
        let random = Math.floor(Math.random() * 19);
        alert(quotes[random]);
      };

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              GetSanity
            </Typography>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <a href="https://github.com/nawed2611/Get-Sanity">GitHub</a>
            </Typography>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <button onClick={handleClick}>Angel Help</button>
            </Typography>

            {isAuthenticated && (
              <Stack className="w-10" direction="row" spacing={2}>
                <Avatar src={user.picture} />
              </Stack>
            )}
            // Checking if a User is logged in
            {isAuthenticated ? (<Button onClick={() => logout({ returnTo: window.location.origin })} color="inherit" >Logout</Button>) : (<Button onClick={() => loginWithRedirect()} color="inherit">Login With Auth0</Button>)}
          </Toolbar>
        </AppBar>
      </Box>
  )
}

export default Navbar