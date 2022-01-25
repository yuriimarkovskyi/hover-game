const initialState = {};

const SET_MODES = 'SET_MODES';

export const modesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MODES:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export const setModesAction = (payload) => ({ type: SET_MODES, payload });
