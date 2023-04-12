import { useState, useEffect } from "react";
import { getListOf } from "../helpers.js/activity.helpers";

const url = "http://www.boredapi.com/api/activity/";

function Activities(props) {
  const [list, setList] = useState([]);
  const [category, setCategory] = useState("");
  const [parts, setParts] = useState("");
  const [price, setPrice] = useState("");
  const [access, setAccess] = useState("");

  async function getActivities() {
    try {
      let res = await fetch(url);
      let activityData = await res.json();
      
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong - failed to fetch.");
    }
  }
  let categories = getListOf(list, "categories");

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <form id="form">
      <div className="form-group">
        <label htmlFor="activityType">Choose Category</label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        ></select>
      </div>
      <div className="form-group">
        <label htmlFor="activityType">Choose Number of Participants</label>
        <select
          name="parts"
          id="parts"
          value={parts}
          onChange={(e) => setParts(e.target.value)}
        ></select>
      </div>
      <div className="form-group">
        <label htmlFor="activityType">Choose Price Level</label>
        <select
          name="price"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></select>
      </div>
      <div className="form-group">
        <label htmlFor="activityType">Choose Accessibility Level</label>
        <select
          name="access"
          id="access"
          value={access}
          onChange={(e) => setAccess(e.target.value)}
        ></select>
      </div>
    </form>
  );
}

export default Activities;
