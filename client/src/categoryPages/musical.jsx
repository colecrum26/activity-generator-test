import { useState, useEffect } from "react";
import { musIcon } from "../assets";

function Musical() {
  const [data, setData] = useState({});

  function getRecActivity() {
    fetch("https://www.boredapi.com/api/activity/?type=music")
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
    getRecActivity();
  },[]);

  return (
    <div>
      <h2>Musical Activity <img src={musIcon} className="icon" alt="headphones" /></h2>
      <h4>Activity: {data.activity}</h4>
      <h4>Number of Participants: {data.participants}</h4>
      <h4>Price: {data.price*10}</h4>
      <p>Price is scaled 0-10, with 0 being free.</p>
      <h4>Accessibility: {data.accessibility*10}</h4>
      <p>Accessibility is scaled 0-10, with 0 being most accessible.</p>
      </div>
  );
}

export default Musical;
