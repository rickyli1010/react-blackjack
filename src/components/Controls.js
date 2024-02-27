import React from 'react';
import { useSelector } from 'react-redux';

const Controls = ({ handleHit, handleStart, handleStand }) => {
  const { playerHand, dealerHand, playerScore } = useSelector(
    (state) => state.hands
  );
  const { winner } = useSelector((state) => state.game);

  return (
    <div className="flex m-10 justify-center">
      <div className="flex gap-10">
        <button
          disabled={
            !playerHand.length ||
            !dealerHand.length ||
            playerScore > 21 ||
            winner.length
          }
          onClick={handleHit}
          className={`bg-white text-yellow-700 font-bold p-2 rounded-full w-40 outline-none ${
            !playerHand.length ||
            !dealerHand.length ||
            playerScore > 21 ||
            winner.length
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-gray-100'
          }`}
        >
          Hit
        </button>
        <button
          disabled={!playerHand.length || !dealerHand.length || winner.length}
          onClick={handleStand}
          className={`bg-white text-yellow-700 font-bold p-2 rounded-full w-40 outline-none ${
            !playerHand.length || !dealerHand.length || winner.length
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-gray-100'
          }`}
        >
          Stand
        </button>
        <button
          onClick={handleStart}
          className="bg-white text-yellow-700 font-bold p-2 rounded-full w-40 outline-non hover:bg-gray-100"
        >
          {winner.length ? 'Again' : 'Start'}
        </button>
      </div>
    </div>
  );
};

export default Controls;
