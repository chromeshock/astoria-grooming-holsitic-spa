import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ServiceCard({ service }) {
  return (
    <div className="card-container">
      <div className="card-flip">
        <div className="card-front">
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">
                {service.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className="card-back">
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">
                More Details
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {service.details}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}


export default ServiceCard;
