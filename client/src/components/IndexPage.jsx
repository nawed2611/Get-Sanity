import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
              Mental Health Hacks
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              GitHub
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Video
            </Typography>
            <Button onClick={() => loginWithRedirect()} color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="m-2 p-2 flex flex-col">
        <div className="flex flex-col items-center justify-center homediv">
          <Typography variant="h1" className="font-bold text-4xl">Welcome to MPeace</Typography>
        </div>
      </div>
    </div>
  )
}

export default IndexPage