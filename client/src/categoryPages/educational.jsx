import { useState, useEffect } from "react";

function Educational() {
  const [data, setData] = useState({});

  function getEduActivity() {
    fetch("https://www.boredapi.com/api/activity/?type=education")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setData(result);
      })
      .catch((err) => {
        console.error(err);
        throw new Error("Something went wrong - failed to fetch.");
      });
  }

  useEffect(() => {
    getEduActivity();
  }, []);

  return (
    <div>
      <h2>Educational Activity</h2>
      {data.map((activity) => {
        return (
          <div key={activity.key}>
            <h3>{activity.activity}</h3>
            <h4>{activity.type}</h4>
            <h4>{activity.participants}</h4>
            <h4>{activity.price}</h4>
            <h4>{activity.accessibility}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Educational;
