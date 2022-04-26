import "./Header.css";
import PropTypes from "prop-types";

const Header = ({ text }) => {
  return (
    <header className="header">
      <div className="container">
        <h1>{text}</h1>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: "Feedback app",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
