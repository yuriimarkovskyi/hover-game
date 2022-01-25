import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { coordinatesReducer } from './coordinatesReducer';
import { gameStateReducer } from './gameStateReducer';
import { modesReducer } from './modesReducer';
import { modeValueReducer } from './modeValueReducer';

const rootReducer = combineReducers({
  coordinates: coordinatesReducer,
  gameState: gameStateReducer,
  modes: modesReducer,
  modeValue: modeValueReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
