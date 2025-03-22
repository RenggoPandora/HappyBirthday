import PropTypes from "prop-types";

export default function Button({ children, onClick, className }) {
  return (
    <button className={`px-4 py-2 rounded ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

// Validasi props menggunakan PropTypes
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
