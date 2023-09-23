import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from'react';
import Fade from '@mui/material/Fade';
import { useTranslation } from 'react-i18next';

// hooks for component state management
function ServiceCard({ service }) {
  const { t } = useTranslation();
  const [isExpanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!isExpanded);
    console.log(isExpanded);
  };

  return (
    <div className={`card-container ${isExpanded ? 'expanded' : ''}`} onClick={handleExpand}>
      <Card variant="outlined">
        <CardContent>
          <Typography  sx={{ fontSize: '1.5rem' }}> 
            {t(service.name)}
          </Typography>
          <Typography  className='price-text' sx={{ fontSize: '1.1rem' }}>
           {t(service.price)} - {t(service.duration)}
          </Typography>
           <Typography className='description-text' sx={{ fontSize: '1rem' }}>
           {t(service.details)}
          </Typography>
          <Fade in={isExpanded} timeout={500}>
            <Typography  >
              <p className='txt-formatted'>{t(service.descriptions)}</p>
            </Typography>
          </Fade>
        </CardContent>
      </Card>
      

    </div>
    
  );
}

export default ServiceCard;
