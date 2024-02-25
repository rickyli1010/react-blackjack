import React from 'react';

const Hands = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-center m-4 text-white">
      <p className="text-center">{title}</p>
      <div className="flex justify-center flex-wrap">
        <img
          className="w-[120px] m-1 py-4 px-2"
          src={'https://deckofcardsapi.com/static/img/5S.png'}
          alt={'test'}
        />
        <img
          className="w-[120px] m-1 py-4 px-2"
          src={'https://deckofcardsapi.com/static/img/5S.png'}
          alt={'test'}
        />
        <img
          className="w-[120px] m-1 py-4 px-2"
          src={'https://deckofcardsapi.com/static/img/5S.png'}
          alt={'test'}
        />
        <img
          className="w-[120px] m-1 py-4 px-2"
          src={'https://deckofcardsapi.com/static/img/5S.png'}
          alt={'test'}
        />
        <img
          className="w-[120px] m-1 py-4 px-2"
          src={'https://deckofcardsapi.com/static/img/5S.png'}
          alt={'test'}
        />
        <img
          className="w-[120px] m-1 py-4 px-2"
          src={'https://deckofcardsapi.com/static/img/5S.png'}
          alt={'test'}
        />
        <img
          className="w-[120px] m-1 py-4 px-2"
          src={'https://deckofcardsapi.com/static/img/5S.png'}
          alt={'test'}
        />
        {/* <img
          className="w-[120px] m-1 py-4 px-2"
          src={'https://deckofcardsapi.com/static/img/5S.png'}
          alt={'test'}
        /> */}
      </div>
    </div>
  );
};

export default Hands;
