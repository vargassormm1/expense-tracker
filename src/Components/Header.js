const Header = (props) => {
  return (
    <div className="header">
      <h1>Expenses</h1>
      <button
        className="btn"
        style={{ backgroundColor: "black" }}
        onClick={props.onAdd}
      >
        Add
      </button>
    </div>
  );
};

export default Header;
