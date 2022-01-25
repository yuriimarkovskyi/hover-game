import { setModesAction } from '../store/modesReducer';

export const getAppModes = () => (dispatch) => {
  fetch('https://demo1030918.mockable.io/')
    .then((response) => response.json())
    .then((json) => dispatch(setModesAction(json)));
};
