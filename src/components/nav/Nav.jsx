import React from 'react';

const Nav = () => {
  return (
    <div>
      <h1> Planetary World</h1>
      <form>
        <input
          className='search-field'
          type='search'
          name='planetName'
          placeholder='use only planets name'
        />
      </form>
    </div>
  );
};

export default Nav;
