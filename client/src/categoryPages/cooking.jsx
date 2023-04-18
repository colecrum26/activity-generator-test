import { useState, useEffect } from "react";
import { cookIcon } from "../assets";

function Cooking() {
  const [data, setData] = useState({});

  function getActivity() {
    fetch("https://www.boredapi.com/api/activity/?type=cooking")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result)
        setData(result);
      })
      .catch((err) => {
        console.error(err);
        throw new Error("Something went wrong - failed to fetch.");
      });
  }

  useEffect(() => {
    getActivity();
  },[]);

  return (
    <div>
      <h2 id="activityHeader">Cooking Activity <img src={cookIcon} className="icon" alt="utensils" /></h2>
      <h4>Activity: {data.activity}</h4>
      <h4>Number of Participants: {data.participants}</h4>
      <h4>Price: {data.price*10}</h4>
      <p>Price is scaled 0-10, with 0 being free.</p>
      <h4>Accessibility: {data.accessibility*10}</h4>
      <p>Accessibility is scaled 0-10, with 0 being most accessible.</p>
      <button onClick={getActivity}>Refresh</button>
      </div>
  );
}

export default Cooking;
