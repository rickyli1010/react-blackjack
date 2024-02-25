import React from 'react';

const Controls = () => {
  return (
    <div className="flex m-10 justify-center">
      <div className="flex gap-10">
        <button className="bg-white text-yellow-700 font-bold p-2 rounded-full w-40 outline-none">
          Hit
        </button>
        <button className="bg-white text-yellow-700 font-bold p-2 rounded-full w-40 outline-none">
          Stand
        </button>
        <button className="bg-white text-yellow-700 font-bold p-2 rounded-full w-40 outline-none">
          Start
        </button>
      </div>
    </div>
  );
};

export default Controls;
