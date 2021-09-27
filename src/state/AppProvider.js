import React, { createContext, useReducer, useContext } from 'react';
import * as functions from './AppFunctions'
import { AppReducer } from './AppReducer';
import {getValues } from './Util'
import { styles } from '../styles';

const AppContext = createContext();

export const AppProvider = (props) => {

  const getFunctions = {
    setAuthenticatedUser: (payload) => functions.setAuthenticatedUser(dispatch, payload),
    setUserName: (payload) => functions.setUserName(dispatch, payload),
  }

  const initialState = {
    authenticatedUser: '',
    userName: 'initapp',
    styles: styles,
  }
  const[state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{
      ...getValues(state, initialState),
      ...getFunctions
    }}>
      {props.children}
    </AppContext.Provider>
  );
}

export const useGlobalState = () => ( useContext(AppContext) )
export const useAppState = () => ( useContext(AppContext) )
