import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

import IndexPage from './components/IndexPage';
import Home from './components/Home';

function App() {

  return (
    <Router>
     <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
    </Router>
  )
}

export default App
