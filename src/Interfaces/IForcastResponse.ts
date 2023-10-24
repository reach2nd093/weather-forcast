import ILocation from './ILocation';
import ICurrentWeather from './ICurrentWeather';
import ICondition from './ICondition';

export interface AstroInterface {
  sunrise: string;
  sunset: string;
}
export interface HourInterface {
  time: string;
  temp_c: number;
  condition: ICondition;
}
export interface Day {
  mintemp_c: number;
  maxtemp_c: number;
  condition: ICondition;
  hour: Array<HourInterface>;
}
export interface ForcastDay {
  astro: AstroInterface;
  day: Day;
}

interface ForcastResponse {
  location: ILocation;
  current: ICurrentWeather;
  forecast: ForcastDay[];
}

export default ForcastResponse;
