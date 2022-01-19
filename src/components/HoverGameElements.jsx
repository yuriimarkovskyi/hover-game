import React from 'react';
import {useSelector} from 'react-redux';
import HoverGameElement from './HoverGameElement';

const HoverGameElements = () => {
  const gameState = useSelector(state => state.gameState.gameState);
  const modeValue = useSelector(state => state.modeValue.modeValue);

  return (
    <div className="hover-game-elements">
      {gameState
        ? [...Array(modeValue)].map((row, index) =>
          <div key={index} id={`r${index + 1} `} className="hover-game-elements__row">
            {[...Array(modeValue)].map((col, index) =>
              <HoverGameElement key={index} item={col} index={index}/>,
            )}
          </div>,
        ) : null}
    </div>
  );
};

export default HoverGameElements;