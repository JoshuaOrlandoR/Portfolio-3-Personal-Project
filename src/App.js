import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js';
// import About from './pages/About.js';
// import Projects from './pages/Projects.js';
// import Contact from './pages/Contact.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/"
            element={<Home />}
            />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
