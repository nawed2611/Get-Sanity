import {useState} from 'react';

function App() {

  // const

  return (
    <div className="flex flex-col h-screen">
        <h1 className="p-2 m-2 flex flex-col align-center justify-center text-3xl font-bold mx-auto">How are you feeling today?</h1>
        <form className="p-2 m-2 flex flex-col h-3/4 align-center justify-center text-xl">
          <input type="text" className="border-2 border-black" placeholder="" />
          <button>Send</button>
        </form>
    </div>
  )
}

export default App
