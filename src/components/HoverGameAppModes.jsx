import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setModeValueAction } from '../store/modeValueReducer';
import { resetCoordinatesAction } from '../store/coordinatesReducer';
import { getAppModes } from '../API/getAppModes';

const StyledHoverGameAppModes = styled.select`
  font-size: 18px;
  min-height: 42px;
  padding: 0 12px;
  text-transform: uppercase;
  border: 1px solid #515cc6;
  border-radius: 6px;
  outline: none;

  &:focus-visible {
    border: 2px solid #515cc6;
  }
`;

function HoverGameAppModes() {
  const dispatch = useDispatch();
  const modes = useSelector((state) => state.modes);
  const modesArray = Object.entries(modes);

  const handleValue = (e) => {
    dispatch(setModeValueAction(Number(e.target.value)));
    dispatch(resetCoordinatesAction());
  };

  useEffect(() => {
    dispatch(getAppModes());
  }, []);

  return (
    <StyledHoverGameAppModes
      defaultValue="Pick mode"
      onChange={handleValue}
    >
      <option disabled>
        Pick mode
      </option>
      {modesArray.map(([key, value]) => (
        <option key={key} value={value.field}>
          {key}
        </option>
      ))}
    </StyledHoverGameAppModes>
  );
}

export default HoverGameAppModes;
