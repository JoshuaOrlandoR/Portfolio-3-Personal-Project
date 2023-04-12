import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './pages/Home';
import About from './pages/About';
// import Projects from './pages/Projects.js';
// import Contact from './pages/Contact.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/"
            element={<Home />}
            />
          <Route path="/about"
            element={<About />}
            />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
