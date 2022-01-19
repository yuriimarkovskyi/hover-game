import React from 'react';
import {useSelector} from 'react-redux';

const HoverGameSidebar = () => {
  const coordinates = useSelector(state => state.coordinates.coordinates);

  return (
    <div className="hover-game-sidebar">
      <h1 className="hover-game-sidebar__title">
        Hovered squares
      </h1>
      {coordinates.length
        ? <ul className="hover-game-sidebar__list">
          {coordinates.map((coordinate, index) => (
            <li key={index} className="hover-game-sidebar__list-element">
              {coordinate}
            </li>
          ))}
        </ul>
        : <p className="hover-game-sidebar__list-element">
          Hover something!
        </p>}
    </div>
  );
};

export default HoverGameSidebar;