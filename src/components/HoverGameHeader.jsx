import React from 'react';
import styled from 'styled-components';
import HoverGameAppModes from './HoverGameAppModes';
import HoverGameButton from './HoverGameButton';

const StyledHoverGameHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  column-gap: 10px;
`;

function HoverGameHeader() {
  return (
    <StyledHoverGameHeader>
      <HoverGameAppModes />
      <HoverGameButton />
    </StyledHoverGameHeader>
  );
}

export default HoverGameHeader;
