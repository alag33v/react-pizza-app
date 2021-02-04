const Button = ({ className, outline, children }) => (
  <div>
    <button
      className={`button ${className} ${outline ? 'button--outline' : ''} `}
    >
      {children}
    </button>
  </div>
);

export default Button;
