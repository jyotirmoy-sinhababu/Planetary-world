import axios from 'axios';
import { createContext } from 'react';
import { useState } from 'react';

const ApiDataContext = createContext();

const ApiProvider = ({ children }) => {
  const [planetaryData, setPlanetaryData] = useState();
  const [searchInput, setSearchInput] = useState();

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://planets-by-api-ninjas.p.rapidapi.com/v1/planets',
      params: { name: 'Mars' },
      headers: {
        'X-RapidAPI-Key': 'ad1a068f96msh324f7c4f3d2d637p177632jsn800d1f15a6b6',
        'X-RapidAPI-Host': 'planets-by-api-ninjas.p.rapidapi.com',
      },
    };

    try {
      await axios.request(options).then((res) => {
        setPlanetaryData(res.data);
      });
    } catch (err) {
      console.log('error');
    }
  };
  return (
    <ApiDataContext.Provider value={{ planetaryData, setSearchInput }}>
      {children}
    </ApiDataContext.Provider>
  );
};

export default ApiProvider;
