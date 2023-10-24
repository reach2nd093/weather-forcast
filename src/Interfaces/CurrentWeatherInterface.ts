import ConditionInterface from './ConditionInterface';

interface CurrentWeatherInterface {
  temp_c: number;
  condition: ConditionInterface;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  vis_km: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export default CurrentWeatherInterface;
