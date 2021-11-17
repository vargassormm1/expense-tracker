const List = (props) => {
  return (
    <ul>
      {props.expenses.map((expense) => {
        return <li>{expense.title}</li>;
      })}
    </ul>
  );
};

export default List;
