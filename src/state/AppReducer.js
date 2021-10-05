import * as types from './AppTypes';

export const AppReducer = (state, action) => {
  const { type, payload } = action;
  //var s;
  //console.log(type)
  //console.log(types.SET_USERNAME)
  switch (type) {
    case types.SET_USERNAME:
      console.log('type.SET_USERNAME',payload)
      return {...state,userName:payload}

    default:
      return state;
  }
}