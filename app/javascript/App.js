import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greeting from './components/greeting';

function App() {
  return (
    
    <Router>
      <div className="App">
      <Greeting />
        <Routes>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;