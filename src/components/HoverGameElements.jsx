import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import HoverGameElement from './HoverGameElement';
import { arrayFromNumber } from '../helpers/arrayFromNumber';

const StyledHoverGameElements = styled.div`
  .row {
    display: flex;
  }
`;

function HoverGameElements() {
  const gameState = useSelector((state) => state.gameState.gameState);
  const modeValue = useSelector((state) => state.modeValue.modeValue);
  const squares = arrayFromNumber(modeValue);

  return (
    <StyledHoverGameElements>
      {gameState && squares.map((row) => (
        <div key={row} id={`r${row} `} className="row">
          {squares.map((col) => (
            <HoverGameElement key={col} index={col} />
          ))}
        </div>
      ))}
    </StyledHoverGameElements>
  );
}

export default HoverGameElements;
