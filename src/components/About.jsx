// import React from 'react';

const AboutPage = () => {
  // Inline CSS styles
  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    margin: 0,
    padding: 0,
  };

  const headerStyle = {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '50px 20px',
    textAlign: 'center',
  };

  const headerTitleStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    margin: 0,
  };

  const sectionStyle = {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#fff',
    marginTop: '30px',
  };

  const profileSectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '20px',
  };

  const profileImageStyle = {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    marginBottom: '20px',
  };

  const profileTextStyle = {
    fontSize: '20px',
    color: '#333',
    lineHeight: '1.5',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const valuesSectionStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '40px 20px',
    marginTop: '40px',
    backgroundColor: '#e4f9e4',
  };

  const valueCardStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '25%',
  };

  const valueIconStyle = {
    fontSize: '40px',
    color: '#4CAF50',
    marginBottom: '20px',
  };

  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
    marginTop: '40px',
  };

  return (
    <div style={pageStyle}>
      {/* Header Section */}
      <header style={headerStyle}>
        <h1 style={headerTitleStyle}>About Us</h1>
        <p>Learn more about our journey and values.</p>
      </header>

      {/* Profile Section */}
      <section style={sectionStyle}>
        <h2>Our Story</h2>
        <div style={profileSectionStyle}>
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            style={profileImageStyle}
          />
          <p style={profileTextStyle}>
            We are a passionate team dedicated to delivering high-quality services. Our mission is to make
            the world a better place through innovative solutions. Founded in 2020, we have grown into a
            leading company in our industry, committed to excellence and customer satisfaction.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section style={valuesSectionStyle}>
        <div style={valueCardStyle}>
          <div style={valueIconStyle}>🚀</div>
          <h3>Innovation</h3>
          <p>We are always looking for new and creative ways to solve problems.</p>
        </div>
        <div style={valueCardStyle}>
          <div style={valueIconStyle}>🤝</div>
          <h3>Collaboration</h3>
          <p>Working together to achieve our goals and deliver the best results.</p>
        </div>
        <div style={valueCardStyle}>
          <div style={valueIconStyle}>🌱</div>
          <h3>Sustainability</h3>
          <p>We prioritize sustainable practices in everything we do.</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={footerStyle}>
        <p>&copy; 2025 Your Company. All rights reserved.</p>
        <p>Contact: info@yourcompany.com</p>
        <p>Follow us on social media: Facebook | Twitter | LinkedIn</p>
      </footer>
    </div>
  );
};

export default AboutPage;
