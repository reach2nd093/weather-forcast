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
        `${process.env.REACT_APP_API}/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${searchParam}&days=10&aqi=no&alerts=no`,
      )
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch(() => setError(error));
      setLoading(false);
    };
    getAPIData();
  }, [searchParam, setLoading, setError, setData]);

  return { data, error, loading };
};
