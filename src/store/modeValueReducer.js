const initialState = {
  modeValue: 0,
};

const SET_MODE_VALUE = 'SET_MODE_VALUE';

export const modeValueReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MODE_VALUE:
      return { ...state, modeValue: action.payload };

    default:
      return state;
  }
};

export const setModeValueAction = (payload) => ({ type: SET_MODE_VALUE, payload });
