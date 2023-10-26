import { useState, useEffect } from 'react';
import IForcastResponse from '../Interfaces/IForcastResponse';
import { useNavigate } from 'react-router-dom';

export interface IApiResponse {
  data: any;
  loading: Boolean;
}
interface IError {
  code: number;
  message: string;
}

export const useGetApiData = (searchParam: string | null): IApiResponse => {
  const [data, setData] = useState<IForcastResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleRedirection = (error: IError) => {
      navigate('/error', {
        state: {
          error: error,
        },
      });
    };
    const getAPIData = async () => {
      setLoading(true);
      await fetch(
        `${process.env.REACT_APP_API}/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${searchParam}&days=10&aqi=no&alerts=no`,
      )
        .then((response) => response.json())
        .then((json) => (json.error ? handleRedirection(json.error) : setData(json)))
        .catch((error) => {
          navigate('/error', {
            state: {
              error: error,
            },
          });
        });
      setLoading(false);
    };
    getAPIData();
  }, [searchParam]);

  return { data, loading };
};
