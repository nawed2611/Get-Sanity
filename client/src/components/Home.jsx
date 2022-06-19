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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Home = () => {
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
              MPeace
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button className="text-white" onClick={handleOpen}>Chat with Marv</Button>
            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
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
        <Typography variant="h1" className="font-bold text-4xl m-1 p-2">How are you feeling today?</Typography>
        <form onSubmit={handleSubmit} className="p-2 m-2 flex flex-col w-1/2 h-1/4 items-center justify-center">
          <Input type="text" value={text} onChange={(e) => { setText(e.target.value) }} className="font-bold text-4xl m-2 p-2 w-full h-1/2" placeholder="Like how was your day..." />
        </form>
      </div>
      {result && <Typography className="flex items-center justify-center h-40" variant="h3">Scroll Down !!</Typography>}
      {
        result && result["mood"]=='positive' && (
          <Stack className="font-bold flex flex-col items-center justify-center">
          <Typography variant="h2">Yayy! Here are some Happy Hits that you might wanna listen</Typography>
          <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC?utm_source=generator" width="40%" height="480" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          </Stack>
        )
      }
      {
        result && result["mood"]=='negative' && (
          <form className='font-bold flex flex-col items-center justify-center'>
            <Typography variant="h4">Well, tell me more about it, Maybe I can help</Typography>
            <Input type="text" className="font-bold text-4xl m-2 p-2 w-1/2 h-1/2" placeholder=""/> 
          </form>
        )
      }
    </div>
  )
}

export default Home