import axios from 'axios';
import { createContext } from 'react';
import { useState } from 'react';

export const ApiDataContext = createContext();

const ApiProvider = ({ children }) => {
  const [planetaryData, setPlanetaryData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://planets-by-api-ninjas.p.rapidapi.com/v1/planets',
      params: { name: `${searchInput.planetName}` },
      headers: {
        'X-RapidAPI-Key': 'ad1a068f96msh324f7c4f3d2d637p177632jsn800d1f15a6b6',
        'X-RapidAPI-Host': 'planets-by-api-ninjas.p.rapidapi.com',
      },
    };

    try {
      await axios.request(options).then((res) => {
        if (res.status == 200) {
          setPlanetaryData(res.data);
          console.log('called');
          console.log(res);
        } else {
          setPlanetaryData('No data found');
          console.log(planetaryData);
        }
      });
    } catch (err) {
      console.log('error');
    }
  };
  return (
    <ApiDataContext.Provider
      value={{ searchInput, planetaryData, setSearchInput, fetchData }}
    >
      {children}
    </ApiDataContext.Provider>
  );
};

export default ApiProvider;
