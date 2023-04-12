import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function Activities() {
    fetch("http://www.boredapi.com/api/activity/")
    .then((res) => {
      return res.json();
    })
    .then((object) => {
      console.log(object);
    })
    .catch((err) => {
      console.error(err);
    })
  }

  return (
    <div className="App">
      <Activities />
    </div>
  )
}

export default App;
