// services.js
import React from 'react';
import ServiceCard from './ServicesCard';
import descriptions from './Descriptions';
//import descriptions from './Descriptions';


const services = [
    { name: 'Clean Ears', details: 'Cick for more details', price: '$15', duration: '15 min', descriptions:descriptions.item1 },
    { name: 'Paws Clean', price: '$20', duration: '30 min', descriptions: '' },
    { name: 'Extra Desheading', price: '$15', duration: '30 min', description: '' },
    { name: 'Face Trim', price: '$20', duration: '30 min', description: '' },
    { name: 'Cut nails', price: '$30', duration: '30 min', description: '' },
    { name: 'Nails Clipper dogs', price: '$15', duration: '10 min', description: ''},  
    { name: 'Cats kitty lion cut', price: '$120', duration: '2 hours', descriptions: ''  },
    { name: 'Face Trim', price: '$20', duration: '30 min', description: '' },
    { name: 'Cats, Bath, Trim Nails, Clean Ears. Short Hair', price: '$80', duration: '2 hours', description: '' },   
    { name: 'Cats, Long Hair, Bath, Trim Nails, Clean Ears, Sanitary area', price: '$100', duration: '2 hours', description: '' },   
    { name: 'Cat classic for Kittens', price: '$15', duration: '30 min', description: '' },   
    { name: 'Extra Dematting', price: '$15', duration: '10 min', description: '' },   
    { name: 'Medium double coat', price: '$80', duration: '2 hours', description: '' },   
    { name: 'Nails Clipper dogs', price: '$15', duration: '10 min', description: '' },   
    { name: 'Full spa extra small dogs', price: '$70', duration: '2 hours', description: '' }, 
    { name: 'Full groom spa small dogs', price: '$80', duration: '2 hours', description: '' }, 
    { name: 'Full groom spa medium dogs', price: '$90', duration: '2 hours', description: '' }, 
    { name: 'Full spa large dogs', price: '$100', duration: '3 hours', description: '' }, 
    { name: 'Dogs basic spa large short hair', price: '$75', duration: '2 hours', description: '' }, 
    { name: 'Dogs basic spa extra small', price: '$45', duration: '1 hours', description: '' }, 
    { name: 'Medium double coat', price: '$80', duration: '2 hours', description: '' }, 
    { name: 'Dogs Basic Extra small Double coat spa', price: '$65', duration: '1 hours', description: '' }, 
    { name: 'Dogs Basic extra large Double coat spa', price: '$95', duration: '2 hours', description: '' }, 
    { name: 'Dogs Basic extra small spa double coat', price: '$95', duration: '2 hours', description: '' }, 
    { name: 'Coker Spaniel, Cavalier Charles Kings, Cookapoo Or Similares Mixes', price: '$90', duration: '2 hours', description: '' }, 
    { name: 'Boarding Services X 24 Hours', price: '$50', duration: '1 hour', description: '' }, 
    { name: 'Daycare Day', price: '$30', duration: '1 hour', descriptions: ''},
    { name: 'Daycare Half Day', price: '$10', duration: '30 min', descriptions: ''},
    { name: 'Cat Boarding', price: '$30', duration: '1 hour', descriptions: ''},

    // ... more services
];

const ServicesComponent = () => (
    <div className="services-grid ">
        {services.map((service, index) => ( 
            <ServiceCard key={index} service={service} />
          ))}
    </div>
);

export default ServicesComponent;
