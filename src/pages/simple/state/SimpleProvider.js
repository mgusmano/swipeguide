import React, { createContext, useReducer, useContext } from 'react';
import * as functions from './SimpleFunctions'
import { SimpleReducer } from './SimpleReducer';
import {getValues } from './Util'
import { styles } from '../styles';

const SimpleContext = createContext();

export const SimpleProvider = (props) => {

  const getFunctions = {
    setUserName: (payload) => functions.setUserName(dispatch, payload),
    setAll: (payload) => functions.setAll(dispatch, payload),
    setOperators: () => functions.setOperators(dispatch),
    setActive: (payload) => functions.setActive(dispatch, payload),
  }

  const initialState = {
    userName: 'mjg',

    bottomtotals: [],
    righttotals: [],
    original: null,
    dimensions: null,
    byOperator: null,
    bySkill: null,
    operators: null,
    skills: null,
    certifications: null,

    active: false,

    //currentcertification: null,
    //specific: null,

    showTheLegend: false,
    styles: styles,
  }
  const[state, dispatch] = useReducer(SimpleReducer, initialState);

  return (
    <SimpleContext.Provider value={{
      ...getValues(state, initialState),
      ...getFunctions
    }}>
      {props.children}
    </SimpleContext.Provider>
  );
}

export const useGlobalState = () => ( useContext(SimpleContext) )
export const useSimpleState = () => ( useContext(SimpleContext) )
