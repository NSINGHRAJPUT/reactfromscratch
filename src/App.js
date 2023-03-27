import "./App.css";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import { itemExpense } from "./components/ExpenseItem/Expenses";

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
      <h2>hello there</h2>
      {expenseList}
    </div>
  );
};

export default App;
