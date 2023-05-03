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
      <div>
        {' '}
        {planetaryData.length ? (
          <div className='display-information-cnt'>
            <div>
              <div>
                <h1>{planetaryData[0].name}</h1>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1>No data found</h1>
          </div>
        )}
      </div>

      <div className='planet-cnt'>
        <PlanetsMovement />
      </div>
    </div>
  );
};

export default DisplayArea;
