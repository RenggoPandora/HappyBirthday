import PropTypes from "prop-types";

export default function CardContent({ children }) {
  return <div className="p-2">{children}</div>;
}

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};
