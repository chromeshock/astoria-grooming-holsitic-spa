import React, { useState } from "react";

const ServiceRow = ({ name, price, duration, description }) => {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div className="service-row" onClick={() => setShowDescription(!showDescription)}>
            <div className="service-name">{name}</div>
            <div className="service-price">{price}</div>
            <div className="service-duration">{duration}</div>
            <div className="service-description">{showDescription ? <p>{description}</p>  : 'Click to view description'}</div>
        </div>
    );
};

export default ServiceRow;