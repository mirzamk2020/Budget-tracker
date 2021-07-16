import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsWriting(false);
  };

  const [isWriting, setIsWriting] = useState(false);

  const startWritingHandler = () => {
    setIsWriting(true);
  };

  const stopWritingHandler = () => {
    setIsWriting(false);
  };

  let newContent = (
    <button onClick={startWritingHandler}>Add New Expenses</button>
  );

  if (isWriting) {
    newContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopWritingHandler}
      />
    );
  }

  return <div className="new-expense">{newContent}</div>;
};

export default NewExpense;
