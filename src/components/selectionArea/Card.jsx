import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";

//Try removing crossdomain
function Card(props) {
    const [data, setData] = useState([]);
    var newData = [];
    async function getData() {
        const response = await axios.get("http://localhost:5000/" + props.listName, {crossdomain: true});
        return response.data;
    }

    function dataSelected(Object) {
        props.handleChange(Object);
    }

    if (data === undefined || data.length === 0) {
        getData().then(data => setData(data));
    } else {
        if (props.listName === "cuisines") {
            newData = data.map(({cuisine: {cuisine_name: value,...rest}}) => ({
                value, 
                label: value,
                ...rest
            }));
        } else if (props.listName === "establishments") {
            newData = data.map(({establishment: {name: value,...rest}}) => ({
                value, 
                label: value,
                ...rest
            }));
        } else if (props.listName === "categories") {
            newData = data.map(({categories: {name: value,...rest}}) => ({
                value, 
                label: value,
                ...rest
            }));
        }
    }


    return (
        <div className="card">
            <p className="cardText">{props.listName}</p>
            <Select options={newData} isMulti onChange={dataSelected}/>
        </div>
        );
};

export default Card;