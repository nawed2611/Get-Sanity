import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SpotifyPlaylist = () => {
    return (
        <Box className="flex items-center justify-center m-2 p-2">
            <Typography variant="h4" className='m-2 p-2'>Yayy! Here are some Spotify Playlists that we found to help you conquer your day</Typography>
            <iframe className='m-2 p-2 rounded-md' src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC?utm_source=generator" width="40%" height="480" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            <iframe className='m-2 p-2' src="https://open.spotify.com/embed/playlist/7yc76d3B7ClVnx5gFeIcQO?utm_source=generator" width="40%" height="480" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </Box>
    )
}

export default SpotifyPlaylist