import "./App.css";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import { itemExpense } from "./components/ExpenseItem/Expenses";
import NewExpense from "./components/ExpenseForm/NewExpense";

const App = () => {
  let expenseList = [];
  itemExpense.forEach((item, index) => {
    expenseList.push(
      <ExpenseItem
        key={item.id}
        title={item.title}
        expenseLocation={item.expenseLocation}
        amount={item.amount}
        date={item.date}
      ></ExpenseItem>
    );
  });
  return (
    <div>
      <NewExpense />
      {expenseList}
    </div>
  );
};

export default App;
