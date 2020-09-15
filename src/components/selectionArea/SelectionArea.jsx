import React, {useState} from "react";
import Card from "./Card";
import RandomCard from "../RandomCard";

function SelectionArea() {
    const [cuisines, setCuisines] = useState([]);
    const [establishments, setEstablishments] = useState([]);
    const [categories, setCategories] = useState([]);

    function handleCuisines (selectedOptions) {
        setCuisines(selectedOptions);
    };

    function handleEstablishments (selectedOptions) {
        setEstablishments(selectedOptions);
    };

    function handleCategories (selectedOptions) {
        setCategories(selectedOptions);
    };

    return (
        <div style={{textAlign: "center"}}>
            <Card listName="cuisines" handleChange={handleCuisines}/>
            <Card listName= "establishments" handleChange={handleEstablishments}/>
            <Card listName="categories" handleChange={handleCategories}/> 
            <RandomCard cuisine={cuisines} establishment={establishments} category={categories} />
        </div>
    );
};

export default SelectionArea;