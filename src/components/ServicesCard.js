import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from'react';
import Fade from '@mui/material/Fade';
import { useTranslation } from 'react-i18next';
import pawImage from '../facility-images/pawImage.png';


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
          <Typography  sx={{ fontSize: '30px' }}> 
            {t(service.name)}
          </Typography>
          <Typography  className='price-text' sx={{ fontSize: '26px' }}>
           {t(service.price)} - {t(service.duration)}
          </Typography>
          <img src={pawImage} alt={pawImage} className='paw-print ' />
           <Typography className='color-text' sx={{ fontSize: '24px' }}>
           {t(service.details)}
          </Typography>
          <Fade in={isExpanded} timeout={500}>
            <Typography  >
              <p className='txt-formatted'>{t(service.descriptions)}</p>
                <a href="https://grooming-spa-2275-27-street-astoria-11105.square.site/" //redirects to processing site
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => { alert('You will be redirected to an external site for processing...'); }}>
                Book Now
                </a>
            </Typography>
          </Fade>
        </CardContent>
      </Card>
      

    </div>
    
  );
}

export default ServiceCard;
