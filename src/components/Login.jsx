import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    // If validation passes, simulate a login success (you can replace this logic with real authentication)
    alert('Login Successful!');
  };

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
  };

  // Checking Error Boundary
  
  const formContainerStyle = {
    backgroundColor: '#282828',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '15px',
    margin: '10px 0',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#333',
    color: '#fff',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '15px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  const forgotPasswordLinkStyle = {
    color: '#4CAF50',
    textDecoration: 'none',
    fontSize: '14px',
    marginTop: '10px',
    display: 'block',
  };

  const errorStyle = {
    color: '#FF6347',
    fontSize: '14px',
    marginTop: '10px',
  };
  // Check Error Boundary by commenting out the Error
  // throw new Error('New Error');

  return (
    <div style={pageStyle}>
      <div style={formContainerStyle}>
        <h2>Login to Your Account</h2>

        {/* Display error message if there's an issue */}
        {error && <div style={errorStyle}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
          >
            Login
          </button>
        </form>

        {/* Forgot Password Link */}
        <a href="/forgot-password" style={forgotPasswordLinkStyle}>
          Forgot Password?
        </a>
      </div>
    </div>
  );
};



export default Login;
