import BgImage from '../images/bg1.jpg';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function HeadBg() {
  let bgStyle = {
    height: '70vh',
    width: '100vw',
    objectFit: 'cover',
    filter: 'brightness(0.4)',
    marginTop: '0',
    backgroundRepeat: 'no-repeat',
    zIndex: '-1',
    overflow: 'hidden',
  };

  const containerStyle = {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
  };

  const h3Style = {
    position: 'absolute',
    bottom: '20px', // Adjust this value to set the margin below the text
    left: '50%',
    transform: 'translateX(-50%)',
    color: 'gray', // Change the color to gray
  };

  const location = useLocation();

  return (
    <div style={containerStyle}>
      <img className='img-fluid' style={bgStyle} alt='' src={BgImage} />
      <h3 style={h3Style}>regalsway {location.pathname}</h3>
    </div>
  );
}
