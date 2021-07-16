import moment from "moment";
import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  console.log(filteredYear);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpensesByYear = props.items.filter(
    (expense) => moment(expense.date).year() === parseInt(filteredYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpensesByYear} />
        <ExpensesList items={filteredExpensesByYear} />
      </Card>
    </div>
  );
};

export default Expenses;
