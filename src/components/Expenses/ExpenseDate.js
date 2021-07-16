import "./ExpenseDate.css";
import moment from "moment";

const ExpenseDate = (props) => {
  const month = moment(props.date).format("MMMM");
  const day = moment(props.date).format("DD");
  const year = moment(props.date).year();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
