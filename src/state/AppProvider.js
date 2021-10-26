import React, { createContext, useReducer, useContext } from 'react';
import { AppReducer } from './AppReducer';
import * as types from './AppTypes';
import {getValues } from './Util'

const AppContext = createContext();

export const AppProvider = (props) => {


  const getFunctions = {
    setOperators: (payload) => { dispatch({type: types.SET_OPERATORS, payload: payload}) },
    setSkills: (payload) => { dispatch({type: types.SET_SKILLS, payload: payload}) },
    setCertifications: (payload) => { dispatch({type: types.SET_CERTIFICATIONS, payload: payload}) },
    setGroups: (payload) => { dispatch({type: types.SET_GROUPS, payload: payload}) },
    setLegend: (payload) => { dispatch({type: types.SET_LEGEND, payload: payload}) },
    setMultiplier: (payload) => { dispatch({type: types.SET_MULTIPLIER, payload: payload}) },
  }

  const initialState = {
    operators: null,
    skills: null,
    certifications: null,
    groups: null,
    legend: false,
    multiplier: 6,
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
