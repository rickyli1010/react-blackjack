import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Hands from './components/Hands';
import Controls from './components/Controls';
import * as api from './api';
import { dealStartingHands, dealPlayer } from './actions/hands';
import { startGame, shuffleAll } from './actions/deck';

function App() {
  const dispatch = useDispatch();
  const { playerHand, dealerHand } = useSelector((state) => state.hands);
  const { deckId } = useSelector((state) => state.deck);

  const handleStart = async () => {
    await dispatch(startGame(deckId));
    await dispatch(dealStartingHands(deckId));
  };
  const handleHit = async () => {
    await dispatch(dealPlayer());
  };

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
