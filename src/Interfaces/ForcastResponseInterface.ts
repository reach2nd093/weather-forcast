import LocationInterface from './LocationInterface';
import CurrentWeatherInterface from './CurrentWeatherInterface';
import ConditionInterface from './ConditionInterface';

interface Astro {
  sunrise: string;
  sunset: string;
}
interface Hour {
  time: string;
  temp_c: number;
  condition: ConditionInterface;
}
interface Day {
  mintemp_c: number;
  maxtemp_c: number;
  condition: ConditionInterface;
  hour: Array<Hour>;
}
interface ForcastDay {
  astro: Astro;
  day: Day;
}

interface ForcastResponseInterface {
  location: LocationInterface;
  current: CurrentWeatherInterface;
  forecast: ForcastDay[];
}

export default ForcastResponseInterface;
