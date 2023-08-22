import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from'react';


function ServiceCard({ service }) {
  const [isExpanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`card-container ${isExpanded ? 'expanded' : ''}`} onClick={handleExpand}>
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
          {isExpanded && (
            <Typography variant="body2" color="textSecondary">
              <p>{service.descriptions}</p>
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default ServiceCard;
