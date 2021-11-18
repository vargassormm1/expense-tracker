import Expense from "./Expense";

const List = (props) => {
  return (
    <div>
      {props.expenses.map((expense) => {
        return (
          <Expense
            key={expense.id}
            expense={expense}
            onDelete={props.onDelete}
          />
        );
      })}
    </div>
  );
};

export default List;
