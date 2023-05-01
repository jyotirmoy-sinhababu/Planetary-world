import React, { useContext } from 'react';

import { ApiDataContext } from '../../components/dataProvider/DataProvider';

const DisplayArea = () => {
  const { planetaryData } = useContext(ApiDataContext);

  return <div></div>;
};

export default DisplayArea;
