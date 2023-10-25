import React, { useState, useEffect, ChangeEvent } from 'react';
import { Routes, Route } from 'react-router-dom';

import Forcast from './components/Forcast/Forcast';
import DaySpecificForcast from './components/DaySpecificForcast/DaySpecificForcast';
import Search from './components/Search/Search';

import './App.css';

function App() {
  const [searchString, setSearchString] = useState<string>('');

  useEffect(() => {
    console.log(searchString);
  }, [searchString]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchString(searchFieldString);
  };

  const locationCity = localStorage.getItem('city');
  localStorage.setItem('city', 'Tsukuba');

  return (
    <div className="app">
      <h1 className="app-title">Weather Forcast</h1>

      {locationCity ? (
        <>
          <Search onChangeHandler={onSearchChange} />
          <Routes>
            <Route path="/" element={<Forcast />} />
            <Route path="/day-specific" element={<DaySpecificForcast />} />
          </Routes>
        </>
      ) : (
        <div className="app-initial-city">Add location asking here</div>
      )}
    </div>
  );
}

export default App;
