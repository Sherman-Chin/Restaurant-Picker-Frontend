import React from "react";
import axios from "axios";

function RandomCard(props) {
    const data = {
        "cuisine": props.cuisine,
        "establishment": props.establishment,
        "category": props.category
    };

    function generateRestaurant() {
        axios.post("http://localhost:5000/", data)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    }


    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://b.zmtcdn.com/data/pictures/3/19428023/c260aad8f4abdd8217525209e6cae49b.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button className="btn btn-primary" type="submit" onClick={generateRestaurant}>Go somewhere</button>
            </div>
        </div>
    );
};

export default RandomCard;