import ExpenseDate from "../ExpenseDate/ExpenseDate";
import ExpenseDetails from "../ExpenseDetails/ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [amount, setAmount] = useState(props.amount);
  const clickHandler = () => {
    setAmount(100);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        expenseLocation={props.expenseLocation}
        amount={amount}
      />
      <button onClick={clickHandler}>Delete item</button>
    </Card>
  );
};

export default ExpenseItem;
