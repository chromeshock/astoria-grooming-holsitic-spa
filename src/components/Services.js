// services.js
import React from 'react';
import ServiceRow from './ServicesRow';
import descriptions from './Descriptions';


const services = [
    { name: 'Clean Ears', price: '$15', duration: '15 min', descriptions: ''},
    { name: 'Paws Clean', price: '$20', duration: '30 min', description: '' },
    { name: 'Extra Desheading', price: '$15', duration: '30 min', description: '' },
    { name: 'Face Trim', price: '$20', duration: '30 min', description: '' },
    { name: 'Cut nails', price: '$30', duration: '30 min', description: '' },
    { name: 'Nails Clipper dogs', price: '$15', duration: '10 min', description: ''},  
    { name: 'Cats kitty lion cut', price: '$120', duration: '2 hours', description: descriptions.item1  },
    { name: 'Paws Clean', price: '$20', duration: '30 min', description: descriptions.item2 },
    { name: 'Extra Desheading', price: '$15', duration: '30 min', description: '' },
    { name: 'Face Trim', price: '$20', duration: '30 min', description: '' },
    { name: 'Cut nails', price: '$30', duration: '30 min', description: '' },
    { name: 'Nails Clipper dogs', price: '$15', duration: '10 min', description: '' },    
    // ... more services
];

const ServicesComponent = () => (
    <div className="services-table">
        <div className="service-header">
            <div className="service-name">Service Name</div>
            <div className="service-price">Price</div>
            <div className="service-duration">Duration</div>
            <div className="service-description">Description</div>
        </div>
        {services.map(service => (
            <ServiceRow key={service.name} {...service} />
        ))}
    </div>
);

export default ServicesComponent;
