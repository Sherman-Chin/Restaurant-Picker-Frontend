import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
var randomedRestaurant;

function RandomCard(props) {
    const [restaurants, setRestaurants] = useState(undefined);
    const restaurantGenerated = useRef(false);

    const data = {
        "cuisine": props.cuisine,
        "establishment": props.establishment,
        "category": props.category
    };

    function generateRestaurant() {
        axios.post("http://localhost:5000/", data)
            .then(res => {
                setRestaurants(res.data);
            }).catch(err => {
                console.log(err);
            });
        restaurantGenerated.current = true;
    }
    function randomise() {
        randomedRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    }

    if (restaurantGenerated.current === true) {
        randomise();
        console.log(randomedRestaurant);
    }

    useEffect(() => {
        restaurantGenerated.current = false;
    })

    return (
        <div className="card" style={{ width: "18rem" }}>
            {randomedRestaurant !== undefined ? <div><img src={randomedRestaurant.restaurant.thumb} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{randomedRestaurant.restaurant.name}</h5>
                    <p className="card-text">Average cost for two: ${randomedRestaurant.restaurant.average_cost_for_two}</p>
                    <p className="card-text">Ratings: {randomedRestaurant.restaurant.user_rating.aggregate_rating}</p>
                    <p className="card-text">Contact number: {randomedRestaurant.restaurant.phone_numbers}</p>
                    <p className="card-text">Address: {randomedRestaurant.restaurant.location.address}</p>
                    <button className="btn btn-dark" type="submit" onClick={generateRestaurant}>Get Another Restaurant!</button>
                </div></div> : <button className="btn btn-dark" type="submit" onClick={generateRestaurant}>Get Restaurant!</button>}
        </div>
    );
};

export default RandomCard;