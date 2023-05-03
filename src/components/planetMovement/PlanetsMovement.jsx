import React from 'react';

import './planetsMovement.css';

import imgone from '../../assests/imgone.jpg';

const PlanetsMovement = () => {
  return (
    <div className='main-solar-system'>
      <div className='solar-system'>
        <div id='sun'></div>

        <div className='orbit mercury-orbit'></div>
        <div className=' mercury-spin'>
          <div id='mercury'></div>
        </div>

        <div className='orbit venus-orbit'></div>
        <div className=' venus-spin'>
          <div id='venus'></div>
        </div>

        <div className='orbit earth-orbit'></div>
        <div className=' earth-spin'>
          <div className='orbit moon-orbit'></div>
          <div className='moon-spin'>
            <div id='moon'></div>
          </div>

          <img id='earth' src={imgone} />
        </div>

        <div className='orbit mars-orbit'></div>
        <div className=' mars-spin'>
          <div id='mars'></div>
        </div>
        <div className='orbit jupiter-orbit'></div>
        <div className=' jupiter-spin'>
          <div id='jupiter'></div>
        </div>
      </div>
    </div>
  );
};

export default PlanetsMovement;
