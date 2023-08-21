import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from'react';

function ServiceCard({ service }) {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className="card-container" onClick= {handleFlip}>
      <div className={`card-flip ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <div className="service-card">
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" component="div">
                  <p>{service.name}</p>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                 <p>{service.price}</p>
                </Typography>
                <Typography variant="body2" color="textSecondary">
                 <p>{service.duration}</p>
                </Typography>
                <Typography variant="body2" component="div">
                 <p>{service.details}</p> 
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div> {/* This closing div tag was missing */}
        <div className="card-back">
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">
               <p>More Details</p> 
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <p>{service.descriptions}</p>
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
