export async function getCategories() {
    try {
      const url = `http://www.boredapi.com/api/activity/?type=${id}`;
      let res = await fetch(url);
      let activityData = await res.json();
      console.log(activityData);
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong - failed to fetch.");
    }

  useEffect(() => {
    getCategories();
  }, []);
}

