import { combineReducers } from 'redux';
import rendererReducers from './../../renderer/reducers';
import systemReducer from './system'
export default function getRootReducer(scope = 'main') {
  let mainReducers = {
    systemReducer
  };
  let reducers = {

  };

  if (scope === 'renderer') {
    reducers = {
      ...mainReducers,
      ...rendererReducers
    };
  }

  return combineReducers({ ...reducers });
}
