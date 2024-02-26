export const playerStand = () => async (dispatch) => {
  try {
    dispatch({ type: 'PLAYER_STAND' });
    dispatch(calculateResult());
  } catch (error) {
    console.log(error.message);
  }
};

// export const dealerTurn = () => async (dispatch, getState) => {
//   let { dealerScore } = await getState().hands;
//   while (dealerScore < 17) {
//     await dispatch(dealDealer());
//     dealerScore = await getState().hands?.dealerScore;
//   }

//   await dispatch(calculateResult());
// };

export const calculateResult = () => async (dispatch, getState) => {
  const { playerScore, dealerScore } = await getState().hands;
  if (playerScore > 21) {
    dispatch({ type: 'DEALER_WIN' });
  } else if (dealerScore > 21) {
    dispatch({ type: 'PLAYER_WIN' });
  } else if (playerScore === dealerScore) {
    dispatch({ type: 'PUSH' });
  } else if (playerScore > dealerScore) {
    dispatch({ type: 'PLAYER_WIN' });
  } else {
    dispatch({ type: 'DEALER_WIN' });
  }
};
