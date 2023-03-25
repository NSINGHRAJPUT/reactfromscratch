import ExpenseDate from "../ExpenseDate/ExpenseDate";
import ExpenseDetails from "../ExpenseDetails/ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        expenseLocation={props.expenseLocation}
        amount={props.amount}
      />
    </Card>
  );
};

export default ExpenseItem;
