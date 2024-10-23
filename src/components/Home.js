import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Home.css'; // Assuming you have CSS for styling

const Home = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // Handle form submission for search
  const handleSearch = (e) => {
    e.preventDefault();
    // Redirect to Profile page with search query as a URL param
    navigate(`/profile?search=${search}`);
  };

  // Handle Go to Profile button click
  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <div className="page home-page">
      <h1>Welcome to Innomatics Research Labs</h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for profile..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {/* Navigation Buttons */}
      <div className="button-container">
        <button onClick={goToProfile} className="btn">Go to Profile</button>
        
        {/* Using Link for navigation buttons */}
        <Link to="/about" className="btn">About Us</Link>
        <Link to="/contact" className="btn">Contact Us</Link>
      </div>
    </div>
  );
};

export default Home;
