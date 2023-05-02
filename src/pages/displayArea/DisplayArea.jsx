import React, { useContext } from 'react';

import './displayarea.css';

import { ApiDataContext } from '../../components/dataProvider/DataProvider';

import PlanetsMovement from '../../components/planetMovement/PlanetsMovement';

const DisplayArea = () => {
  const { planetaryData } = useContext(ApiDataContext);
  console.log(planetaryData.name);
  return (
    <div>
      <div>
        <div>
          <div>
            {planetaryData && (
              <h1 style={{ color: 'white' }}>{planetaryData.name}</h1>
            )}
          </div>
        </div>
      </div>
      <div className='planet-cnt'>
        <PlanetsMovement />
      </div>
    </div>
  );
};

export default DisplayArea;
