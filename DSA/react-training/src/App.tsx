import { Routes, Route, Link } from "react-router-dom";
import Count from "./components/Count/count";
import Home from "./components/Home/home";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/count">Count</Link>
          </li>
        </ul>
      </nav>

      {/*The route Section */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/count" element={<Count />} />
      </Routes>
    </div>
  );
}
export default App;
