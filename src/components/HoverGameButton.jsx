import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setGameStateAction} from '../store/gameStateReducer';
import {resetCoordinatesAction} from '../store/coordinatesReducer';

const HoverGameButton = () => {
  const dispatch = useDispatch();
  const coordinates = useSelector(state => state.coordinates.coordinates);
  const gameState = useSelector(state => state.gameState.gameState);
  const modeValue = useSelector(state => state.modeValue.modeValue);

  const handleState = () => {
    dispatch(setGameStateAction());
  };

  const resetSquares = () => {
    dispatch(resetCoordinatesAction());
  };

  return (
    <>
      {!gameState
        ? <button
          className="hover-game-button"
          disabled={!modeValue || gameState}
          onClick={handleState}>

          Start
        </button>
        : <button
          className="hover-game-button"
          disabled={!coordinates.length}
          onClick={resetSquares}>

          Reset hovered squares
        </button>
      }
    </>
  );
};

export default HoverGameButton;