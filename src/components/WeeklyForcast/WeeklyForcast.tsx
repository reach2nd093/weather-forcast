import { IForcastDay } from '../../Interfaces/IForcastResponse';

import './WeeklyForcast.css';

interface IWeeklyForcastProps {
  weeklyForcast: IForcastDay[];
}
const WeeklyForcast = ({ weeklyForcast }: IWeeklyForcastProps) => (
  <div className="weekly-forcast-wrapper">
    <div className="weekly-forcast-title">10-Days forcast</div>
    <div className="weekly-forcast-list">
      {weeklyForcast.map((weekDay, index) => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var d = new Date(weekDay.date);
        var dayName = days[d.getDay()];
        console.log(weekDay);
        return (
          <div className="weekly-forcast-item" key={weekDay.date}>
            <p className="weekly-forcast-date">{index === 0 ? 'Today' : dayName}</p>
            <img
              className="weekly-forcast-icon"
              src={`https:${weekDay.day.condition.icon}`}
              alt=""
            />
            <p className="weekly-forcast-temprature">
              {Math.round(weekDay.day.mintemp_c)}° - {Math.round(weekDay.day.maxtemp_c)}°
            </p>
          </div>
        );
      })}
    </div>
  </div>
);

export default WeeklyForcast;
