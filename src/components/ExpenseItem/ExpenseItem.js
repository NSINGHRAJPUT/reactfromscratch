import ExpenseDate from "../ExpenseDate/ExpenseDate";
import ExpenseDetails from "../ExpenseDetails/ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { itemExpense } from "./Expenses";

const ExpenseItem = (props) => {
  let title = props.title;
  const clickHandler = () => {
    console.log(title);
    let x = 0;
    for (let i = 0; i < itemExpense.length; i++) {
      if (title === itemExpense[i].title) {
        x = i;
      }
    }
    for (let j = x; j < itemExpense.length - 1; j++) {
      itemExpense[j] = itemExpense[j + 1];
    }
    itemExpense.pop();
    console.log(itemExpense);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={title}
        expenseLocation={props.expenseLocation}
        amount={props.amount}
      />
      <button onClick={clickHandler}>Delete item</button>
    </Card>
  );
};

export default ExpenseItem;
