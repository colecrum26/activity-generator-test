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
      <div className="filterBtns" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
      <button type="submit" onClick={<Categories />}><NavLink to="/categories">Filter by Activity Category</NavLink></button>
      <p>or</p>
      <button type="submit" onClick={<Participants />}><NavLink to="/participants">Filter by Number of Participants</NavLink></button>
      </div>
    </Router>
  );
}

export default Activities;
