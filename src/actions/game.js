export const playerStand = () => async (dispatch) => {
  try {
    dispatch({ type: 'PLAYER_STAND' });
    console.log('player stand');
  } catch (error) {
    console.log(error.message);
  }
};
