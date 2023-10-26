import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ForcastDetails from '../ForcastDetails/ForcastDetails';
import WeeklyForcast from '../WeeklyForcast/WeeklyForcast';
import Loader from '../Loader/Loader';
import IForcastResponse, { IForcastDay } from '../../Interfaces/IForcastResponse';

import { useGetApiData, IApiResponse } from '../../hooks/useGetApiData';
import './Forcast.css';

interface IForcastProps {
  searchString: string;
}
const Forcast = ({ searchString }: IForcastProps) => {
  const [forcastData, setForcastData] = useState<IForcastResponse>();
  const navigate = useNavigate();

  const locationCity = localStorage.getItem('city');
  const searchParam = searchString.length ? searchString : locationCity;

  // call to the hook
  const { data, loading }: IApiResponse = useGetApiData(searchParam);

  useEffect(() => {
    setForcastData(data);
  }, [data]);

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
      {forcastData && !loading ? (
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
