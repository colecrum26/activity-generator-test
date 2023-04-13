
function Participants() {
  async function getPartis() {
    try {
      const url = `http://www.boredapi.com/api/activity?participants=${partis}`;
      let res = await fetch(url);
      let activityData = await res.json();
      console.log(activityData);
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong - failed to fetch.");
    }
  }
  useEffect(() => {
    getPartis();
  }, []);
}
