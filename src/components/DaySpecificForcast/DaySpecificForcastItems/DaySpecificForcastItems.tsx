import './DaySpecificForcastItems.css';
import { IForcastDay } from '../../../Interfaces/IForcastResponse';

interface IDaySpecificForcastItemsProps {
  day: IForcastDay;
}

const DaySpecificForcastItems = ({ day }: IDaySpecificForcastItemsProps) => {
  return (
    <div className="day-specific">
      <div className="item day-specific-sunrise">
        <p>Sunrise</p>
        <p>{day.astro.sunrise}</p>
      </div>
      <div className="item day-specific-sunset">
        <p>Sunset</p>
        <p>{day.astro.sunset}</p>
      </div>
      <div className="item day-specific-humidity">
        <p>humidity</p>
        <p>{day.day.avghumidity}</p>
      </div>
      <div className="item day-specific-uv">
        <p>UV index</p>
        <p>{day.day.uv}</p>
      </div>
      <div className="item day-specific-wind">
        <p>Wind Speed</p>
        <p>{day.day.maxwind_kph} km/h</p>
      </div>
      <div className="item day-specific-visibility">
        <p>Visibility</p>
        <p>{day.day.avgvis_km} km</p>
      </div>
      <div className="item day-specific-perception">
        <p>Perception</p>
        <p>{day.day.totalprecip_mm} mm</p>
      </div>
      <div className="item day-specific-temp">
        <p>Avg. Temprature</p>
        <p>{Math.round(day.day.avgtemp_c)}°</p>
      </div>
    </div>
  );
};

export default DaySpecificForcastItems;
