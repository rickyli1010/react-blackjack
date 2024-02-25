import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

import './App.css';
import Hands from './components/Hands';
import Controls from './components/Controls';
import * as api from './api';
import { dealHands } from './actions/playerHand';
import { Card } from './types';

function App() {
  // const dispatch = useDispatch();

  const [deckId, setDeckId] = useState('9dvj4zhacnn4'); // forTesting
  // const [playerHand, setplayerHand] = React.useState<Hand>();

  const handleStart = async () => {
    if (!deckId.length) {
      const { data } = await api.newDeck();
      setDeckId(data?.deck_id);
    } else {
      const { data } = await api.shuffleAll(deckId);
      // dispatch(dealHands(deckId));
    }
  };

  const handleHit = async () => {};

  return (
    <div className="flex justify-center">
      <div className="m-10 w-[1000px]">
        <div className="border-4">
          <Hands title={'Dealer'} />
          <Hands title={'You'} />
        </div>

        <Controls handleStart={handleStart} handleHit={handleHit} />
      </div>
    </div>
  );
}

export default App;
