// services.js
import React from 'react';
import ServiceRow from './ServiceRow';

const services = [
    { name: 'Service 1', price: '$100', description: 'Description for Service 1' },
    { name: 'Service 2', price: '$200', description: 'Description for Service 2' },
    // ... more services
];

const ServicesComponent = () => (
    <div className="services-table">
        <div className="service-header">
            <div className="service-name">Service Name</div>
            <div className="service-price">Price</div>
            <div className="service-description">Description</div>
        </div>
        {services.map(service => (
            <ServiceRow key={service.name} {...service} />
        ))}
    </div>
);

export default ServicesComponent;
