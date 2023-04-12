import { useState } from 'react';
import Activities from './components/activities';

function Header(props) {
    const [category, setCategory] = useState("");
    const [parts, setParts] = useState("");
    const [price, setPrice] = useState("");
    const [access, setAccess] = useState("");

    return (
        <div>
            <h1>Bored?</h1>
            <p>Let's find an activity for you.</p>
            <form id="form">
                <div class="form-group">
                    <label htmlFor="activityType">Choose Category</label>
                    <select 
                    name="category" 
                    id="category"
                    value={category}
                    onChange = {(e) => setCategory(e.target.value)} >

                    </select>
                </div>
                <div class="form-group">
                    <label htmlFor="activityType">Choose Activity Type</label>
                    <select 
                    name="aType" 
                    id="aType"
                    value={type}
                    onChange = {(e) => setType(e.target.value)} >
                        
                    </select>
                </div>
                <div class="form-group">
                    <label htmlFor="activityType">Choose Activity Type</label>
                    <select 
                    name="aType" 
                    id="aType"
                    value={type}
                    onChange = {(e) => setType(e.target.value)} >
                        
                    </select>
                </div>
                <div class="form-group">
                    <label htmlFor="activityType">Choose Activity Type</label>
                    <select 
                    name="aType" 
                    id="aType"
                    value={type}
                    onChange = {(e) => setType(e.target.value)} >
                        
                    </select>
                </div>
            </form>
        </div>
    )


}