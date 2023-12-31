import React, { useState, useEffect } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import useScroll from './UseScroll';


function Gallery() {
const [images, setImages] = useState([]); 
const [hoveredIndex, setHoveredIndex] = useState(null); // keep track of which image is currently being hovered over
// Dynamically import images from the directory

//usestate for arrow icon
const [showScroll, scrollToTop] = useScroll();

  useEffect(() => {
    const importAllImages = (r) => r.keys().filter(path => !path.includes('facility-images')).map(r);
    const imgs = importAllImages(require.context('../images', false, /\.(jpg)$/));
    setImages(imgs);
  }, []);

return (
      <div className='gallery-container'>
        <h1 className='client-header'>Our Clients</h1>
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
        <div className={`up-arrow ${showScroll ? 'show' : ''}`} onClick={scrollToTop}>
        <ArrowUpwardIcon />
      </div>
      </div>
    );
  }

export default Gallery;