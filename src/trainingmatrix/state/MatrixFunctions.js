import * as types from './MatrixTypes';
//import * as types from './Types';

import { API, graphqlOperation } from 'aws-amplify'
// import { listOperators} from '../../graphql/queries'
// import { listSkills } from '../../graphql/queries'
// import { listCertifications} from '../../graphql/queries'
import { updateSkill, updateOperator, updateCertification } from '../graphql/mutations'

export const setUserName = (dispatch, payload) => {
  console.log('setUserNameFunction')
  dispatch({type: types.SET_USERNAME, payload: payload});
}
export const updateOperatorGoal = (dispatch,payload) => {
  API.graphql(graphqlOperation(updateOperator, { input: payload } ))
  .then(() => {
    dispatch({type: types.UPDATE_OPERATORGOAL, payload: payload});
    setAll(dispatch,false)
  })
}

//export const setAll = (dispatch, first, operatorsData, skillsData, certificationsData, multiplier) => {
export const setAll = (dispatch, theData) => {

//   async function getDataOperators() {
//     const operatorData = await API.graphql(graphqlOperation(listOperators))
//     var data = operatorData.data.listOperators.items.sort((a, b) => (a.id > b.id) ? 1 : -1)
//     //console.log(JSON.stringify(data))
//     return data; //operatorData.data.listOperators.items.sort((a, b) => (a.id > b.id) ? 1 : -1)
//   }
//   async function getDataSkills() {
//     const skillData = await API.graphql(graphqlOperation(listSkills))
//     var data = skillData.data.listSkills.items.sort((a, b) => (a.id > b.id) ? 1 : -1)
// //console.log(JSON.stringify(data))
//     return data; //skillData.data.listSkills.items.sort((a, b) => (a.id > b.id) ? 1 : -1)
//   }
//   async function getDataCertifications() {
//     const certificationData = await API.graphql(graphqlOperation(listCertifications))
//     var data = certificationData.data.listCertifications.items.sort((a, b) => (a.id > b.id) ? 1 : -1)
// //    console.log(JSON.stringify(data))
//     return data; //certificationData.data.listCertifications.items.sort((a, b) => (a.id > b.id) ? 1 : -1)
//   }

  // const doByOperatorx = (operators, skills, certifications,dispatch) => {
  //   var byOperator = []
  //   var operatorsummary = []
  //   var bottomtotals = []

  //   var certID = 0
  //   for (let o = 0; o < operators.length; o++) {

  //     for (let s = 0; s < skills.length; s++) {
  //       certID++
  //       byOperator.push({"id": String(certID),"operatorID": String(o+1),"skillID": String(s+1),"meta": {
  //         "type":"solid","color":"green","letter":"A",
  //       },"data": []})
  //     }
  //   }

  //   dispatch({type: types.SET_BOTTOMTOTALS, payload: bottomtotals});
  //   //console.log(byOperator)
  //   return byOperator
  // }

  const doByOperator = (operators, skills, certifications,dispatch) => {
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
        var meta
        var data
        if (typeof fc.meta === 'string' || fc.meta instanceof String) {
          meta = JSON.parse(fc.meta)
        }
        else {
          meta = fc.meta
        }
        if (typeof fc.data === 'string' || fc.data instanceof String) {
          data = JSON.parse(fc.data)
        }
        else {
          data = fc.data
        }

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
    dispatch({type: types.SET_BOTTOMTOTALS, payload: bottomtotalstransposed});
    return byOperator
  }

  // const doBySkillx = (operators, skills, certifications,dispatch) => {
  //   var bySkill = []
  //   var skillsummary = []
  //   var righttotals = []

  //   //var certificationsDataCreated = []
  //   var certID = 0
  //   for (let sk = 0; sk < skills.length; sk++) {
  //     var o = {}
  //     o = skills[sk]
  //     o.meta = skills[sk]
  //     o.data = []

  //     for (let op = 0; op < operators.length; op++) {
  //       certID++

  //       o.data[op] = {};
  //       o.data[op].certificationID = certID
  //       o.data[op].skill = skills[op]
  //       o.data[op].operator = operators[op]
  //       o.data[op].meta = {"type":"solid","color":"green","letter":"","status":"started","start":"8/3/2021","trainer":false}
  //       o.data[op].data = []

  //       bySkill.push(o)



  //       // bySkill.push({"id": String(certID),"operatorID": String(op+1),"skillID": String(sk+1),"meta": {
  //       //   "type":"solid","color":"green","letter":"B",
  //       // },"data": []})
  //     }
  //   }

  //   dispatch({type: types.SET_RIGHTTOTALS, payload: righttotals});
  //   //console.log(bySkill)
  //   return bySkill
  // }

  const doBySkill = (operators, skills, certifications,dispatch) => {
    var bySkill = []
    var skillsummary = []
    var righttotals = []

    skills.map((skill,s) => {
      var o = {}
      o = skill
      o.meta = skill
      o.data = []
      const filteredcertifications = certifications.filter(item => item.skillID === skill.id);
      //console.log(filteredcertifications)
      var ss = {}
      ss.numstarted = 0
      ss.numtrainers = 0
      ss.numcertified = 0
      filteredcertifications.map((fc,i) => {

        var meta
        var data
        if (typeof fc.meta === 'string' || fc.meta instanceof String) {
          meta = JSON.parse(fc.meta)
        }
        else {
          meta = fc.meta
        }
        if (typeof fc.data === 'string' || fc.data instanceof String) {
          data = JSON.parse(fc.data)
        }
        else {
          data = fc.data
        }

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

    dispatch({type: types.SET_RIGHTTOTALS, payload: righttotals});
    return bySkill
  }

  const setInit = (o) => {

    var x = o.oLen
    var y = o.sLen

    //subscribeCertifications();

    const multiplier = o.multiplier;
    const topHeight = 0;
    const fontsize = 2;
    const bandX = 5;
    const bandY = 5;
    var col1 = 40;
    var col1a = 5;
    var col2 = bandX * x;
    var col3 =(bandX*3);
    var row1 = 35;

    var row2 = (bandY * y)+0;
    var row3 = bandX*3;

    var d2= {
      multiplier: multiplier,
      topHeight: topHeight,
      fontsize: fontsize,
      bandX: bandX,
      bandY: bandY,
      col1: col1,
      col1a: col1a,
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
      col1a: col1a*multiplier,
      col2: col2*multiplier,
      col3: col3*multiplier,
      row1: row1*multiplier,
      row2Orig: row2*multiplier,
      row2: row2*multiplier,
      row3: row3*multiplier,
    }
    dispatch({type: types.SET_DIMENSIONS, payload: d});
  }

  //  const callAll = async (dispatch,first,doBy, operatorsData, skillsData, certificationsData) => {
  const callAll = async (dispatch,payload2) => {
    var first = payload2.first

    //var operatorsData = payload2.operatorsData
    //var skillsData = payload2.skillsData
    //var certificationsData = payload2.certificationsData

    var operators
    var skills
    var certifications

    operators = payload2.operatorsData
    skills = payload2.skillsData
    certifications = payload2.certificationsData

    var multiplier = payload2.multiplier

    //console.log('operatorsData')
    //console.log(operatorsData)



    // if (operatorsData === undefined) {
    //   // operators = await getDataOperators()
    //   // skills = await getDataSkills()
    //   // certifications = await getDataCertifications()
    // }
    // else {
    //   operators = operatorsData
    //   skills = skillsData
    //   certifications = certificationsData
    // }

    var byOperator = []
    var bySkill = []

    //var  doBy
//mjg
    //if (doBy === undefined) {
      //if (operators.length !== 0 && listSkills.length !== 0) {
      if (operators.length !== 0 && skills.length !== 0) {
        //console.log('in2')
        byOperator = doByOperator(operators,skills,certifications,dispatch)
        bySkill = doBySkill(operators,skills,certifications,dispatch)
      }
    //}

// console.log(operators)
// console.log(skills)
// console.log(certifications)
// console.log(byOperator)
// console.log(bySkill)

    if (first === true) {
      var oLen = operators.length
      var sLen = skills.length
      setInit({oLen,sLen,multiplier})
    }

    var payload = {
      bySkill: bySkill,
      byOperator: byOperator,
      operators: operators,
      skills: skills,
      certifications: certifications
    }
    dispatch({type: types.SET_ALL, payload: payload});
    dispatch({type: types.SET_ACTIVE, payload: false});
  }

  //console.log(first)
  //console.log(dispatch,first, operatorsData, skillsData, certificationsData)


  //callAll(dispatch,first, operatorsData, skillsData, certificationsData, multiplier)

  callAll(dispatch, theData)
  // callAll(dispatch,{
  //   first:first,
  //   operatorsData:operatorsData,
  //   skillsData:skillsData,
  //   certificationsData:certificationsData,
  //   multiplier:multiplier
  // })


}

// export const setOperators = (dispatch) => {

//   async function getDataOperators() {
//     const operatorData = await API.graphql(graphqlOperation(listOperators))
//     return operatorData.data.listOperators.items.sort((a, b) => (a.id > b.id) ? 1 : -1)
//   }

//   const callAll = async () => {
//     var operators = await getDataOperators()
//      //console.log('setUserName')
//     dispatch({type: types.types.SET_OPERATORS, payload: operators});

//   }

//   callAll()
// }

export const setActive = (dispatch, payload) => {
  dispatch({type: types.SET_ACTIVE, payload: payload});
}

export const setAuthenticatedUser = (dispatch, payload) => {
  dispatch({type: types.SET_AUTHENTICATEDUSER, payload: payload});
}

export const updateSkillGoal = (dispatch, payload) => {
  API.graphql(graphqlOperation(updateSkill, { input: payload } ))
  .then(() => {
    dispatch({type: types.UPDATE_SKILLGOAL, payload: payload});
    setAll(dispatch,false)
  })
}

export const setRightTotals = (dispatch, payload) => {
  dispatch({type: types.SET_RIGHTTOTALS, payload: payload});
}

export const setBottomTotals = (dispatch, payload) => {
  dispatch({type: types.SET_BOTTOMTOTALS, payload: payload});
}

export const setCurrentCertification = (dispatch, payload) => {
  dispatch({type: types.SET_CURRENT_CERTIFICATION, payload: payload});
}

export const setOperators = (dispatch, payload) => {
  dispatch({type: types.SET_OPERATORS, payload: payload});
}

export const setSkills = (dispatch, payload) => {
  dispatch({type: types.SET_SKILLS, payload: payload});
}

export const setCertifications = (dispatch, payload) => {
  dispatch({type: types.SET_CERTIFICATIONS, payload: payload});
}

export const setBySkill = (dispatch, payload) => {
  dispatch({type: types.SET_BYSKILL, payload: payload});
}

export const setByOperator = (dispatch, payload) => {
  dispatch({type: types.SET_BYOPERATOR, payload: payload});
}

export const setSpecific = (dispatch, payload) => {
  dispatch({type: types.SET_SPECIFIC, payload: payload});
}

export const setDimensions = (dispatch, payload) => {
  dispatch({type: types.SET_DIMENSIONS, payload: payload});
}

export const setOriginal = (dispatch, payload) => {
  dispatch({type: types.SET_ORIGINAL, payload: payload});
}

// export const updateUserName = (dispatch, payload) => {
//   dispatch({type: types."U", payload: payload});
// }

export const toggleLegend = (dispatch, payload) => {
  dispatch({type: types.TOGGLE_LEGEND, payload: payload});
}

export const updateCert = async (dispatch, payload) => {
  await API.graphql(graphqlOperation(updateCertification, { input: payload } ))
  setAll(dispatch,false)
}