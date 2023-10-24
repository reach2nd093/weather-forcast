import React, { useEffect, useState } from 'react';
import ForcastResponseInterface from '../../Interfaces/ForcastResponseInterface';

import './Forcast.css';

function Forcast() {
  const [forcastData, setForcastData] = useState<ForcastResponseInterface | null>(null);

  return (
    <div className="forcast">
      <main className="current-forcast">
        <div className="main-wrapper">
          <h3 className="widget-title">Today's weather</h3>
        </div>
      </main>
      <section className="weekly-forcast">
        <div className="weekly-wrapper">
          <h3 className="widget-title">Weekly weather</h3>
        </div>
      </section>
    </div>
  );
}

export default Forcast;
