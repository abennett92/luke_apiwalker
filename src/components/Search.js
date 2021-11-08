import React, { useState } from 'react';
import { useHistory } from "react-router-dom";


const Search = () => {

    const [requestInfo, setRequestInfo] = useState({ category: "people", id: "" });
    const history = useHistory();

    const changeHandler = (e) => {
        setRequestInfo({
            ...requestInfo,
            [e.target.name]: e.target.value
        });
    }

    const sendRequest = (e) => {
        e.preventDefault();
        history.push(`/${requestInfo.category}/${requestInfo.id}`);
    }


    return <div>
        <h2>Which results are you looking for?</h2>
        <form onSubmit={sendRequest}>
            <label>Search for: </label>
            <select name="category" onChange={(e) => changeHandler(e)}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <label> ID: </label>
            <input name="id" type="text" onChange={(e) => changeHandler(e)}></input>
            <input type="submit" value="Search" />
        </form>
    </div>
}


export default Search;