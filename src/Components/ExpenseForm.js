import { useState } from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Please Add a Title");
      return;
    }

    props.onAdd({ title, amount, date });

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="controlForm">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="controlForm">
          <label htmlFor="Amount">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="controlForm">
          <label htmlFor="Date">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="controlForm">
          <input
            type="submit"
            value="Save Expense"
            className="btn submit"
            style={{ backgroundColor: "green" }}
          />
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
