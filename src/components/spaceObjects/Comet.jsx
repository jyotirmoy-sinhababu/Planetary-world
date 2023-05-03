import React from 'react';

import './cometStyle.css';

import comet from '../../assests/comet.png';

const Comet = () => {
  return (
    <div className='solar-comet-cnt'>
      {' '}
      <div className='solar-comet-cnt'>
        <img src={comet} className='comet-img' />
      </div>
    </div>
  );
};

export default Comet;
