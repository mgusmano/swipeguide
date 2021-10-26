import * as types from './AppTypes';

export const AppReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_LEGEND: return {...state,legend:payload}
    case types.SET_MULTIPLIER: return {...state,multiplier:payload}
    default:
      return state;
  }
}