import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Hands from './components/Hands';
import Controls from './components/Controls';
import { dealPlayer } from './actions/hands';
import { playerStand, startGame } from './actions/game';

function App() {
  const dispatch = useDispatch();
  const { playerHand, dealerHand, playerScore, dealerScore } = useSelector(
    (state) => state.hands
  );
  const { winner } = useSelector((state) => state.game);
  // const { deckId } = useSelector((state) => state.deck);

  const handleStart = async () => {
    await dispatch(startGame());
  };

  const handleHit = async () => {
    await dispatch(dealPlayer());
  };

  const handleStand = async () => {
    await dispatch(playerStand());
  };

  return (
    <div className="flex justify-center">
      <div className="m-10 w-[1000px]">
        <div className="border-4">
          <Hands cards={dealerHand} score={dealerScore} title={'Dealer'} />
          <Hands cards={playerHand} score={playerScore} title={'You'} />
        </div>

        <div className="m-5 min-h-6 text-white text-center">{winner}</div>
        <Controls
          handleStart={handleStart}
          handleHit={handleHit}
          handleStand={handleStand}
        />
      </div>
    </div>
  );
}

export default App;
