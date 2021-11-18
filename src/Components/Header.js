const Header = (props) => {
  return (
    <div className="header">
      <h1>Expenses</h1>
      <button
        className="btn"
        style={{ backgroundColor: "black" }}
        onClick={props.onAdd}
      >
        {props.Close ? "Close" : "Add"}
      </button>
    </div>
  );
};

export default Header;
