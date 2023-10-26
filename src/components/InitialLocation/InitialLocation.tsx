import { useState } from 'react';

import './InitialLocation.css';

interface InitialCityProps {
  setCityToLocalStorage: (city: string) => void;
}

const InitialLocation = ({ setCityToLocalStorage }: InitialCityProps) => {
  const [city, setCity] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const handleChange = (value: string) => {
    setError(false);
    setCity(value);
  };

  const handleSave = () => {
    if (city.length) {
      setCityToLocalStorage(city);
    } else {
      setError(true);
    }
  };

  return (
    <div className="initial-location">
      <p>Please provide the name of the city to discover the weather.</p>
      <input
        type="text"
        name="city_name"
        placeholder="Enter the city name"
        onChange={(e) => handleChange(e.target.value.trim())}
      />
      {error && <p className="city-error">Please provide default city name.</p>}
      {!error && <br />}
      <button value="Save" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};
export default InitialLocation;
