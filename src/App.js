import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Hands from './components/Hands';
import Controls from './components/Controls';
import * as api from './api';
import { dealStartingHands } from './actions/hands';

function App() {
  const dispatch = useDispatch();
  const { playerHand, dealerHand } = useSelector((state) => state.hands);

  const [deckId, setDeckId] = useState('9dvj4zhacnn4'); // forTesting
  // const [playerHand, setplayerHand] = useState([]);

  const handleStart = async () => {
    if (!deckId.length) {
      const { data } = await api.newDeck();
      setDeckId(data?.deck_id);
    } else {
      api.shuffleAll(deckId);
      await dispatch(dealStartingHands(deckId));
    }
  };
  const handleHit = async () => {};

  return (
    <div className="flex justify-center">
      <div className="m-10 w-[1000px]">
        <div className="border-4">
          <Hands cards={dealerHand} title={'Dealer'} />
          <Hands cards={playerHand} title={'You'} />
        </div>

        <Controls handleStart={handleStart} handleHit={handleHit} />
      </div>
    </div>
  );
}

export default App;
