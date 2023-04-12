import { useState, useEffect } from 'react';

const url = 'http://www.boredapi.com/api/activity/';

function Activities() {
    fetch(url)
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

export default Activities;