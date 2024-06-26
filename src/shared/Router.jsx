import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Layout from "../components/layout/Layout";
import Login from "../pages/Login";
import Join from "../pages/Join";
import Profile from "../pages/Profile";

const Router = ({ selectedMonth, setSelectedMonth, user, setUser }) => {
  return (
    <BrowserRouter>
      <Layout user={user} setUser={setUser}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
                user={user}
                setUser={setUser}
              />
            }
          />
          <Route path="/detail/:id" element={<Detail user={user} />} />
          <Route
            path="/profile"
            element={<Profile user={user} setUser={setUser} />}
          ></Route>
          <Route path="/login" element={<Login setUser={setUser} />}></Route>
          <Route path="/Join" element={<Join />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
