import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TryMe from "./pages/TryMe";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Header />
        {/* <p>testbefore routes</p> */}
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/try-me" element={<TryMe />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        {/* <p>testafter routes</p> */}
      </Router>
    </>
  );
}

export default App;
