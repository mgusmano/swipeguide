import React, { createContext, useReducer, useContext } from 'react';
import * as functions from './BenchmarkFunctions'
import { BenchmarkReducer } from './BenchmarkReducer';
import {getValues } from './Util'
import { styles } from '../styles';




const BenchmarkContext = createContext();

export const BenchmarkProvider = (props) => {




  const getFunctions = {
    setLabels: (payload) => functions.setLabels(dispatch, payload),
    //setMe: (payload) => BenchmarkFunctions2.setMe(dispatch, payload),
    setOutputId: (payload) => functions.setOutputId(dispatch, payload),
    setAll: (payload) => functions.setAll(dispatch, payload),

    setPrefix: (payload) => functions.setPrefix(dispatch, payload),
    setClearFilterObj: (payload) => functions.setClearFilterObj(dispatch, payload),

    //setUserData: (payload) => functions.setUserData(dispatch, payload),
    //setSkillData: (payload) => functions.setSkillData(dispatch, payload),


    //setPositionData: (payload) => functions.setPositionData(dispatch, payload),
    //setPositionTargetData: (payload) => functions.setPositionTargetData(dispatch, payload),

    //setUserSkillData: (payload) => functions.setUserSkillData(dispatch, payload),


    //setUserAssessmentReport: (payload) => functions.setUserAssessmentReport(dispatch, payload),
    setActive: (payload) => functions.setActive(dispatch, payload),
  }

  const initialState = {
    prefix: null,

    labelPosition:  null, //labelPosition,
    labelFunctionGroup: null, //labelFunctionGroup,
    labelLine: null, //labelLine,
    labelCompetency: null, //labelCompetency,

    labelEBPC: 'EB/PC',
    labelFunction: 'Function',
    labelSubFunction: 'Sub Function',
    labelSegment: 'Segment',

    dataSource: null,
    users: null,
    positions: null,
    skills: null,
    positiontargets: null,
    userskills: null,



    userData: [],
    clearAllFlag: false,
    userDataClone: [],
    skillData: [],
    skillDataClone: [],
    positionData: [],
    positionTargetData: [],
    filterObjClearAll: '',
    filterObj: {

      job_band: [],
      segment: [],
      sub_function: [],
      function: [],

      rating: 0,
      is_eb: "",
      geo_location: [],
      manager_name: [],
      position_id: [],
      is_core: "",
      segement: [],
      line: [],
      competency: [],
      isUser: "filters",
      isSkill: "filters",
      filterUser: {},
      filterSkill: {},
      skillIds: [],
      userIds: [],
      outputId: 1,
    },
    options: {
      propertiesdisplay: 'flex',
      propertieswidth: '350px',
      positionOption: [],
      managerOption: [],
      locationOption: [],
      segementOption: [],
      lineOption: [],
      competencyOption: [],
      userOption: [],
      skillOption: [],
      filterUserOptions: [],
      filterUserOptionsClone: [],
      filterSkillOptions: [],
      sourceOption: [
        { label: "Self", value: 1 },
        { label: "Manager", value: 0 },
      ],
      coreOption: [
        { label: "Core", value: 1 },
        { label: "Segment", value: 0 },
      ],
      ebOption: [
        { label: "EB", value: 1 },
        { label: "PC", value: 0 },
      ],
      outputOption: [
        { label: "Individuals", value: 1 },
        { label: "Manager", value: 2 },
        { label: "Position", value: 3 },
        { label: "Location", value: 4 },
      ],
      themeOption: [
        { label: "fusion", value: "fusion" },
        { label: "gammel", value: "gammel" },
        { label: "candy", value: "candy" }
      ],
      userSkillAvgData: [],
      userSkillAvgTarget: [],
    },
    dataSource: null,
    theme: 'fusion',
    coreOptionData: [
      { label: "Core", value: 1 },
      { label: "Segment", value: 0 },
    ],
    ebOptionData: [
      { label: "EB", value: 1 },
      { label: "PC", value: 0 },
    ],

    userAssessmentReportData: null,
    active: true,
    styles: styles,
  }
  const[state, dispatch] = useReducer(BenchmarkReducer, initialState);

  return (
    <BenchmarkContext.Provider value={{
      ...getValues(state, initialState),
      ...getFunctions
    }}>
      {props.children}
    </BenchmarkContext.Provider>
  );
}

export const useGlobalState = () => ( useContext(BenchmarkContext) )
export const useBenchmarkState = () => ( useContext(BenchmarkContext) )
