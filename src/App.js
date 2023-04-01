import "./App.css";
//import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import Expenses from "./components/ExpenseItem/Expenses";
import NewExpense from "./components/ExpenseForm/NewExpense";
import { useState } from "react";
let DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Bike insurance",
    amount: 300,
    date: new Date(2022, 2, 23),
  },
  {
    id: 2,
    title: "Property tax",
    amount: 500,
    date: new Date(2022, 3, 13),
  },
  {
    id: 3,
    title: "Elextricity bill",
    amount: 450,
    date: new Date(2022, 1, 3),
  },
  {
    id: 4,
    title: "Bakery",
    amount: 100,
    date: new Date(2022, 12, 20),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    console.log("in app.js");
    console.log(expenses);
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
