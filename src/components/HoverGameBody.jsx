import React from 'react';
import {useSelector} from 'react-redux';
import HoverGameElements from './HoverGameElements';
import HoverGameSidebar from './HoverGameSidebar';

const HoverGameBody = () => {
  const modeValue = useSelector(state => state.modeValue.modeValue);
  const gameState = useSelector(state => state.gameState.gameState);

  return (
    <div className="hover-game-body">
      <HoverGameElements/>
      {modeValue && gameState ? <HoverGameSidebar/> : null}
    </div>
  );
};

export default HoverGameBody;