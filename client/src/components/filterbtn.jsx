import { NavLink } from "react-router-dom";

export default function FilterBtn () {
    return (
        <button type="button">
          <NavLink to="/categories/">Filter by Activity Category</NavLink>
        </button>
    )
}