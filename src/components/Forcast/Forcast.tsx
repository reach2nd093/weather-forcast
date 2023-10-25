import React, { useEffect, useState } from 'react';

import ForcastDetails from '../ForcastDetails/ForcastDetails';
import IForcastResponse from '../../Interfaces/IForcastResponse';

import './Forcast.css';

const Forcast = () => {
  const [forcastData, setForcastData] = useState<IForcastResponse | null>(null);

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
    <>
      {forcastData ? (
        <div className="forcast">
          <main className="current-forcast">
            <div className="main-wrapper">
              <ForcastDetails
                title="Today's weather"
                currentWeather={forcastData?.current}
                currentLocation={forcastData?.location}
                selectedDay={forcastData?.forecast?.forecastday[0]}
              />
            </div>
          </main>
          <section className="weekly-forcast">
            <div className="weekly-wrapper">
              <h3 className="widget-title">Weekly weather</h3>
            </div>
          </section>
        </div>
      ) : (
        <>Loading</>
      )}
    </>
  );
};

export default Forcast;
