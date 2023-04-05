import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Router from './Routes/router';

function App() {
  return (
    <div className="App">
      <MemoryRouter>
        <Router />
      </MemoryRouter>
    </div>
  );
}

export default App;
