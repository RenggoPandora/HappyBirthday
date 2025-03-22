import PropTypes from "prop-types";

export default function Card({ children, className }) {
  return <div className={`rounded-lg shadow-lg p-4 ${className}`}>{children}</div>;
}

// Validasi props menggunakan PropTypes
Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

