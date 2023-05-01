import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://planets-by-api-ninjas.p.rapidapi.com/v1/planets',
      params: { name: 'Venus' },
      headers: {
        'X-RapidAPI-Key': 'ad1a068f96msh324f7c4f3d2d637p177632jsn800d1f15a6b6',
        'X-RapidAPI-Host': 'planets-by-api-ninjas.p.rapidapi.com',
      },
    };

    try {
      await axios.request(options).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
    } catch (err) {
      console.log('error');
    }
    console.log(process.env.REACT_APP_API_KEY);
  };
  return <div></div>;
};

export default Home;
