import React from 'react';
import { useLocation } from 'react-router-dom';
import ForcastDetails from '../ForcastDetails/ForcastDetails';
import DaySpecificForcastItems from './DaySpecificForcastItems/DaySpecificForcastItems';
import './DaySpecificForcast.css';

function DaySpecificForcast() {
  const location = useLocation();
  const { selectedDay, currentLocation } = location.state;

  return (
    <div className="day-specific-forcast">
      <div className="day-specific-details">
        <ForcastDetails
          title={`Weather for : ${selectedDay.date}`}
          currentWeather={selectedDay.day}
          currentLocation={currentLocation}
          selectedDay={selectedDay}
          specificDay
        />
      </div>
      <div className="day-specific-extra-details">
        <DaySpecificForcastItems day={selectedDay} />
      </div>
    </div>
  );
}

export default DaySpecificForcast;
