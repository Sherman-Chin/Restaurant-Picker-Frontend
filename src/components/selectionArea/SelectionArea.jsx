import React, {useState} from "react";
import Card from "./Card";
// import axios from "axios";

function SelectionArea() {
    return (
        <div style={{textAlign: "center"}}>
            <Card listName="cuisines" />
            <Card listName= "establishments" />
            <Card listName="categories" /> 
        </div>
    );
};

export default SelectionArea;