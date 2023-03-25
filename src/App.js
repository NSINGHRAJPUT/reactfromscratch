import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  let itemExpense = [
    {
      id: 1,
      title: "Bike insurance",
      expenseLocation: "Hero showroom",
      amount: 300,
      date: new Date(2022, 2, 23),
    },
    {
      id: 2,
      title: "Property tax",
      expenseLocation: "Nagar Nigam",
      amount: 500,
      date: new Date(2022, 3, 13),
    },
    {
      id: 3,
      title: "Elextricity bill",
      expenseLocation: "Muncipality",
      amount: 450,
      date: new Date(2022, 1, 3),
    },
    {
      id: 4,
      title: "Bakery",
      expenseLocation: "Bakery shop",
      amount: 100,
      date: new Date(2022, 12, 20),
    },
  ];
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
      <ul>{expenseList}</ul>
    </div>
  );
}

export default App;
