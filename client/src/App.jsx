import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

function App() {

  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    const textObj = { title : text }

    axios('http://192.168.0.128:80 ', {
      method: 'POST',
      data: textObj,
    }).then((res) => setResult(res.data))
  }

  return (
    <div className="flex flex-col h-screen">
      <h1 className="p-2 m-2 align-center justify-center text-3xl font-bold">How are you feeling today?</h1>
      <form onSubmit={handleSubmit} className="p-2 m-2 flex flex-col h-3/4 align-center border-2 w-1/2 justify-center text-xl">
        <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} className="border-2 border-black" placeholder="" />
        <Button>Send</Button>
      </form>
      {
        
      }
    </div>
  )
}

export default App
