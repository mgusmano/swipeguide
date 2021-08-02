import React, { createContext, useReducer, useContext } from 'react';
import { MatrixReducer } from './MatrixReducer';
import { SET_AUTHENTICATEDUSER, UPDATE_OPERATORGOAL, UPDATE_SKILLGOAL, SET_BOTTOMTOTALS, SET_RIGHTTOTALS, SET_CURRENT_CERTIFICATION, SET_ACTIVE, SET_ALL, SET_OPERATORS, SET_SKILLS, SET_CERTIFICATIONS, SET_BYSKILL, SET_BYOPERATOR, SET_SPECIFIC, TOGGLE_LEGEND, SET_DIMENSIONS, SET_ORIGINAL } from './MatrixTypes';

import { API, graphqlOperation } from 'aws-amplify'
import { listOperators} from '../graphql/queries'
import { listSkills } from '../graphql/queries'
import { listCertifications} from '../graphql/queries'
import { updateSkill, updateOperator, updateCertification } from '../graphql/mutations'

const MatrixContext = createContext();

export const MatrixProvider = (props) => {

  const setAuthenticatedUser = (payload) => {
    dispatch({type: SET_AUTHENTICATEDUSER, payload: payload});
  }

  const updateOperatorGoal = (payload) => {
    //dispatch({type: UPDATE_OPERATORGOAL, payload: payload});
    API.graphql(graphqlOperation(updateOperator, { input: payload } ))
    .then(() => {
      dispatch({type: UPDATE_OPERATORGOAL, payload: payload});
      setAll(false)
    })
  }

  const updateSkillGoal = (payload) => {
    API.graphql(graphqlOperation(updateSkill, { input: payload } ))
    .then(() => {
      dispatch({type: UPDATE_SKILLGOAL, payload: payload});
      setAll(false)
    })
  }

  const setRightTotals = (payload) => {
    dispatch({type: SET_RIGHTTOTALS, payload: payload});
  }

  const setBottomTotals = (payload) => {
    dispatch({type: SET_BOTTOMTOTALS, payload: payload});
  }

  const setCurrentCertification = (payload) => {
    dispatch({type: SET_CURRENT_CERTIFICATION, payload: payload});
  }

  const setActive = (payload) => {
    dispatch({type: SET_ACTIVE, payload: payload});
  }

  const setOperators = (payload) => {
    dispatch({type: SET_OPERATORS, payload: payload});
  }

  const setSkills = (payload) => {
    dispatch({type: SET_SKILLS, payload: payload});
  }

  const setCertifications = (payload) => {
    dispatch({type: SET_CERTIFICATIONS, payload: payload});
  }

  const setBySkill = (payload) => {
    dispatch({type: SET_BYSKILL, payload: payload});
  }

  const setByOperator = (payload) => {
    dispatch({type: SET_BYOPERATOR, payload: payload});
  }

  const setSpecific = (payload) => {
    dispatch({type: SET_SPECIFIC, payload: payload});
  }

  const setDimensions = (payload) => {
    dispatch({type: SET_DIMENSIONS, payload: payload});
  }

  const setOriginal = (payload) => {
    dispatch({type: SET_ORIGINAL, payload: payload});
  }

  const updateUserName = (payload) => {
    dispatch({type: "U", payload: payload});
  }

  const toggleLegend = (payload) => {
    dispatch({type: TOGGLE_LEGEND, payload: payload});
  }

  const updateCert = async (payload) => {
    await API.graphql(graphqlOperation(updateCertification, { input: payload } ))
    setAll(false)
  }

  const setAll = (first) => {

    async function getDataOperators() {
      const operatorData = await API.graphql(graphqlOperation(listOperators))
      return operatorData.data.listOperators.items.sort((a, b) => (a.id > b.id) ? 1 : -1)
    }
    async function getDataSkills() {
      const skillData = await API.graphql(graphqlOperation(listSkills))
      return skillData.data.listSkills.items.sort((a, b) => (a.id > b.id) ? 1 : -1)
    }
    async function getDataCertifications() {
      const certificationData = await API.graphql(graphqlOperation(listCertifications))
      return certificationData.data.listCertifications.items.sort((a, b) => (a.id > b.id) ? 1 : -1)
    }

    const doByOperator = (operators, skills, certifications) => {
      var byOperator = []
      var operatorsummary = []
      var bottomtotals = []

      //if (operators = []) { return }
      operators.map((operator,o) => {
        o = operator
        o.meta = operator
        o.data = []
        const filteredcertifications = certifications.filter(item => item.operatorID === operator.id);

        var ss = {}
        ss.numstarted = 0
        ss.numtrainers = 0
        ss.numcertified = 0
        filteredcertifications.map((fc,i) => {
          var meta = JSON.parse(fc.meta)
          var data = JSON.parse(fc.data)
          var num = 0;
          data.map((slice,i) => {
            if (slice.s === 1) {
              num++
            }
            return null
          })
          if (num >  0 && meta.status === 'started') {
            var dStart = new Date(meta.start);
            var dToday = new Date();
            var difftime = dToday.getTime() - dStart.getTime()
            var diffdays = difftime / (1000 * 3600 * 24);
            if (diffdays < 180) {
              ss.numcertified ++
            }
          }
          if (data.status === 'started') {
            ss.numstarted ++
          }
          if (meta.status === 'started') {
            ss.numstarted ++
          }
          if (meta.trainer === 'true' || meta.trainer === true ) {
            ss.numtrainers ++
          }
          return null
        })
        operatorsummary.push(ss)

        var goal = operator.goal;
        var val = [goal, ss.numcertified, goal-ss.numcertified]
        bottomtotals.push(val)

        filteredcertifications.map((fc,i) => {
          var skill  = skills.find(item => item.id === fc.skillID);
          o.data[i] = {};
          o.data[i].operator = operator
          o.data[i].skill = skill
          o.data[i].meta = fc.meta
          o.data[i].data = fc.data
          return null
        })
        byOperator.push(o)
        return null
      })

      var transpose = m => m[0].map((x,i) => m.map(x => x[i]))
      var bottomtotalstransposed = transpose(bottomtotals)
      dispatch({type: SET_BOTTOMTOTALS, payload: bottomtotalstransposed});
      return byOperator
    }
    const doBySkill = (operators, skills, certifications) => {
      var bySkill = []
      var skillsummary = []
      var righttotals = []

      skills.map((skill,s) => {
        var o = {}
        o = skill
        o.meta = skill
        o.data = []
        const filteredcertifications = certifications.filter(item => item.skillID === skill.id);

        var ss = {}
        ss.numstarted = 0
        ss.numtrainers = 0
        ss.numcertified = 0
        filteredcertifications.map((fc,i) => {
          var meta = JSON.parse(fc.meta)
          var data = JSON.parse(fc.data)
          var num = 0;
          data.map((slice,i) => {
            if (slice.s === 1) {
              num++
            }
            return null
          })
          if (num >  0 && meta.status === 'started') {
            var dStart = new Date(meta.start);
            var dToday = new Date();
            var difftime = dToday.getTime() - dStart.getTime()
            var diffdays = difftime / (1000 * 3600 * 24);
            if (diffdays < 180) {
              ss.numcertified ++
            }
          }
          if (data.status === 'started') {
            ss.numstarted ++
          }
          if (meta.status === 'started') {
            ss.numstarted ++
          }
          if (meta.trainer === 'true' || meta.trainer === true ) {
            ss.numtrainers ++
          }
          return null
        })
        skillsummary.push(ss)
        var goal = skill.goal;
        var val = [goal, ss.numcertified, goal-ss.numcertified]
        righttotals.push(val)

        filteredcertifications.map((fc,i) => {
          var operator  = operators.find(item => item.id === fc.operatorID);
          o.data[i] = {};
          o.data[i].certificationID = fc.id
          o.data[i].skill = skill
          o.data[i].operator = operator
          o.data[i].meta = fc.meta
          o.data[i].data = fc.data
          return null
        })

        bySkill.push(o)
        return null
      })

      dispatch({type: SET_RIGHTTOTALS, payload: righttotals});
      return bySkill
    }

    const setInit = (o) => {

      var x = o.oLen
      var y = o.sLen

      //subscribeCertifications();

      const multiplier = 7;
      const topHeight = 0;
      const fontsize = 2;
      const bandX = 5;
      const bandY = 5;
      var col1 = 40;
      var col2 = (bandX * x)+1;
      var col3 =(bandX*3);
      var row1 = 20;
      var row2 = (bandY * y)+1;
      var row3 = bandX*3;

      var d2= {
        multiplier: multiplier,
        topHeight: topHeight,
        fontsize: fontsize,
        bandX: bandX,
        bandY: bandY,
        col1: col1,
        col2: col2,
        col3: col3,
        row1: row1,
        row2Orig: row2,
        row2: row2,
        row3: row3,
      }
      //matrixState.setOriginal(d2)
      dispatch({type: SET_ORIGINAL, payload: d2});

      var d = {
        multiplier: multiplier,
        topHeight: topHeight*multiplier,
        fontsize: fontsize*multiplier,
        bandX: bandX*multiplier,
        bandY: bandY*multiplier,
        col1: col1*multiplier,
        col2: col2*multiplier,
        col3: col3*multiplier,
        row1: row1*multiplier,
        row2Orig: row2*multiplier,
        row2: row2*multiplier,
        row3: row3*multiplier,
      }
      dispatch({type: SET_DIMENSIONS, payload: d});
    }


    const callAll = async (first,doBy) => {

      var operators = await getDataOperators()
      var skills = await getDataSkills()
      var certifications = await getDataCertifications()
      var byOperator = []
      var bySkill = []

      // console.log(doBy)
      // console.log(operators.length)
      // console.log(skills.length)
      if (doBy === undefined) {
        if (operators.length !== 0 && listSkills.length !== 0) {
          //console.log('in2')
          byOperator = doByOperator(operators,skills,certifications)
          bySkill = doBySkill(operators,skills,certifications)
        }
      }

// console.log(operators)
// console.log(skills)
// console.log(certifications)
// console.log(byOperator)
// console.log(bySkill)

      if (first === true) {
        var oLen = operators.length
        var sLen = skills.length
        setInit({oLen,sLen})
      }


      var payload = {
        bySkill: bySkill,
        byOperator: byOperator,
        operators: operators,
        skills: skills,
        certifications: certifications
      }
      dispatch({type: SET_ALL, payload: payload});

      //setTimeout(function(){
        dispatch({type: SET_ACTIVE, payload: false});
      //}, 1000);

    };
    callAll(first)
  }

  const initialState = {
    authenticateduser: '',
    operatorgoal: 0,
    skillgoal: 0,
    bottomtotals: [],
    righttotals: [],
    currentcertification: null,
    active: false,
    operators: [],
    skills: [],
    certifications: [],
    bySkill: null,
    byOperator: null,
    specific: null,
    dimensions: null,
    original: null,
    userName: '',
    showTheLegend: false,
  }
  const[state, dispatch] = useReducer(MatrixReducer, initialState);

  return (
    <MatrixContext.Provider value={{
      authenticateduser: state.authenticateduser,
      operatorgoal: state.operatorgoal,
      skillgoal: state.skillgoal,
      bottomtotals: state.bottomtotals,
      righttotals: state.righttotals,
      currentcertification: state.currentcertification,
      active: state.active,
      operators: state.operators,
      skills: state.skills,
      certifications: state.certifications,
      bySkill: state.bySkill,
      byOperator: state.byOperator,
      specific: state.specific,
      userName: state.userName,
      showTheLegend: state.showTheLegend,
      dimensions: state.dimensions,
      original: state.original,
      setAuthenticatedUser,
      updateOperatorGoal,
      updateSkillGoal,
      updateCert,
      setBottomTotals,
      setRightTotals,
      setCurrentCertification,
      setActive,
      setSkills,
      setOperators,
      setCertifications,
      setBySkill,
      setByOperator,
      setSpecific,
      setDimensions,
      setOriginal,
      updateUserName,
      toggleLegend,
      setAll,
    }}>
      {props.children}
    </MatrixContext.Provider>
  );
}
export const useMatrixState = () => useContext(MatrixContext);
