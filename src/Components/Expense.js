const Expense = (props) => {
  return (
    <div className="expense">
      <div className="product">
        <h3>{props.expense.title}</h3>
        <p>${props.expense.amount}</p>
      </div>
      <button
        className="btn"
        style={{ backgroundColor: "red" }}
        onClick={() => props.onDelete(props.expense.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Expense;
