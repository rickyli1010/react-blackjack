import React from 'react';

const Hands = ({ cards, title, score }) => {
  return (
    <div className="flex flex-col items-center m-4 text-white min-h-52">
      <p className="text-center">
        {title} {score > 0 && `(${score})`}
      </p>
      <div className="flex justify-center flex-wrap">
        {cards.length ? (
          cards.map((card) => (
            <img
              className="w-[120px] m-1 py-4 px-2"
              key={card.code}
              src={card.image}
              alt={card.code}
            />
          ))
        ) : (
          <>
            <img
              className="w-[120px] m-1 py-4 px-2"
              src="https://deckofcardsapi.com/static/img/back.png"
              alt="cardback"
            />
            <img
              className="w-[120px] m-1 py-4 px-2"
              src="https://deckofcardsapi.com/static/img/back.png"
              alt="cardback"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Hands;
