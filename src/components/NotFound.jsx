// import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  // Inline CSS styles
  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#121212',
    color: '#fff',
    margin: 0,
    padding: 0,
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  };

  const heroStyle = {
    fontSize: '72px',
    fontWeight: '700',
    marginBottom: '20px',
  };

  const subtextStyle = {
    fontSize: '24px',
    marginBottom: '30px',
  };

  const linkStyle = {
    color: '#4CAF50',
    textDecoration: 'none',
    fontSize: '20px',
    fontWeight: 'bold',
    padding: '10px 20px',
    border: '2px solid #4CAF50',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, color 0.3s ease',
  };

  const linkHoverStyle = {
    backgroundColor: '#4CAF50',
    color: '#fff',
  };

  return (
    <div style={pageStyle}>
      <div>
        <h1 style={heroStyle}>404</h1>
        <p style={subtextStyle}>Oops! The page you are looking for does not exist.</p>
        <Link
          to="/"
          style={linkStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = linkHoverStyle.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
