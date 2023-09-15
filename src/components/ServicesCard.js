import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import { useTranslation } from 'react-i18next';


function ServiceCard({ service }) {
  const [isExpanded, setExpanded] = useState(false);
 const { t } = useTranslation(); // Get the translation function
  const handleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`card-container ${isExpanded ? 'expanded' : ''}`} onClick={handleExpand}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: '2.3rem' }}>
            {t(service.name)}  {/* Translate the service name */}
          </Typography>
          <Typography className='price-text' sx={{ fontSize: '1.8rem' }}>
             {t(service.price)} - {t(service.duration)}  {/* Translate the price and duration */}
          </Typography>
          <Typography className='description-text' sx={{ fontSize: '1.8rem' }}>
            {t(service.details)}  {/* Translate the details */}
          </Typography>
          <Fade in={isExpanded} timeout={500}>
            <Typography sx={{ fontSize: '1.2rem' }}>
              {t(service.descriptions)}  {/* Translate the descriptions */}
            </Typography>
          </Fade>
          
        </CardContent>
      </Card>
    </div>
  );
}

export default ServiceCard;
