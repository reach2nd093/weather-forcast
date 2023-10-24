import ICondition from './ICondition';

interface ICurrentWeather {
  temp_c: number;
  condition: ICondition;
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

export default ICurrentWeather;
