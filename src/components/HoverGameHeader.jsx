import React from 'react';
import HoverGameAppModes from './HoverGameAppModes';
import HoverGameButton from './HoverGameButton';

const HoverGameHeader = () => {
  return (
    <div className="hover-game-header">
      <HoverGameAppModes/>
      <HoverGameButton/>
    </div>
  );
};

export default HoverGameHeader;