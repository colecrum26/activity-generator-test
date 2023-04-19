import { NavLink } from "react-router-dom";
import { forIcon } from "../assets";
import "./filter.css";

export default function FilterBtn() {
  return (
    <NavLink to="/categories/">
      <button className="filter">
        Activity Categories <img src={forIcon} alt="forward button" />
      </button>
    </NavLink>
  );
}
