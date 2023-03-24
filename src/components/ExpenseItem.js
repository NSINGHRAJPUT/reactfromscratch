import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 4, 4);
  const expenseTitle = "Birthday";
  const expenseLocation = "Ashima Mall";
  const expneseAmount = 300;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <h2>{expenseLocation}</h2>
        <div className="expense-item__price">${expneseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
