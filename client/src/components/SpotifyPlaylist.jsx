import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const SpotifyPlaylist = () => {
    return (
        <Stack className="font-bold flex flex-col items-center justify-center">
            <Typography variant="h2">Yayy! Here are some Happy Hits that you might wanna listen</Typography>
            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC?utm_source=generator" width="40%" height="480" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </Stack>
    )
}

export default SpotifyPlaylist