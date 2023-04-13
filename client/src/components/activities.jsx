import { useState } from "react";
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import Categories from "./categories";
import Participants from "./participants";

function Activities(props) {

  return (
    <Router>
      <Routes>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/participants" element={<Participants />}></Route>
      </Routes>
      <button type="submit"><NavLink to="/categories">By Activity Category</NavLink></button>
      <p>or</p>
      <button type="submit"><NavLink to="/participants">By Number of Participants</NavLink></button>
    </Router>
  );
}

export default Activities;
