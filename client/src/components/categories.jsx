import { NavLink, Routes, Route } from "react-router-dom";
import Educational from "../categoryPages/educational";

function Categories() {
  
  return (
    <div>
      <button type="submit" id="educational"><NavLink to="/educational">Educational</NavLink></button>
      <Routes>
        <Route exact path="*/educational" element={<Educational />}></Route>
      </Routes>
      <button type="submit" id="recreational"><NavLink to="/recreational">Recreational</NavLink></button>
      <button type="submit" id="social"><NavLink to="/social">Social</NavLink></button>
      <button type="submit" id="diy"><NavLink to="/diy">DIY</NavLink></button>
      <button type="submit" id="charity"><NavLink to="/charity">Charitable</NavLink></button>
      <br />
      <button type="submit" id="cooking"><NavLink to="/cooking">Cooking</NavLink></button>
      <button type="submit" id="relaxation"><NavLink to="/relaxation">Relaxation</NavLink></button>
      <button type="submit" id="music"><NavLink to="/music">Musical</NavLink></button>
      <button type="submit" id="busywork"><NavLink to="/busywork">Busywork</NavLink></button>
    </div>
  )
}

export default Categories;
