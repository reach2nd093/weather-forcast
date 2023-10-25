import ILocation from './ILocation';
import ICurrentWeather from './ICurrentWeather';
import ICondition from './ICondition';

export interface IAstro {
  sunrise: string;
  sunset: string;
}
export interface IHour {
  time: string;
  temp_c: number;
  condition: ICondition;
}
export interface IDay {
  mintemp_c: number;
  maxtemp_c: number;
  condition: ICondition;
}
export interface IForcastDay {
  astro: IAstro;
  day: IDay;
  hour: IHour[];
}

interface ForcastResponse {
  location: ILocation;
  current: ICurrentWeather;
  forecast: {
    forecastday: IForcastDay[];
  };
}

export default ForcastResponse;
