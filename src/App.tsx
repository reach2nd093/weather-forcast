import React, { useState, ChangeEvent } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Forcast from './components/Forcast/Forcast';
import DaySpecificForcast from './components/DaySpecificForcast/DaySpecificForcast';
import Search from './components/Search/Search';
import InitialLocation from './components/InitialLocation/InitialLocation';
import Error from './components/Error/Error';

import './App.css';

function App() {
  const [searchString, setSearchString] = useState<string>('');
  const navigate = useNavigate();

  const [city, setCity] = useState<string | null>(localStorage.getItem('city'));

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchString(searchFieldString.trim());
    navigate('/');
  };

  const handleInitialCity = (city: string) => {
    localStorage.setItem('city', city);
    setCity(city);
  };

  return (
    <div className="app">
      <h1 className="app-title">Weather Forcast</h1>

      {city ? (
        <>
          <Search onChangeHandler={onSearchChange} />
          <Routes>
            <Route path="/" element={<Forcast searchString={searchString} />} />
            <Route path="/day-specific" element={<DaySpecificForcast />} />
            <Route path="/error" element={<Error />} />
          </Routes>
        </>
      ) : (
        <InitialLocation setCityToLocalStorage={handleInitialCity} />
      )}
    </div>
  );
}

export default App;
