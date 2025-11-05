import { Link } from "react-router-dom";
import "./header.css";
import "./mediaquery.css";

const Header = () => {
  return (
    <header>
      <h1>Stellar Vision</h1>
      <nav>
        <Link to="/" className="nav-links">
          Home
        </Link>
        <Link to="/reservation" className="nav-links">
          Reservation
        </Link>
        <Link to="/rockets" className="nav-links">
          Rockets
        </Link>
        <Link to="/about" className="nav-links">
          About
        </Link>
        <Link to="/contact" className="nav-links">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
