import React from 'react';

const Controls = ({ handleHit, handleStart, handleStand }) => {
  return (
    <div className="flex m-10 justify-center">
      <div className="flex gap-10">
        <button
          onClick={handleHit}
          className="bg-white text-yellow-700 font-bold p-2 rounded-full w-40 outline-none"
        >
          Hit
        </button>
        <button
          onClick={handleStand}
          className="bg-white text-yellow-700 font-bold p-2 rounded-full w-40 outline-none"
        >
          Stand
        </button>
        <button
          onClick={handleStart}
          className="bg-white text-yellow-700 font-bold p-2 rounded-full w-40 outline-none"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Controls;
