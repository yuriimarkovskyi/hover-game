import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteCoordinatesAction, getCoordinatesAction} from '../store/coordinatesReducer';

const HoverGameElement = ({index, item}) => {
  const dispatch = useDispatch();
  const coordinates = useSelector(state => state.coordinates.coordinates);
  const coordinatesState = useSelector(state => state.coordinates.coordinatesState);
  const modeValue = useSelector(state => state.modeValue.modeValue);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setHovered(false);
  }, [modeValue, coordinatesState]);

  const toggleHovered = () => {
    setHovered(!hovered);
  };

  const setCoordinates = e => {
    const itemCoordinate = e.target.parentElement.id.concat(e.target.id);

    if (!coordinates.includes(itemCoordinate)) {
      dispatch(getCoordinatesAction(itemCoordinate));
    } else {
      dispatch(deleteCoordinatesAction(itemCoordinate));
    }
  };

  return (
    <div
      id={`c${index + 1}`}
      className={`hover-game-element ${hovered ? 'active' : ''}`}
      onMouseEnter={(e) => {
        toggleHovered();
        setCoordinates(e);
      }}>

      {item}
    </div>
  );
};

export default HoverGameElement;