import Button from "./Button";

const Header = (props) => {
  return (
    <div className="header">
      <h1>Expenses</h1>
      <Button text="Add" color="black" />
    </div>
  );
};

export default Header;
