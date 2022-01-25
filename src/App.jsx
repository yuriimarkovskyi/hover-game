import React from 'react';
import styled from 'styled-components';
import HoverGameHeader from './components/HoverGameHeader';
import HoverGameBody from './components/HoverGameBody';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

function App() {
  return (
    <StyledApp>
      <div>
        <HoverGameHeader />
        <HoverGameBody />
      </div>
    </StyledApp>
  );
}

export default App;
