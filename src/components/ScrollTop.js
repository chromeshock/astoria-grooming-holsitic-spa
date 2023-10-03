import React, { useEffect, useState } from 'react';
import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {visible && (
        <Fab color="primary" size="small" aria-label="scroll back to top" onClick={scrollToTop}>
          <ArrowUpwardIcon />
        </Fab>
      )}
    </div>
  );
};

export default ScrollTop;
