import React, { useState } from 'react'
import axios from 'axios';
import Input from '@mui/material/Input';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const textObj =

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
              Mental Health Hacks
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Chat with Marv
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              GitHub
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Video
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
        { isAuthenticated && (<Typography variant="h4" className="font-bold">Hi, {user.name}</Typography>)}
        <Typography variant="h1" className="font-bold text-4xl">How are you feeling today?</Typography>
        <form onSubmit={handleSubmit} className="p-2 m-2 flex flex-col w-1/2 h-1/4 items-center justify-center">
          <Input type="text" value={text} onChange={(e) => { setText(e.target.value) }} className="font-bold m-2 p-2 w-1/2 h-1/2" placeholder="Like how was your day..." />
        </form>
      </div>
      {
        result && <h1 className="text-3xl m-2 p-2 mx-auto">{result["mood"].toUpperCase()}</h1>
      }
    </div>
  )
}

export default Home