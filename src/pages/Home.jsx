import SelectMonth from "../components/SelectMonth";
import ExpensesList from "../components/ExpensesList.jsx";
import AddExpenses from "../components/AddExpenses.jsx";

const Home = ({ selectedMonth, setSelectedMonth, user }) => {
  return (
    <>
      <AddExpenses user={user} />
      <SelectMonth
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <ExpensesList user={user} selectedMonth={selectedMonth} />
    </>
  );
};

export default Home;
