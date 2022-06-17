import {useState} from 'react';
import axios from 'axios';

function App() {

  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:5000/post')
    
  }

  return (
    <div className="flex flex-col h-screen">
        <h1 className="p-2 m-2 flex flex-col align-center justify-center text-3xl font-bold mx-auto">How are you feeling today?</h1>
        <form onSubmit={handleSubmit} className="p-2 m-2 flex flex-col h-3/4 align-center justify-center text-xl">
          <input type="text" value={text} onChange={(e)=> { setText(e.target.value)}} className="border-2 border-black" placeholder="" />
          <button>Send</button>
        </form>
    </div>
  )
}

export default App
