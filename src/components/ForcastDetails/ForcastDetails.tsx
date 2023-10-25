import React from 'react';

import ICurrentWeather from '../../Interfaces/ICurrentWeather';
import ILocation from '../../Interfaces/ILocation';
import { IForcastDay } from '../../Interfaces/IForcastResponse';

import './ForcastDetails.css';

interface IForcastDetailsProps {
  title: string;
  currentWeather?: ICurrentWeather;
  currentLocation?: ILocation;
  selectedDay?: IForcastDay;
}

const ForcastDetails = ({
  title,
  currentWeather,
  currentLocation,
  selectedDay,
}: IForcastDetailsProps) => {
  return (
    <>
      <div className="forcast-details-title">{title}</div>
      <div className="forcast-details-wrapper">
        <div className="forcast-details-icon">
          <img src={`https:${currentWeather?.condition?.icon}`} alt="img" />
          <p>{currentWeather?.condition?.text}</p>
        </div>
        <div className="forcast-details-location">
          <div className="forcast-details-temprature">
            {currentWeather?.temp_c}°
            <p>
              ( {selectedDay?.day.mintemp_c}° / {selectedDay?.day.maxtemp_c}° )
            </p>
          </div>
          <div className="forcast-details-city">
            <h3>{currentLocation?.name}</h3>
            <p>
              {currentLocation?.region} - {currentLocation?.country}
            </p>
          </div>
        </div>
        <div className="forcast-details-hourly-wrapper">
          <div className="forcast-details-24-hours">24-hour forcast</div>
          <div className="forcast-details-hourly">
            {selectedDay?.hour.map((hour) => {
              const { temp_c, condition, time } = hour;
              var newTime = new Date(time);
              return (
                <div className="forcast-details-hour" key={time}>
                  <p>
                    {newTime.toLocaleString('en-US', {
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true,
                    })}
                  </p>
                  <img src={`https:${condition?.icon}`} alt="img" />
                  <p className="forcast-details-hour-temprature">{temp_c}°</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ForcastDetails;
