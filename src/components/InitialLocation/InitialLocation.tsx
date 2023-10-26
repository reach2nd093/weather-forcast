import { useState } from 'react';

import './InitialLocation.css';

interface InitialCityProps {
  setCityToLocalStorage: (city: string) => void;
}

const InitialLocation = ({ setCityToLocalStorage }: InitialCityProps) => {
  const [city, setCity] = useState<string>('');

  const handleChange = (value: string) => {
    setCity(value);
  };

  const handleSave = () => {
    if (city.length) {
      setCityToLocalStorage(city);
    } else {
      alert('Please enter the city name');
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
      <br />
      <button value="Save" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};
export default InitialLocation;
