import React from "react";
import Header from "./components/header";
import Categories from "./components/categories";
import { Educational, Recreational, Social, DIY, Charitable, Cooking, Relaxation } from "./categoryPages/index";
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
        <Route path="/social" element={<Social />}></Route>
        <Route path="/diy" element={<DIY />}></Route>
        <Route path="/charity" element={<Charitable />}></Route>
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
