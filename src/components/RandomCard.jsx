import React from "react";

function RandomCard() {

    return (
        <div className="card" style={{width: "18rem"}}>
            <img src="https://b.zmtcdn.com/data/pictures/3/19428023/c260aad8f4abdd8217525209e6cae49b.jpg" class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default RandomCard;