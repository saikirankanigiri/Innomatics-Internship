import React from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
  const query = new URLSearchParams(useLocation().search);
  const searchParam = query.get('search');

  return (
    <div className="page profile-page">
      <h1>Profile Page</h1>
      {searchParam ? (
        <p>Showing results for: {searchParam}</p>
      ) : (
        <p>No search query provided.</p>
      )}
    </div>
  );
};

export default Profile;
