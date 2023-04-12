import { useState, useEffect } from "react";
import { getListOf, Categories, Participants, Price, Accessibility } from "../helpers.js/activity.helpers";

function Activities(props) {
  const [list, setList] = useState([]);
  const [category, setCategory] = useState("");
  const [partis, setParts] = useState("");
  const [price, setPrice] = useState("");
  const [access, setAccess] = useState("");

  

  

  

//   let categories = getListOf(list, "categories")

  return (
    <div></div>
  );
}

export default Activities;


"http://www.boredapi.com.api/activity?type=recreational?participants=1"