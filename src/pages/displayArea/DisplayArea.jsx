import React, { useContext } from 'react';

import './displayarea.css';

import { ApiDataContext } from '../../components/dataProvider/DataProvider';

import PlanetsMovement from '../../components/planetMovement/PlanetsMovement';
import Comet from '../../components/spaceObjects/Comet';

const DisplayArea = () => {
  const { planetaryData, isActive } = useContext(ApiDataContext);
  {
    planetaryData.length
      ? console.log(planetaryData[0].name)
      : console.log('not found');
  }

  return (
    <div className='display-main-cnt'>
      <div className='display-main-information-cnt'>
        {' '}
        {planetaryData.length ? (
          <div className='display-information-cnt'>
            <div className='display-data-cnt'>
              <div className='display-header-cnt'>
                <h1 className='data-hd'>{planetaryData[0].name}</h1>
              </div>
              <div className='display-planet-fact-cnt'>
                <p className='data'>
                  <strong className='title'>
                    Temperature of the Host star:{' '}
                  </strong>
                  {planetaryData[0].host_star_temperature} K
                </p>
                <p className='data'>
                  <strong className='title'>Complete Revolution: </strong>
                  {planetaryData[0].period} Earth days
                </p>
                <p className='data'>
                  {' '}
                  <strong className='title'>Mass: </strong>{' '}
                  {planetaryData[0].mass} jupiter
                </p>
                <p className='data'>
                  <strong className='title'> Radius: </strong>
                  {planetaryData[0].radius * 69911}km
                </p>
                <p className='data'>
                  <strong className='title'>Surface temperature: </strong>
                  {planetaryData[0].temperature - 273} Celcius
                </p>
              </div>
            </div>
          </div>
        ) : !isActive && planetaryData.length == 0 ? (
          <div className='display-err-cnt'>
            <h1 className='display-err-msg'>No data found</h1>
          </div>
        ) : null}
      </div>
      <div className='display-comet-cnt'>
        <Comet />
      </div>
      <div className='display-planet-cnt'>
        <PlanetsMovement />
      </div>
    </div>
  );
};

export default DisplayArea;
