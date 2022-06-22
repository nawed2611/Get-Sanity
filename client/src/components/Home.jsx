import React, { useState } from 'react'
import axios from 'axios';
import Input from '@mui/material/Input';
import Typography from '@mui/material/Typography';
import { useAuth0 } from "@auth0/auth0-react";

import SpotifyPlaylist from './SpotifyPlaylist';
import Form from './Form';
import Navbar from './Navbar';

const Home = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [text, setText] = useState('');
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

      <Navbar />

      <div className="flex flex-col justify-center items-center homediv">

        // Displaying User's name using Auth0
        {isAuthenticated && (<Typography variant="h4" className="font-bold">Hi, {user.name}</Typography>)}

        <Typography variant="h1" className="font-bold text-4xl m-1 p-2">How are you feeling today?</Typography>

        <form onSubmit={handleSubmit} className="p-2 m-2 flex flex-col w-1/2 h-1/4 items-center justify-center">
          <Input type="text" value={text} onChange={(e) => { setText(e.target.value) }} className="font-bold text-4xl m-2 p-2 w-full h-1/2" placeholder="Like how was your day..." />
        </form>
        
      </div>
      {result && <Typography className="m-2 p-2 flex items-center justify-center h-40" variant="h3">Scroll Down, We have something for you ↓↓</Typography>}

      // Displaying Playlist component when mood is positive
      {
        result && result["mood"] == 'positive' && (
          <div className="m-2 p-2 flex flex-col items-center border border-black justify-center">
            <SpotifyPlaylist />
          </div>
        )
      }
      // Displaying Form component when mood is negative
      {
        result && result["mood"] == 'negative' && (
          <Form />)
      }
    </div>
  )
}

export default Home