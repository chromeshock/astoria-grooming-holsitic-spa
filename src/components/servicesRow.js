import React, { useState } from "react";

const ServiceRow = ({ name, price, description }) => {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div className="service-row" onClick={() => setShowDescription(!showDescription)}>
            <div className="service-name">{name}</div>
            <div className="service-price">{price}</div>
            <div className="service-description">{showDescription ? description : 'Click to view description'}</div>
        </div>
    );
};

export default ServiceRow;
