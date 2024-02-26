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
