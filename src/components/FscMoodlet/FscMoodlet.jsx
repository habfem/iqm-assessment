import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './FscMoodlet.css';

const FscMoodlet = ({ type = 'F', displayMode = 'letter', initialState = 'required' }) => {
  const [state, setState] = useState(initialState);
  
  // Updated state cycle
  const stateCycle = {
    'not required': 'required', // Right click only from required
    'required': 'current',
    'current': 'completed',
    'completed': 'required' // Changed from current to required
  };
  
  const handleLeftClick = () => {
    if (state !== 'not required') {
      setState(stateCycle[state]);
    }
  };
  
  const handleRightClick = (e) => {
    e.preventDefault();
    // Only allow toggling not required when in required state
    if (state === 'required' || state === 'not required') {
      setState(state === 'not required' ? 'required' : 'not required');
    }
  };
  
  const getDisplayText = () => {
    if (displayMode === 'word') {
      switch (type) {
        case 'F': return 'FUELLING';
        case 'S': return 'SERVICING';
        case 'C': return 'CLEANING';
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
      className={`fsc-moodlet ${getStateClass()} ${displayMode}`}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
      title={`${type} - ${state}`}
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