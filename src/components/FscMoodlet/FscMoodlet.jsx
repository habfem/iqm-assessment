import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './FscMoodlet.css';

const FscMoodlet = ({ type = 'F', displayMode = 'letter', initialState = 'required' }) => {
  const [state, setState] = useState(initialState);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile/touch devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // State transitions
  const handleLeftClick = () => {
    if (state !== 'not required') {
      setState(prev => {
        switch (prev) {
          case 'required': return 'current';
          case 'current': return 'completed';
          case 'completed': return 'required';
          default: return prev;
        }
      });
    }
  };

  // Long press for right click on mobile
  const [pressTimer, setPressTimer] = useState(null);

  const handleTouchStart = () => {
    if (isMobile && (state === 'required' || state === 'not required')) {
      setPressTimer(setTimeout(() => {
        setState(prev => prev === 'not required' ? 'required' : 'not required');
      }, 500));
    }
  };

  const handleTouchEnd = () => {
    clearTimeout(pressTimer);
  };

  // Display logic
  const getDisplayText = () => {
    if (displayMode === 'word') {
      switch (type) {
        case 'F': return isMobile ? 'FUEL' : 'FUELLING';
        case 'S': return isMobile ? 'SERV' : 'SERVICING';
        case 'C': return isMobile ? 'CLN' : 'CLEANING';
        default: return type;
      }
    }
    return type;
  };

  const getStateClass = () => {
    switch (state) {
      case 'not required': return 'inactive';
      case 'required': return 'primary';
      case 'current': return 'active';
      case 'completed': return 'completed';
      default: return '';
    }
  };

  return (
    <div 
      className={`fsc-moodlet ${getStateClass()} ${displayMode} ${isMobile ? 'mobile' : ''}`}
      onClick={handleLeftClick}
      onContextMenu={(e) => {
        e.preventDefault();
        if (state === 'required' || state === 'not required') {
          setState(prev => prev === 'not required' ? 'required' : 'not required');
        }
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      title={`${type} - ${state}`}
      aria-label={`${type} status: ${state}`}
    >
      {getDisplayText()}
    </div>
  );
};

FscMoodlet.propTypes = {
  type: PropTypes.oneOf(['F', 'S', 'C']).isRequired,
  displayMode: PropTypes.oneOf(['letter', 'word']),
  initialState: PropTypes.oneOf(['not required', 'required', 'current', 'completed'])
};

export default FscMoodlet;