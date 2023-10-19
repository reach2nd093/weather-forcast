import React from 'react';
import { Routes, Route } from 'react-router-dom';

import CurrentForcast from './components/CurrentForcast/CurrentForcast';
import DaySpecificForcast from './components/DaySpecificForcast/DaySpecificForcast';

import './App.css';

function App() {
  return (
    <div className="app">
      Weather forcast
      <div>Search box will be placed here</div>
      <Routes>
        <Route path="/" element={<CurrentForcast />} />
        <Route path="/day-specific" element={<DaySpecificForcast />} />
      </Routes>
    </div>
  );
}

export default App;
