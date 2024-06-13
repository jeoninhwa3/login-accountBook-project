import Router from "./shared/Router";
import GlobalStyle from "./GlobalStyle";
import { useEffect, useState } from "react";
import dummy from "./dummy.json";
import { getUser } from "./lib/api/auth";

function App() {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [expenses, setExpenses] = useState(dummy);
  const [user, setUser] = useState("");

  useEffect(() => {
    getUser().then((res) => {
      if (res) {
        setUser({
          userId: res.id,
          nickname: res.nickname,
          avatar: res.avatar,
        });
        console.log(res);
      }
    });
  }, []);
  return (
    <>
      <GlobalStyle />
      <Router
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        expenses={expenses}
        setExpenses={setExpenses}
      />
    </>
  );
}

export default App;
