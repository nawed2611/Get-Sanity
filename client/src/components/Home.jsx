import React, { useState } from 'react'
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Input from '@mui/material/Input';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import { useAuth0 } from "@auth0/auth0-react";

import SpotifyPlaylist from './SpotifyPlaylist';
import Form from './Form';
import Chat from './Chat';
import News from './News';

const Home = () => {
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios('http://127.0.0.1:5000 ', {
      method: 'POST',
      headers: {
        'Content-type': "application/json"
      },
      data: { "title": text },
    }).then((res) => setResult(res.data))
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              GetSanity
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <button onClick={handleOpen}>Chat with Marv</button>
            </Typography>

            <Chat open={open} setOpen={setOpen} />

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <a href="https://github.com/nawed2611/mlh-mental-health-hacks">GitHub</a>
            </Typography>
      
            {isAuthenticated && (
              <Stack className="w-10" direction="row" spacing={2}>
                <Avatar src={user.picture} />
              </Stack>
            )}
            <Button onClick={() => logout({ returnTo: window.location.origin })} color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="flex flex-col justify-center items-center homediv">
        {isAuthenticated && (<Typography variant="h4" className="font-bold">Hi, {user.name}</Typography>)}
        <Typography variant="h1" className="font-bold text-4xl m-1 p-2">How are you feeling today?</Typography>
        <form onSubmit={handleSubmit} className="p-2 m-2 flex flex-col w-1/2 h-1/4 items-center justify-center">
          <Input type="text" value={text} onChange={(e) => { setText(e.target.value) }} className="font-bold text-4xl m-2 p-2 w-full h-1/2" placeholder="Like how was your day..." />
        </form>
      </div>
      {result && <Typography className="m-2 p-2 flex items-center justify-center h-40" variant="h3">Scroll Down, We have something for you ↓↓</Typography>}
      {
        result && result["mood"] == 'positive' && (
          <div className="m-2 p-2 flex flex-col items-center justify-center">
            <SpotifyPlaylist />
            <Typography className="" variant="h2" component="div" sx={{ flexGrow: 1 }}>
              Also, Some Top Headlines from India to keep you updated
            </Typography>
            <News />
          </div>
        )
      }
      {
        result && result["mood"] == 'negative' && (
          <Form />)
      }
    </div>
  )
}

export default Home