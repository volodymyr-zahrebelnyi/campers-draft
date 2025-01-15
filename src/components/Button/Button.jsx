import PropTypes from "prop-types";
// import "./Button.css";

function Button({ onClick, children, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled} className="button">
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
