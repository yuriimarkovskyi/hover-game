const initialState = {
  coordinates: [],
  coordinatesState: false,
};

const GET_COORDINATES = 'GET_COORDINATES';
const RESET_COORDINATES = 'RESET_COORDINATES';
const DELETE_COORDINATES = 'DELETE_COORDINATES';

export const coordinatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COORDINATES:
      return {...state, coordinates: [...state.coordinates, action.payload]};

    case RESET_COORDINATES:
      return {...state, coordinates: [], coordinatesState: !state.coordinatesState};

    case DELETE_COORDINATES:
      const filteredCoordinates = state.coordinates.filter(coordinate => coordinate !== action.payload);

      return {...state, coordinates: filteredCoordinates};

    default:
      return state;
  }
};

export const getCoordinatesAction = payload => ({type: GET_COORDINATES, payload});
export const resetCoordinatesAction = () => ({type: RESET_COORDINATES});
export const deleteCoordinatesAction = payload => ({type: DELETE_COORDINATES, payload});