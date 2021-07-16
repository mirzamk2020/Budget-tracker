import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "H&M Clothing",
    amount: 63.88,
    date: new Date(2021, 7, 21),
  },
  {
    id: "e2",
    title: "Macbook Air",
    amount: 1199.49,
    date: new Date(2021, 11, 12),
  },
  {
    id: "e3",
    title: "Boots",
    amount: 94.87,
    date: new Date(2021, 2, 28),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
