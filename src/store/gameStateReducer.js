const initialState = {
  gameState: false,
};

const SET_GAME_STATE = 'SET_GAME_STATE';

export const gameStateReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_GAME_STATE:
      return { ...state, gameState: !state.gameState };

    default:
      return state;
  }
};

export const setGameStateAction = () => ({ type: SET_GAME_STATE });
