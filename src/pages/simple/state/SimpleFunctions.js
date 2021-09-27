import * as types from './SimpleTypes';

import { API, graphqlOperation } from 'aws-amplify'
import { listOperators} from '../../../graphql/queries'
import { listSkills } from '../../../graphql/queries'
import { listCertifications} from '../../../graphql/queries'
import { updateCertification } from '../../../graphql/mutations'

export const setUserName = (dispatch, payload) => {
  console.log('setUserNameFunction')
  dispatch({type: types.SET_USERNAME, payload: payload});
}

export const setAll = (dispatch, first) => {

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
    dispatch({type: types.SET_BOTTOMTOTALS, payload: bottomtotalstransposed});
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

    dispatch({type: types.SET_RIGHTTOTALS, payload: righttotals});
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
    var col2 = bandX * x;
    var col3 =(bandX*3);
    var row1 = 20;
    var row2 = (bandY * y)+0;
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
    dispatch({type: types.SET_ORIGINAL, payload: d2});

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
    dispatch({type: types.SET_DIMENSIONS, payload: d});
  }


  const callAll = async (first,doBy) => {

    var operators = await getDataOperators()
    var skills = await getDataSkills()
    var certifications = await getDataCertifications()
    var byOperator = []
    var bySkill = []

    console.log(doBy)
    console.log(operators.length)
    console.log(skills.length)
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
    dispatch({type: types.SET_ALL, payload: payload});

    //setTimeout(function(){
      dispatch({type: types.SET_ACTIVE, payload: false});
    //}, 1000);

  };
  callAll(first)
}

export const setOperators = (dispatch) => {

  async function getDataOperators() {
    const operatorData = await API.graphql(graphqlOperation(listOperators))
    return operatorData.data.listOperators.items.sort((a, b) => (a.id > b.id) ? 1 : -1)
  }

  const callAll = async () => {
    var operators = await getDataOperators()
      //console.log('setUserName')
    dispatch({type: types.SET_OPERATORS, payload: operators});

  }

  callAll()
}

export const setActive = (dispatch, payload) => {
  dispatch({type: types.SET_ACTIVE, payload: payload});
}
