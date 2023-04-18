import { NavLink } from "react-router-dom";
import { 
  backIcon,
  eduIcon,
  recIcon,
  socIcon,
  diyIcon,
  charityIcon,
  cookIcon,
  relIcon,
  musIcon,
  busyIcon, } from "../assets/index";

function Categories() {
  return (
    <div id="categories">
      <header id="categoryHeader">
        <h2>Activity Categories</h2>
        <div id="icons">
        <img src={eduIcon} alt="books" />
        <img src={recIcon} alt="bicycle" />
        <img src={socIcon} alt="people" />
        <img src={diyIcon} alt="tools" />
        <img src={charityIcon} alt="cash" />
        <img src={cookIcon} alt="utensils" />
        <img src={relIcon} alt="battery" />
        <img src={musIcon} alt="headphones" />
        <img src={busyIcon} alt="clock" />
        </div>
        <h3>Let's find an activity for you.</h3>
        <h4>Choose a category you want to explore.</h4>
      </header>
    <div id="categoryBtnsS1">
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
    </div>  
    <div id="categoryBtnsS2">
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
    </div>
    <div id="homeBtn">
      <button type="submit" id="home"> 
        <NavLink to="/"><img src={backIcon} alt="back button" /></NavLink>
      </button>
    </div>
  </div>
  );
}

export default Categories;
