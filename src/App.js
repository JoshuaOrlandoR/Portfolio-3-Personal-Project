import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects.js';
import Contact from './pages/Contact';
import Footer from './components/Footer';
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
          <Route path="/projects"
            element={<Projects />}
            />
          <Route path="/about"
            element={<About />}
            />
          <Route path="/contact"
            element={<Contact />}
            />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
