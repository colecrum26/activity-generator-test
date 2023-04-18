import { useState, useEffect } from "react";
import { charityIcon } from "../assets";

function Charitable() {
  const [data, setData] = useState({});

  function getRecActivity() {
    fetch("https://www.boredapi.com/api/activity/?type=charity")
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
      <h2>Charitable Activity <img src={charityIcon} className="icon" alt="cash" /></h2>
      <h4>Activity: {data.activity}</h4>
      <h4>Number of Participants: {data.participants}</h4>
      <h4>Price: {data.price*10}</h4>
      <p>Price is scaled 0-10, with 0 being free.</p>
      <h4>Accessibility: {data.accessibility*10}</h4>
      <p>Accessibility is scaled 0-10, with 0 being most accessible.</p>
      </div>
  );
}

export default Charitable;
