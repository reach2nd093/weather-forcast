import React, { useState, useEffect, ChangeEvent } from 'react';
import { Routes, Route } from 'react-router-dom';

import Forcast from './components/Forcast/Forcast';
import DaySpecificForcast from './components/DaySpecificForcast/DaySpecificForcast';
import Search from './components/Search/Search';
import InitialLocation from './components/InitialLocation/InitialLocation';
import './App.css';

function App() {
  const [searchString, setSearchString] = useState<string>('');
  const [city, setCity] = useState<string | null>(localStorage.getItem('city'));

  useEffect(() => {
    console.log(searchString);
  }, [searchString]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchString(searchFieldString.trim());
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
          </Routes>
        </>
      ) : (
        <InitialLocation setCityToLocalStorage={handleInitialCity} />
      )}
    </div>
  );
}

export default App;
