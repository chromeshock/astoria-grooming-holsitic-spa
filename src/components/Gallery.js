import React, { useState } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import pet1 from '../images/pet1.jpg';
import pet2 from '../images/pet2.jpg';
import pet3 from '../images/pet3.jpg';
import pet4 from '../images/pet4.jpg';
import pet5 from '../images/pet5.jpg';
import pet6 from '../images/pet6.jpg';
import pet7 from '../images/pet7.jpg';
import pet8 from '../images/pet8.jpg';
import pet9 from '../images/pet9.jpg';
import pet10 from '../images/pet10.jpg';
import pet11 from '../images/pet11.jpg';
import pet12 from '../images/pet12.jpg';

function Gallery() {
  const images = [ pet1, pet2, pet3, pet4, pet5, pet6, pet7, pet8, pet9, pet10, pet11, pet12];
  const [hoveredIndex, setHoveredIndex] = useState(null); // keep track of which image is currently being hovered over
    return (
      <div className='gallery-container'>
        <h1>Gallery</h1>
        <div className='image-grid'>
          {images.map((image, index) => (
            <div 
              key = {index} 
                className = {`image-item ${hoveredIndex === index ? 'enlarge' : 'dim' } `} // add the 'dim' class to all images that aren't currently being hovered over
                onMouseOver = {() => setHoveredIndex(index)}  // when this image is hovered over, update hoveredIndex to this image's index
                onMouseOut = {() => setHoveredIndex(null)} // when this image is no longer hovered over
                >
              <img src = {image} alt = {`Pet ${index + 1} `} />
        </div>
          ))}
        </div>
      </div>
    );
  }

export default Gallery;