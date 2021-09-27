import * as types from './AppTypes';

export const setAuthenticatedUser = (dispatch, payload) => {
  console.log('setUserNameFunction')
  dispatch({type: types.SET_AUTHENTICATEDUSER, payload: payload});
}
export const setUserName = (dispatch, payload) => {
  console.log('setUserNameFunction')
  dispatch({type: types.SET_USERNAME, payload: payload});
}
