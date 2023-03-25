import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div>
      <h4>{props.index}</h4>
      <div className="expense-item">
        <div>{props.date.toISOString()}</div>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <h2>{props.expenseLocation}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
