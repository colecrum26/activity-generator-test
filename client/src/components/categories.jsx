import { NavLink } from "react-router-dom";
import { backIcon, eduIcon } from "../assets/index";

function Categories() {
  return (
    <div>
      <header id="categoryHeader">
        <h2>Activity Categories</h2>
        <h3>Let's find an activity for you.</h3>
      </header>
      <button type="submit" id="educational">
        <NavLink to="/educational">Educational</NavLink>
      </button>
      <button type="submit" id="recreational">
        <NavLink to="/recreational">Recreational</NavLink>
      </button>
      <button type="submit" id="social">
        <NavLink to="/social">Social</NavLink>
      </button>
      <button type="submit" id="diy">
        <NavLink to="/diy">DIY</NavLink>
      </button>
      <button type="submit" id="charity">
        <NavLink to="/charity">Charitable</NavLink>
      </button>
      <br />
      <button type="submit" id="cooking">
        <NavLink to="/cooking">Cooking</NavLink>
      </button>
      <button type="submit" id="relaxation">
        <NavLink to="/relaxation">Relaxation</NavLink>
      </button>
      <button type="submit" id="music">
        <NavLink to="/music">Musical</NavLink>
      </button>
      <button type="submit" id="busywork">
        <NavLink to="/busywork">Busywork</NavLink>
      </button>
      <div id="homeBtn">
        <button type="submit" id="home"> 
          <NavLink to="/"><img src={backIcon} alt="" /></NavLink>
        </button>
      </div>
    </div>
  );
}

export default Categories;
