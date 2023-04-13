import React from "react";
import Categories from "./categories";
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import Participants from "./participants";

function Activities(props) {

  return (
    <Router>
      <Routes>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/participants" element={<Participants />}></Route>
      </Routes>
      <button type="submit"><NavLink to="/categories">By Activity Category</NavLink></button>
      <button type="submit"><NavLink to="/participants">By Number of Participants</NavLink></button>
    </Router>
  );
}

export default Activities;
