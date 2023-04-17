import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import Categories from "./categories";
import Participants from "./participants";

function Activities(props) {

  // conditional rendering for components
  return (
    <Router>
      <div className="filterBtns" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <button type="submit"><NavLink to="/categories/">Filter by Activity Category</NavLink></button>
      <Routes>
      <Route path="/categories/*" element={<Categories />}></Route>
      </Routes>
      <p>or</p>
      <button type="submit"><NavLink to="/participants">Filter by Number of Participants</NavLink></button>
      <Routes>
      <Route path="/participants" element={<Participants />}></Route>
      </Routes>
      </div>
      </Router>
  );
}

export default Activities;
