import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import HoverGameElements from './HoverGameElements';
import HoverGameSidebar from './HoverGameSidebar';

const StyledHoverGameBody = styled.div`
  display: flex;
  column-gap: 60px;
`;

function HoverGameBody() {
  const gameState = useSelector((state) => state.gameState.gameState);
  const modeValue = useSelector((state) => state.modeValue.modeValue);

  return (
    <StyledHoverGameBody>
      <HoverGameElements />
      {gameState && modeValue ? <HoverGameSidebar /> : null}
    </StyledHoverGameBody>
  );
}

export default HoverGameBody;
