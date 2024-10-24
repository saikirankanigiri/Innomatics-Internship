import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Design from './components/Design';
import Development from './components/Development';
import './App.css'; // Assuming you have a CSS file for styling

const App = () => {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName="active">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </nav>

      {/* Define your routes here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />}>
          {/* Nested Routes for Services */}
          <Route path="design" element={<Design />} />
          <Route path="development" element={<Development />} />
        </Route>
        <Route path="*" element={<NotFound />} /> {/* 404 Page */}
      </Routes>
    </Router>
  );
};

export default App;
