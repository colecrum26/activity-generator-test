import { useEffect } from "react";

function Categories() {
  async function getCategories() {
    try {
      const url = `http://www.boredapi.com/api/activity/?type=${type}`;
      let res = await fetch(url);
      let activityData = await res.json();
      console.log(activityData);
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong - failed to fetch.");
    }
  }
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div></div>
  )
}

export default Categories;
