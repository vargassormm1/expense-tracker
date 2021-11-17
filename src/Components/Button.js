const Button = (props) => {
  return (
    <button className="btn" style={{ backgroundColor: props.color }}>
      {props.text}
    </button>
  );
};

export default Button;
