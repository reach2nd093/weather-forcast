import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Forcast from './components/Forcast/Forcast';
import DaySpecificForcast from './components/DaySpecificForcast/DaySpecificForcast';

import './App.css';

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Weather Forcast</h1>
      <div>Search box will be placed here</div>
      <Routes>
        <Route path="/" element={<Forcast />} />
        <Route path="/day-specific" element={<DaySpecificForcast />} />
      </Routes>
    </div>
  );
}

export default App;
