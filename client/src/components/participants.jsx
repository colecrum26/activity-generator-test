import { NavLink, Routes, Route } from "react-router-dom";

function Participants() {
  
  return (
    <div>
      <button type="submit" id="one"><NavLink to="/one">1</NavLink></button>
      <button type="submit" id="two"><NavLink to="/two">2</NavLink></button>
      <button type="submit" id="three"><NavLink to="/three">3</NavLink></button>
      <button type="submit" id="four"><NavLink to="/four">4</NavLink></button>
      <button type="submit" id="fiveOrMore"><NavLink to="/fiveOrMore">5+</NavLink></button>
    </div>
  )
}

export default Participants;
