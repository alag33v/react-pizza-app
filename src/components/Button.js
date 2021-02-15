import PropTypes from 'prop-types';

const Button = ({ className, outline, onClick, children }) => (
  <div>
    <button
      className={`button ${className} ${outline ? 'button--outline' : ''} `}
      onClick={onClick}
    >
      {children}
    </button>
  </div>
);

Button.propTypes = {
  className: PropTypes.string,
  outline: PropTypes.bool
};

export default Button;
