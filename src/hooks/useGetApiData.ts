import { useState, useEffect } from 'react';
import IForcastResponse from '../Interfaces/IForcastResponse';

export interface IApiResponse {
  data: any;
  error: any;
  loading: Boolean;
}

export const useGetApiData = (searchParam: string | null): IApiResponse => {
  const [data, setData] = useState<IForcastResponse>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getAPIData = async () => {
      setLoading(true);
      await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=bd3cbb44ddf44d4699730255231910&q=${searchParam}&days=10&aqi=no&alerts=no`,
      )
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch(() => setError(error));
      setLoading(false);
    };
    getAPIData();
  }, [searchParam]);

  return { data, error, loading };
};
