import "./App.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Index from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;