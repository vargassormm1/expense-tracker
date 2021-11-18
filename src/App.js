import { useState } from "react";
import Header from "./Components/Header";
import List from "./Components/List";
import ExpenseForm from "./Components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  // Toggle form
  const [showForm, setShowForm] = useState(false);

  // Add Expense
  const addExpense = (expense) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newExpense = { id, ...expense };

    setExpenses([...expenses, newExpense]);
  };

  // Delete Expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="container">
      <Header expenses={expenses} onAdd={(e) => setShowForm(!showForm)} />
      {showForm && <ExpenseForm onAdd={addExpense} />}
      {expenses.length > 0 ? (
        <List expenses={expenses} onDelete={deleteExpense} />
      ) : (
        <h2>No Expenses</h2>
      )}
    </div>
  );
}

export default App;
