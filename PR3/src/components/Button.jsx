const Button = ({ text, onClick, type }) => {
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;