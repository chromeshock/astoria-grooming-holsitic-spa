import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from'react';
import Fade from '@mui/material/Fade';

function ServiceCard({ service }) {
  const [isExpanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!isExpanded);
    console.log(isExpanded);
  };

  return (
    <div className={`card-container ${isExpanded ? 'expanded' : ''}`} onClick={handleExpand}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div"  sx={{ fontSize: '2.4rem' }}> 
            <p>{service.name}</p>
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ fontSize: '1.5rem' }}>
           <p>{service.price} - {service.duration}</p>
          </Typography>
         
           <Fade in={isExpanded} timeout={500}>
            <Typography variant="body2" color="textSecondary" >
              <p className='txt-formatted'>{service.descriptions}</p>
            </Typography>
          </Fade>
           <Typography variant="body2" component="div" className='description-text' sx={{ fontSize: '1.5rem' }}>
           <p>{service.details}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ServiceCard;