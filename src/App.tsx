import React from 'react';

import './App.css';
import Hands from './components/Hands';
import Controls from './components/Controls';

function App() {
  return (
    <div className="flex justify-center">
      <div className="m-10 w-[1000px]">
        <div className="border-4">
          <Hands title={'Dealer'} />
          <Hands title={'You'} />
        </div>

        <Controls />
      </div>
    </div>
  );
}

export default App;
