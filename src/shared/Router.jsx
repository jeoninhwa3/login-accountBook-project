import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Layout from "../Layout";
import Login from "../pages/Login";
import Join from "../pages/Join";

const Router = ({
  selectedMonth,
  setSelectedMonth,
  expenses,
  setExpenses,
  setUser,
}) => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
                expenses={expenses}
                setExpenses={setExpenses}
              />
            }
          />
          <Route
            path="/detail/:id"
            element={<Detail expenses={expenses} setExpenses={setExpenses} />}
          />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Join" element={<Join />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
