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
          <Typography sx={{ fontSize: '2rem' }}> 
            {service.name}
          </Typography>
          <Typography  className='price-text' sx={{ fontSize: '1.8rem' }}>
           {service.price} - {service.duration}
          </Typography>
           <Fade in={isExpanded} timeout={500}>
            <Typography  >
              <p className='txt-formatted '>{service.descriptions}</p>
            </Typography>
          </Fade>
           <Typography className='description-text' sx={{ fontSize: '1.5rem' }}>
           {service.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ServiceCard;
