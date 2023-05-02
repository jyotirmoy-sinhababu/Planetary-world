import React from 'react';

import './home.css';

import DisplayArea from '../displayArea/DisplayArea';
import Nav from '../../components/nav/Nav';

const Home = () => {
  return (
    <div className='home-cnt'>
      <Nav />
      <DisplayArea />
    </div>
  );
};

export default Home;
