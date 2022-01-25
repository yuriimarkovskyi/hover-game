import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { deleteCoordinatesAction, getCoordinatesAction } from '../store/coordinatesReducer';

const StyledHoverGameElement = styled.div`
  width: 50px;
  height: 50px;
  transition: .4s;
  border: 1px solid #c0c0c0;
  
  &.active {
    background: #61dafb;
  }
`;

function HoverGameElement({ index }) {
  const dispatch = useDispatch();
  const coordinates = useSelector((state) => state.coordinates.coordinates);
  const coordinatesState = useSelector((state) => state.coordinates.coordinatesState);
  const modeValue = useSelector((state) => state.modeValue.modeValue);
  const [hovered, setHovered] = useState(false);

  const toggleHovered = () => {
    setHovered(!hovered);
  };

  const setCoordinates = (e) => {
    const itemCoordinate = e.target.parentElement.id.concat(e.target.id);

    if (!coordinates.includes(itemCoordinate)) {
      dispatch(getCoordinatesAction(itemCoordinate));
    } else {
      dispatch(deleteCoordinatesAction(itemCoordinate));
    }
  };

  useEffect(() => {
    setHovered(false);
  }, [modeValue, coordinatesState]);

  return (
    <StyledHoverGameElement
      id={`c${index}`}
      className={`${hovered && 'active'}`}
      onMouseEnter={(e) => {
        toggleHovered();
        setCoordinates(e);
      }}
    />
  );
}

HoverGameElement.propTypes = {
  index: PropTypes.number.isRequired,
};

export default HoverGameElement;
