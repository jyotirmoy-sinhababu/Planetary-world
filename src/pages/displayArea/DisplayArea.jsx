import React, { useContext } from 'react';

import './displayarea.css';

import { ApiDataContext } from '../../components/dataProvider/DataProvider';

import PlanetsMovement from '../../components/planetMovement/PlanetsMovement';

const DisplayArea = () => {
  const { planetaryData } = useContext(ApiDataContext);
  {
    planetaryData.length
      ? console.log(planetaryData[0].name)
      : console.log('not found');
  }

  return (
    <div className='display-main-cnt'>
      <div className='display-data-cnt'>
        {' '}
        {planetaryData.length ? (
          <div className='display-information-cnt'>
            <div>
              <div>
                <h1 className='data'>{planetaryData[0].name}</h1>
              </div>
              <div>
                <p className='data'>
                  {planetaryData[0].mass * ((1.898 * 10) ^ 27)}kg
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className='display-err-cnt'>
            <h1 className='display-err-msg'>No data found</h1>
          </div>
        )}
      </div>

      <div className='display-planet-cnt'>
        <PlanetsMovement />
      </div>
    </div>
  );
};

export default DisplayArea;
