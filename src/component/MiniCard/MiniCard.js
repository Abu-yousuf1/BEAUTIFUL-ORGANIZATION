import React from 'react';
import "./miniCard.css"

const MiniCard = (props) => {
    // Destructure.......................
    const { name, image } = props.child
    return (
        // Donation Mini Card display.........................
        <div className="d-flex bg-dark rounded-3 miniCard my-3">
            <img src={image} className="miniCard-img " alt="" />
            <h3 className="d-flex align-items-center text-light px-2 ">{name}</h3>
        </div>
    );
};

export default MiniCard;