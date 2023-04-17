import React from "react";
import Header from "./components/header";
import Categories from "./components/categories";
import { Educational, Recreational } from "./categoryPages/index";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Header />}></Route>
        <Route exact path="/categories/*" element={<Categories />}></Route>
        <Route path="/educational" element={<Educational />}></Route>
        <Route path="/recreational" element={<Recreational />}></Route>
      </Routes>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button type="button">
          <NavLink to="/">Home</NavLink>
        </button>
        <button type="button">
          <NavLink to="/categories/">Filter by Activity Category</NavLink>
        </button>
      </div>
    </Router>
  );
}

export default App;
