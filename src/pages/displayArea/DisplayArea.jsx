import React, { useContext } from 'react';

import { ApiDataContext } from '../../components/dataProvider/DataProvider';

import PlanetsMovement from '../../components/planetMovement/PlanetsMovement';

const DisplayArea = () => {
  const { planetaryData } = useContext(ApiDataContext);

  return (
    <div>
      <div>
        <PlanetsMovement />
      </div>
    </div>
  );
};

export default DisplayArea;
