import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ForcastDetails from '../ForcastDetails/ForcastDetails';
import WeeklyForcast from '../WeeklyForcast/WeeklyForcast';
import Loader from '../Loader/Loader';
import IForcastResponse, { IForcastDay } from '../../Interfaces/IForcastResponse';

import './Forcast.css';

interface IForcastProps {
  searchString: string;
}
const Forcast = ({ searchString }: IForcastProps) => {
  const [forcastData, setForcastData] = useState<IForcastResponse | null>(null);
  const navigate = useNavigate();

  const locationCity = localStorage.getItem('city');
  const searchParam = searchString.length ? searchString : locationCity;

  useEffect(() => {
    const getAPIData = async () => {
      try {
        const apiResponse = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=bd3cbb44ddf44d4699730255231910&q=${searchParam}&days=10&aqi=no&alerts=no`,
        );
        const json = await apiResponse.json();
        setForcastData(json);
      } catch (error) {
        console.log(error);
      }
    };
    getAPIData();
  }, [searchParam]);

  const handleDetailsRedirect = (day: IForcastDay): void => {
    navigate('/day-specific', {
      state: {
        selectedDay: day,
        currentWeather: forcastData?.current,
        currentLocation: forcastData?.location,
      },
    });
  };
  return (
    <>
      {forcastData ? (
        <div className="forcast">
          <main className="current-forcast">
            <div className="main-wrapper">
              <ForcastDetails
                title="Today's weather"
                currentWeather={forcastData.current}
                currentLocation={forcastData.location}
                selectedDay={forcastData.forecast.forecastday[0]}
                specificDay={false}
              />
            </div>
          </main>
          <section className="weekly-forcast">
            <div className="weekly-wrapper">
              <WeeklyForcast
                weeklyForcast={forcastData.forecast.forecastday}
                handleRedirect={handleDetailsRedirect}
              />
            </div>
          </section>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Forcast;
