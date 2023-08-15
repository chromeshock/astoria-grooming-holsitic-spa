import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function ServiceCard({ service }) {
  return (
    <Card variant="outlined" style={{ marginBottom: '16px' }}>
      <CardContent>
        <Typography variant="h5" component="div" className="service-description-text">
          {service.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" className="service-description-text">
          {service.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;