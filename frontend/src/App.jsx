import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TryMe from "./pages/TryMe";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/tryme" element={<TryMe />}></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
