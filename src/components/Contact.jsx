import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    // Handle form submission logic here
  };

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
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
    background: 'linear-gradient(45deg, #4CAF50, #3a8d42)',
    textAlign: 'center',
    color: '#fff',
    padding: '20px',
  };

  const heroTitleStyle = {
    fontSize: '48px',
    fontWeight: '700',
    margin: 0,
  };

  const formSectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px 20px',
    backgroundColor: '#1b1b1b',
    color: '#fff',
  };

  const formContainerStyle = {
    maxWidth: '600px',
    width: '100%',
    backgroundColor: '#282828',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
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
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049',
  };

  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
    marginTop: '40px',
  };

  return (
    <div style={pageStyle}>
      {/* Hero Section */}
      <section style={heroSectionStyle}>
        <h1 style={heroTitleStyle}>Contact Us</h1>
      </section>

      {/* Contact Form Section */}
      <section style={formSectionStyle}>
        <div style={formContainerStyle}>
          <form onSubmit={handleSubmit}>
            <h2>Get In Touch</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              style={inputStyle}
              rows="5"
              required
            />
            <button
              type="submit"
              style={buttonStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
              onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer style={footerStyle}>
        <p>&copy; 2025 Your AI Startup. All rights reserved.</p>
        <p>Follow us: Facebook | Twitter | LinkedIn</p>
      </footer>
    </div>
  );
};

export default ContactPage;
