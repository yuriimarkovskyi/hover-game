import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setModeValueAction} from '../store/modeValueReducer';
import {resetCoordinatesAction} from '../store/coordinatesReducer';

const HoverGameAppModes = () => {
  const dispatch = useDispatch();
  const modes = useSelector(state => state.modes.modes);
  const modesArray = Object.entries(modes);

  const handleValue = e => {
    dispatch(setModeValueAction(Number(e.target.value)));
    dispatch(resetCoordinatesAction());
  };

  return (
    <select
      className="hover-game-app-modes"
      defaultValue="Pick mode"
      onChange={handleValue}>

      <option disabled>
        Pick mode
      </option>

      {modesArray.map(([key, value]) => (
        <option
          key={key}
          value={value.field}>

          {key}
        </option>
      ))}

    </select>
  );
};

export default HoverGameAppModes;