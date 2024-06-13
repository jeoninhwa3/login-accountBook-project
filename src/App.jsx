import Router from "./shared/Router";
import GlobalStyle from "./GlobalStyle";
import { useState } from "react";

function App() {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [user, setUser] = useState("");

  return (
    <>
      <GlobalStyle />
      <Router
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        user={user}
        setUser={setUser}
      />
    </>
  );
}

export default App;
