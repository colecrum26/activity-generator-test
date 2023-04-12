import { useState, useEffect } from 'react';

const url = 'http://www.boredapi.com/api/activity/';

function Activities(props) {
    const [list, setList] = useState([]);
    const [searchActivity, setsearchActivity] = useState("");

async function getActivities() {
    try {
    let response = await fetch(url);
    const result = await response.json();
    } catch (error) {
        console.error (error);
        throw new Error("Something went wrong - failed to fetch.")
        }
    }
}

export default Activities;