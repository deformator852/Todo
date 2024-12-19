import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import React, { useState } from "react";
import { Task } from "./interfaces/interface";

export const Context = React.createContext<Task[]>([])
export function App() {
  const [tasks, setTask] = useState([])
  return (
    <Router>
      <Header />
      <Context.Provider value={tasks} >
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Context.Provider>
    </Router>
  );
}
