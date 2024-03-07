import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Protected from "./components/Protected";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={<Protected Component={Dashboard} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
