import React from 'react';
import ServiceCard from './ServicesCard';
import descriptions from './Descriptions';

const services = [
    //1st row
        { name: 'Cat Claw Trim', details: 'No further details', price: '$30', duration: '30 min', descriptions:'' },
        { name: 'Nail Clipper for dogs',  details: 'No further details', price: '$15', duration: '10 min', descriptions: '' },  
        { name: 'Clean Ears', price: '$15', duration: '15 min', details: 'No further details', descriptions: ''  },
        { name: 'Paws Clean', details: 'Click for more details', price: '$20', duration: '30 min', descriptions: descriptions.fullSpaDogs  },
   //2nd row
        { name: 'Extra Desheading', details: 'No further details', price: '$15', duration: '30 min', descriptions: '' },
        { name: 'Face Trim', details: 'No further details', price: '$20', duration: '30 min', descriptions: '' },
        { name: 'Cats kitty lion cut', details: 'Click for more details',  price: '$120', duration: '2 hours', descriptions: descriptions.catLionCut },
        { name: 'Cat Services', details: 'Click for more details', price: '$90', duration: '2 hours', descriptions: descriptions.catServices },   
    //3rd row
        { name: 'Cats Long Hair', details: 'Click for more details', price: '$100', duration: '2 hours', descriptions: descriptions.catsLongHair  },   
        { name: 'Cat classic for Kittens', details: 'Click for more details', price: '$15', duration: '30 min', descriptions: descriptions.catLionCut  },   
        { name: 'Extra Dematting', details: 'Click for more details', price: '$15', duration: '10 min', descriptions: descriptions.xtraDmat },   
        { name: 'Medium double coat', details: 'Click for more details', price: '$80', duration: '2 hours', descriptions: descriptions.fullSpaDogs },   
    //4th row
        { name: 'Full spa extra small dogs',  details: 'Click for more details', price: '$70', duration: '2 hours', descriptions: descriptions.fullSpaDogs }, 
        { name: 'Full groom spa small dogs', details: 'Click for more details', price: '$80', duration: '2.5 hours', descriptions:   descriptions.fullSpaDogs  }, 
        { name: 'Full groom spa medium dogs', details: 'Click for more details', price: '$90', duration: '3 hours', descriptions: descriptions.fullSpaDogs  }, 
        { name: 'Full groom spa large dogs', details: 'Click for more details', price: '$100', duration: '3 hours', descriptions: descriptions.fullSpaDogs  },
    //5th row 
        { name: 'Full spa extra large dogs', details: 'Click for more details', price: '$120', duration: '4 hours', descriptions: descriptions.fullSpaDogs  },
        { name: 'Full spa Double coat Large', details: 'Click for more details', price: '$100', duration: '2 hours', descriptions:   descriptions.fullSpaDogs },
        { name: 'Dogs basic spa extra small', details: 'Click for more details', price: '$55', duration: '1 hour', descriptions: descriptions.fullSpaDogs  },
        { name: 'Dogs basic spa small short hair',  details: 'Click for more details', price: '$55', duration: '1 hour', descriptions:   descriptions.fullSpaDogs  },
    //6th row  
        { name: 'Dogs basic spa medium short hair',  details: 'Click for more details', price: '$65', duration: '1 hour', descriptions:  descriptions.fullSpaDogs },
        { name: 'Dogs basic spa large short hair',  details: 'Click for more details', price: '$75', duration: '2 hours', descriptions:  descriptions.fullSpaDogs }, 
        { name: 'Dogs Basic spa xl dogs', details: 'Click for more details', price: '$85', duration: '2 hours', descriptions: descriptions.fullSpaDogs },
        { name: 'Dogs Basic small spa double coat', details: 'Click for more details', price: '$65', duration: '1 hours', descriptions:  descriptions.fullSpaDogs },
    //7th row      
        { name: 'Dogs Basic small spa long hair', details: 'Click for more details', price: '$65', duration: '1 hours', descriptions:    descriptions.fullSpaDogs },
        { name: 'Dogs Basic extra small spa long hair', details: 'Click for more details', price: '$65', duration: '1 hours', descriptions:  descriptions.fullSpaDogs },
        { name: 'Dogs Basic extra small Double coat spa', details: 'Click for more details', price: '$65', duration: '1 hours', descriptions:    descriptions.fullSpaDogs }, 
        { name: 'Dogs Basic extra spa double coat', details: 'Click for more details', price: '$95', duration: '2 hours', descriptions:  descriptions.fullSpaDogs  }, 
     //8th row        
        { name: 'Dogs Basic Extra large long hair', details: 'Click for more details', price: '$100', duration: '2 hours', descriptions:     descriptions.fullSpaDogs  }, 
        { name: 'Dogs Basic extra large dog standard poodle and poddle mix spa', details: 'Click for more details', price: '$120', duration:     '4 hours', descriptions: descriptions.fullSpaDogs  }, 
        { name: 'Dogs Basic extra small spa double coat', details: 'Click for more details', price: '$70', duration: '2 hours', descriptions:    descriptions.fullSpaDogs  }, 
        { name: 'Cocker Spaniel, Cavalier Charles Kings, Cockapoo Or Similares Mixes', details: 'Click for more details', price: '$90',  duration: '2 hours', descriptions: descriptions.fullSpaDogs  }, 
        
    //9th row
        { name: 'Boarding Services X 24 Hours', details: 'Click for more details', price: '$50', duration: '1 hour', descriptions:   descriptions.boarding24 }, 
        { name: 'Day care Full Day dogs stay 9am to 7pm', details: 'Click for more details', price: '$30', duration: '1 hour', descriptions:  descriptions.fullSpaDogs },
        { name: 'Day Care half day/up to 5 hours', details: 'Click for more details', price: '$15', duration: '30 min', descriptions:     descriptions.rabiesCert },
        { name: 'Cat Boarding 24 hours', details: 'Click for more details', price: '$50', duration: '1 hour', descriptions: descriptions.boarding24 },

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
