import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/Home/Home";
import AddUser from "./components/AddUser/AddUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user/adduser" element={<AddUser />}></Route>
      </Routes>
    </div>
  );
}

export default App;
