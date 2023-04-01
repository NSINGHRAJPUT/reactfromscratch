import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  let expenseList = [];
  props.items.forEach((item) => {
    expenseList.push(
      <ExpenseItem
        id={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });
  return (
    <div>
      <Card className="expenses">{expenseList}</Card>
    </div>
  );
};

export default Expenses;
