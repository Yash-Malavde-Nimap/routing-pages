import { Link } from "react-router-dom";

const Navbar = () => {
  // Inline CSS styles
  const navbarStyle = {
    backgroundColor: "#333",
    padding: "30px 20px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontFamily:'sans-serif',
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    padding: "10px 15px",
    borderRadius: "5px",
  };

//   const linkHoverStyle = {
//     backgroundColor: "#555",
//   };

  return (
    <nav style={navbarStyle}>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link to="/" style={{ ...linkStyle }}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ ...linkStyle }}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ ...linkStyle }}>
            Contact
          </Link>
        </li>
        <li>
          <Link to="/login" style={{ ...linkStyle }}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
