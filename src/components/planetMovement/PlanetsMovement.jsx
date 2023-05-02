import React from 'react';

import './planetsMovement.css';

import imgone from '../../assests/imgone.jpg';

const PlanetsMovement = () => {
  return (
    <div className='main-solar-system'>
      <div class='solar-system'>
        <div id='sun'></div>

        <div class='orbit mercury-orbit'></div>
        <div class='mercury-spin'>
          <div id='mercury'></div>
        </div>

        <div class='orbit venus-orbit'></div>
        <div class='venus-spin'>
          <div id='venus'></div>
        </div>

        <div class='orbit earth-orbit'></div>
        <div class='earth-spin'>
          <div class='orbit moon-orbit'></div>
          <div class='moon-spin'>
            <div id='moon'></div>
          </div>

          <img id='earth' src={imgone} />
        </div>

        <div class='orbit mars-orbit'></div>
        <div class='mars-spin'>
          <div id='mars'></div>
        </div>
        <div className='orbit jupiter-orbit'></div>
        <div className='jupiter-spin'>
          <div id='jupiter'></div>
        </div>
      </div>
    </div>
  );
};

export default PlanetsMovement;
