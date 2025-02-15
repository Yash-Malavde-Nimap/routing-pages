// import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Inline CSS styles
  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#121212',
    color: '#fff',
    margin: 0,
    padding: 0,
  };

  const heroSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(45deg, #4CAF50, #1d26be)',
    textAlign: 'center',
    color: '#fff',
    padding: '20px',
  };

  const heroTitleStyle = {
    fontSize: '64px',
    fontWeight: '700',
    margin: '0',
    lineHeight: '1.2',
  };

  const heroSubtitleStyle = {
    fontSize: '22px',
    margin: '20px 0',
    fontWeight: '400',
    maxWidth: '600px',
  };

  const buttonStyle = {
    padding: '15px 30px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  const aboutSectionStyle = {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#1b1b1b',
    marginTop: '40px',
  };

  const aboutTitleStyle = {
    fontSize: '36px',
    fontWeight: '700',
    color: '#4CAF50',
    marginBottom: '20px',
  };

  const aboutTextStyle = {
    fontSize: '18px',
    lineHeight: '1.7',
    maxWidth: '800px',
    margin: '0 auto',
    color: '#ccc',
  };

  const featuresSectionStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '60px 20px',
    backgroundColor: '#333',
    color: '#fff',
    marginTop: '40px',
  };

  const featureCardStyle = {
    backgroundColor: '#282828',
    padding: '10px',
    borderRadius: '10px',
    width: '30%',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  };

  const featureIconStyle = {
    fontSize: '40px',
    color: '#4CAF50',
    marginBottom: '20px',
  };

  const footerStyle = {
    backgroundColor: '#121212',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
    marginTop: '60px',
  };

  return (
    <div style={pageStyle}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <h1 style={heroTitleStyle}>Empowering the Future with AI</h1>
        <p style={heroSubtitleStyle}>
          Transforming industries through cutting-edge artificial intelligence solutions.
        </p>
        <Link to="/contact">
          <button
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
          >
            Contact Us
          </button>
        </Link>
      </section>

      {/* About Section */}
      <section style={aboutSectionStyle}>
        <h2 style={aboutTitleStyle}>About Us</h2>
        <p style={aboutTextStyle}>
          We are an AI-driven company dedicated to revolutionizing the way businesses operate.
          With our advanced machine learning algorithms and innovative data processing techniques, 
          we help companies gain deeper insights, automate tasks, and create smarter solutions for 
          the challenges of tomorrow.
        </p>
      </section>

      {/* Features Section */}
      <section style={featuresSectionStyle}>
        <div style={featureCardStyle}>
          <div style={featureIconStyle}>🤖</div>
          <h3>AI-Powered Solutions</h3>
          <p>From predictive analytics to automation, we harness AI to drive business growth.</p>
        </div>
        <div style={featureCardStyle}>
          <div style={featureIconStyle}>📊</div>
          <h3>Data-Driven Insights</h3>
          <p>Our solutions are built on real-time data to provide actionable insights.</p>
        </div>
        <div style={featureCardStyle}>
          <div style={featureIconStyle}>⚙️</div>
          <h3>Automation & Efficiency</h3>
          <p>AI-driven automation that enhances productivity and reduces operational costs.</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={footerStyle}>
        <p>&copy; 2025 AI Innovations Inc. All rights reserved.</p>
        <p>Follow us: Facebook | Twitter | LinkedIn</p>
      </footer>
    </div>
  );
};

export default HomePage;
