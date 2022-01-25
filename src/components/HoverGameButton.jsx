import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGameStateAction } from '../store/gameStateReducer';
import { resetCoordinatesAction } from '../store/coordinatesReducer';
import Button from './UI/Button';

function HoverGameButton() {
  const dispatch = useDispatch();
  const coordinates = useSelector((state) => state.coordinates.coordinates);
  const gameState = useSelector((state) => state.gameState.gameState);
  const modeValue = useSelector((state) => state.modeValue.modeValue);

  const handleState = () => {
    dispatch(setGameStateAction());
  };

  const resetSquares = () => {
    dispatch(resetCoordinatesAction());
  };

  return (
    <Button
      onClick={!gameState ? handleState : resetSquares}
      disabled={!gameState ? (!modeValue || gameState) : !coordinates.length}
    >
      {!gameState ? 'Start' : 'Reset hovered squares'}
    </Button>
  );
}

export default HoverGameButton;
