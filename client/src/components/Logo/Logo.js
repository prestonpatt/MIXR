import React from 'react';
import Tilt from 'react-tilt';
import cocktail from './shaker.png';
import Particles from 'react-particles-js';
import './Logo.css';

const particlesOptions = {
  particles: {
    number: {
      value: 130,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}

const Logo = () => {
  return (
    <div className='center ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 80 }} style={{ height: 200, width: 400 }} >
      <Particles className='particles' params={particlesOptions}/>
        <div className="Tilt-inner pa3">
          <img style={{paddingTop: '6px', width: 200, height: 150 }} alt='logo' src={cocktail}/>
          <div className="module mid"><h3>MIXR</h3></div>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;