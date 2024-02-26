export const calculateScore = (cards) => {
  let score = 0;
  for (let card of cards) {
    if (
      card.value === '10' ||
      card.value === 'JACK' ||
      card.value === 'QUEEN' ||
      card.value === 'KING'
    ) {
      score += 10;
    } else if (card.value === 'ACE') {
      score += 11;
    } else {
      score += Number(card.value);
    }
  }

  // calculate A for both 11 and 1
  cards
    .filter((card) => card.value === 'ACE')
    .forEach((card) => {
      if (score > 21) {
        score = score - 10;
      }
    });

  return score;
};

export const getPileString = (dealer, player) => {
  let arr = [];
  for (let card of dealer) {
    arr.push(card.code);
  }
  for (let card of player) {
    arr.push(card.code);
  }
  return arr.join(',');
};

export const checkHands = (dealer, player) => {
  for (let card of dealer) {
    if (card.code === player[0].code) {
      return true;
    }
  }
  return false;
};
