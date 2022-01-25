import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledHoverGameSidebar = styled.div`
  .title {
    margin-bottom: 10px;
  }

  .list {
    display: flex;
    overflow: auto;
    flex-direction: column;
    height: 85vh;
    row-gap: 10px;

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #c0c0c0;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 15px;
      background: #000000;
    }
  }

  .list-element {
    font-size: 18px;
    padding: 10px 20px;
    text-transform: uppercase;
    color: #ffffff;
    background: #515cc6;
  }
`;

function HoverGameSidebar() {
  const coordinates = useSelector((state) => state.coordinates.coordinates);

  return (
    <StyledHoverGameSidebar>
      <h1 className="title">
        Hovered squares
      </h1>
      {coordinates.length
        ? (
          <ul className="list">
            {coordinates.map((coordinate) => (
              <li key={coordinate} className="list-element">
                {coordinate}
              </li>
            ))}
          </ul>
        )
        : (
          <p className="list-element">
            Hover something!
          </p>
        )}
    </StyledHoverGameSidebar>
  );
}

export default HoverGameSidebar;
