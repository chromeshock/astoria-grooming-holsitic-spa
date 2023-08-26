// services.js
import React from 'react';
import ServiceCard from './ServicesCard';
import descriptions from './Descriptions';
//import descriptions from './Descriptions';


const services = [
    { name: 'Clean Ears', details: 'No further details', price: '$15', duration: '15 min', description: ''  },
    { name: 'Paws Clean', details: 'Cick for more details', price: '$20', duration: '30 min', descriptions: descriptions.catLionCut  },
    { name: 'Extra Desheading', details: 'No further details', price: '$15', duration: '30 min', description: '' },
    { name: 'Face Trim', details: 'No further details', price: '$20', duration: '30 min', description: '' },
    { name: 'Cat Claw Trim', details: 'No further details', price: '$30', duration: '30 min', description: descriptions.catLionCut  },
    { name: 'Nail Clipper for dogs',  details: 'Cick for more details', price: '$15', duration: '10 min', descriptions: '' },  
    { name: 'Cats kitty lion cut', details: 'Cick for more details',  price: '$120', duration: '2 hours', descriptions: descriptions.catLionCut  },
    { name: 'Face Trim', details: 'No further details', price: '$20', duration: '30 min', description: descriptions.catLionCut  },
    { name: 'Cats, Bath, Trim Nails, Clean Ears. Short Hair', details: 'Cick for more details', price: '$90', duration: '2 hours', descriptions: descriptions.rabiesCert  },   
    { name: 'Cats Long Hair', details: 'Cick for more details', price: '$100', duration: '2 hours', descriptions: descriptions.catsLongHair  },   
    { name: 'Cat classic for Kittens', details: 'Cick for more details', price: '$15', duration: '30 min', descriptions: descriptions.catLionCut  },   
    { name: 'Extra Dematting', details: 'Cick for more details', price: '$15', duration: '10 min', descriptions: descriptions.xtraDmat },   
    { name: 'Medium double coat', price: '$80', duration: '2 hours', description: descriptions.fullSpaDogs },   
    { name: 'Nails Clipper dogs', price: '$15', duration: '10 min', description: descriptions.catLionCut  },   
    { name: 'Full spa extra small dogs', price: '$70', duration: '2 hours', description: descriptions.fullSpaDogs }, 
    { name: 'Full groom spa small dogs', price: '$80', duration: '2 hours & 30 mins', description: descriptions.fullSpaDogs  }, 
    { name: 'Full groom spa medium dogs', price: '$90', duration: '3 hours', description: descriptions.fullSpaDogs  }, 
    { name: 'Full spa large dogs', price: '$100', duration: '3 hours', description: descriptions.fullSpaDogs  },
    { name: 'Full spa extra large dogs', price: '$120', duration: '4 hours', description: descriptions.fullSpaDogs  },
    { name: 'Full spa Double coat Large,', details: 'Cick for more details', price: '$100', duration: '2 hours', descriptions: descriptions.fullSpaDogs },
    { name: 'Dogs basic spa extra small (bath, clean the ears, trim the nails, blueberry facial)', price: '$55', duration: '1 hour', description: descriptions.fullSpaDogs  },
    { name: 'Dogs basic spa small short hair (bath , clean the ears , trim the nails , blueberry facial)', price: '$55', duration: '1 hour', description: descriptions.fullSpaDogs  },
    { name: 'Dogs basic spa medium short hair', price: '$65', duration: '1 hour', description: descriptions.fullSpaDogs },
    { name: 'Dogs basic spa large short hair', price: '$75', duration: '2 hours', description: descriptions.fullSpaDogs }, 
    { name: 'Dogs basic spa extra small', price: '$45', duration: '1 hours', description: descriptions.catLionCut  }, 
    { name: 'Dogs Basic spa xl dogs( bath , clean the ears trim the nails, blue berry facial)', price: '$85', duration: '2 hours', description: descriptions.fullSpaDogs },
    { name: 'Medium double coat', price: '$80', duration: '2 hours', description: descriptions.catLionCut  },
    { name: 'Dogs Basic small spa double coat (wash & dry, clean ears, trim nails, sanitary area and paws', price: '$65', duration: '1 hours', description: descriptions.fullSpaDogs },
    { name: 'Dogs Basic small spa long hair (wash & dry, clean ears, trim nails, sanitary area and paws', price: '$65', duration: '1 hours', description: descriptions.fullSpaDogs },
    { name: 'Dogs Basic extra small spa long hair (wash & dry, clean ears, trim nails, sanitary area and paws', price: '$65', duration: '1 hours', description: descriptions.fullSpaDogs },
    { name: 'Dogs Basic Extra small Double coat spa', price: '$65', duration: '1 hours', description: descriptions.fullSpaDogs }, 
    { name: 'Dogs Basic extra spa double coat', price: '$95', duration: '2 hours', description: descriptions.fullSpaDogs  }, 
    { name: 'Dogs Basic Extra large long hair', price: '$100', duration: '2 hours', description: descriptions.fullSpaDogs  }, 
    { name: 'Dogs Basic extra large double coat spa', price: '$95', duration: '2 hours', description: descriptions.catLionCut  }, 
    { name: 'Dogs Basic extra small spa double coat', price: '$70', duration: '2 hours', description: descriptions.catLionCut  }, 
    { name: 'Cocker Spaniel, Cavalier Charles Kings, Cookapoo Or Similares Mixes', price: '$90', duration: '2 hours', description: descriptions.fullSpaDogs  }, 
    { name: 'Boarding Services X 24 Hours', price: '$50', duration: '1 hour', description: descriptions.boarding24 }, 
    { name: 'Daycare Day/ dogs stay 9am to 7pm', price: '$30', duration: '1 hour', descriptions: descriptions.catLionCut },
    { name: 'Daycare half day/up to 5 hours', price: '$15', duration: '30 min', descriptions: descriptions.rabiesCert },
    { name: 'Cat Boarding/ 24 hours', price: '$50', duration: '1 hour', descriptions: descriptions.boarding24 },

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
