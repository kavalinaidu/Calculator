import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavMain from './Components/NavMain';
import Home from './Components/Home';
import Exchange from './Components/Exchange';
import ABOUT from './Components/ABOUT';
import Errorpage from './Components/Errorpage';


function App() {
  return (
    <Router>
      <NavMain />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/about" element={<ABOUT />} />
          <Route path="/error" element={<Errorpage />} />
          
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;
