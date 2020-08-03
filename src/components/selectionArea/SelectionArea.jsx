import React, {useState} from "react";
import Card from "./Card";
import axios from "axios";

function SelectionArea() {
    var cuisines = [];
    var establishments = [];
    var categories = [];

    function getData(param) {
        axios.get("http://localhost:5000/" + param, {crossdomain: true})
        .then(response => {
            if (param === "cuisines") {
                cuisines.push(response.data);
            } 
            else if (param === "establishments") {
                establishments.push(response.data);
            } else if (param === "categories") {    
                categories.push(response.data);
            } else {
                console.log("Did not get data");
            }
        });
    }
    getData("cuisines");
    getData("establishments");
    getData("categories");

    return (
        <div>
           <Card list={cuisines} listName="cuisine" />
           <Card list={establishments} listName="establishment" />
           <Card list={categories} listName="category" /> 
        </div>
    );
};

export default SelectionArea;