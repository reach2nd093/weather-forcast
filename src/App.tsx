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

  return (
    <div className="app">
      <h1 className="app-title">Weather Forcast</h1>
      <Search onChangeHandler={onSearchChange} />
      <Routes>
        <Route path="/" element={<Forcast />} />
        <Route path="/day-specific" element={<DaySpecificForcast />} />
      </Routes>
    </div>
  );
}

export default App;
