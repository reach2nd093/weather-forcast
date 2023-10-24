import React, { useEffect, useState } from 'react';
import ForcastResponseInterface from '../../Interfaces/ForcastResponseInterface';

import './Forcast.css';

function Forcast() {
  const [forcastData, setForcastData] = useState<ForcastResponseInterface | null>(null);

  const getAPIData = async () => {
    try {
      const apiResponse = await fetch(
        'http://api.weatherapi.com/v1/forecast.json?key=bd3cbb44ddf44d4699730255231910&q=Tsukuba&days=10',
      );
      const json = await apiResponse.json();
      setForcastData(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <div className="forcast">
      <main className="current-forcast">
        <div className="main-wrapper">
          <h3 className="widget-title">Today's weather</h3>
        </div>
      </main>
      <section className="weekly-forcast">
        <div className="weekly-wrapper">
          <h3 className="widget-title">Weekly weather</h3>
        </div>
      </section>
    </div>
  );
}

export default Forcast;
