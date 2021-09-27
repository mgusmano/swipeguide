import produce from 'immer';
//import { SET_AUTHENTICATEDUSER, UPDATE_OPERATORGOAL, UPDATE_SKILLGOAL, SET_BOTTOMTOTALS, SET_RIGHTTOTALS, SET_CURRENT_CERTIFICATION, SET_ACTIVE,SET_ALL, SET_OPERATORS, SET_SKILLS, SET_CERTIFICATIONS, SET_BYSKILL, SET_BYOPERATOR, SET_SPECIFIC, TOGGLE_LEGEND, SET_DIMENSIONS, SET_ORIGINAL } from './MatrixTypes';

import * as types from './MatrixTypes';
export const MatrixReducer = (state, action) => {

  const { type, payload } = action;
  var s;
  switch (type) {
    case types.SET_USERNAME:
      s = {...state,userName:payload}
      return s

    case types.SET_AUTHENTICATEDUSER:
      s = {...state,authenticateduser:payload}
      return s

    case types.UPDATE_OPERATORGOAL:
      //console.log(state.operators)
      var index = state.operators.map(item => item.id).indexOf(payload.id);
      s = {
        ...state,
        operators: state.operators.map(
          (operator, i) => i === index ? {...operator, goal: parseInt(payload.goal)} : operator
        )
      }
      //console.log(s)
      return s

    case types.UPDATE_SKILLGOAL:
      console.log(state.skills)
      var index = state.skills.map(item => item.id).indexOf(payload.id);
      s = {
        ...state,
        skills: state.skills.map(
          (skill, i) => i === index ? {...skill, goal: parseInt(payload.goal)} : skill
        )
      }
      console.log(s)
      return s

    case types.SET_BOTTOMTOTALS:
      s = {...state,bottomtotals:payload}
      return s

    case types.SET_RIGHTTOTALS:
      s = {...state,righttotals:payload}
      return s
    case types.SET_CURRENT_CERTIFICATION:
      s = {...state,currentcertification:payload}
      return s
    case types.SET_ALL:
      s = {
        ...state,
        bySkill:payload.bySkill,
        byOperator:payload.byOperator,
        operators:payload.operators,
        skills:payload.skills,
        certifications:payload.certifications,
      }
      return s
    case types.SET_ACTIVE:
      if (payload === true) {
        s = {...state,active:true}
      }
      else {
        s = {...state,active:false}
      }
      return s
    case types.SET_OPERATORS:
      s = {...state,operators:payload}
      return s
    case types.SET_SKILLS:
      s = {...state,skills:payload}
      return s
    case types.SET_CERTIFICATIONS:
      s = {...state,certifications:payload}
      return s
    case types.SET_BYSKILL:
      s = {...state,bySkill:payload}
      return s
    case types.SET_BYOPERATOR:
      s = {...state,byOperator:payload}
      return s

    case types.SET_SPECIFIC:
      s = {...state,specific:payload}
      return s
    case types.SET_DIMENSIONS:
      s = {...state,dimensions:payload}
      return s
    case types.SET_ORIGINAL:
        s = {...state,original:payload}
        return s
    case types.TOGGLE_LEGEND:
      var val = !state.showTheLegend
      s = {...state,showTheLegend:val}
      return s
    case "U":
      s = {...state,userName:payload}
      return s
      // return produce(state, draft => {
      //   console.log('in reducer: ',payload)
      //   draft.userName = payload
      // })


    case "ACTIVATE_WIDGET":
      //console.log("ACTIVATE_WIDGET",payload.id)
      return produce(state, draft => {
        draft.widgetData.forEach(widget => widget.active = false)
        var index = draft.widgetData.map(item => item.id).indexOf(payload.id);
        if (index !== -1) {
          draft.widgetData[index].active = true
          draft.toolkitTitle = draft.widgetData[index].defaultTitle
        }
      })

    case "RESIZE_WIDGET":
      //console.log("RESIZE_WIDGET",payload.id)
      return produce(state, draft => {
        var index = draft.widgetData.map(item => item.id).indexOf(payload.id);
        if (index !== -1) {
          draft.widgetData[index].properties.size = {width: payload.w,height: payload.h}
        }
      })

    default:
      return state;
  }
}