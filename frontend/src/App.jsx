import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/features/Header";
import TryMe from "./pages/TryMe";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [token, setToken] = useLocalStorage("sessionToken", "");
  return (
    <>
      <Router>
        <Header loginToken={token} handleToken={setToken} />
        <Routes>
          <Route
            path="/"
            element={<Dashboard loginToken={token} handleToken={setToken} />}
          ></Route>
          <Route path="/try-me" element={<TryMe />}></Route>
          <Route
            path="/login"
            element={<Login loginToken={token} handleToken={setToken} />}
          ></Route>
          <Route
            path="/register"
            element={<Register loginToken={token} handleToken={setToken} />}
          ></Route>
          <Route
            path="/logout"
            element={<Logout handleToken={setToken} />}
          ></Route>
        </Routes>
        {/* <p>testafter routes</p> */}
      </Router>
    </>
  );
}

export default App;
