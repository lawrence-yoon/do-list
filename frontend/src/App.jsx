import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/features/Header";
import TryMe from "./pages/TryMe";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";
import useLocalStorage from "./hooks/useLocalStorage";
import { useState } from "react";

function App() {
  const [token, setToken] = useLocalStorage("sessionToken", "");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Router>
        <Header isLoggedIn={isLoggedIn} token={token} handleToken={setToken} />
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                token={token}
                handleToken={setToken}
              />
            }
          ></Route>
          <Route path="/try-me" element={<TryMe />}></Route>
          <Route
            path="/login"
            element={<Login token={token} handleToken={setToken} />}
          ></Route>
          <Route
            path="/register"
            element={<Register token={token} handleToken={setToken} />}
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
