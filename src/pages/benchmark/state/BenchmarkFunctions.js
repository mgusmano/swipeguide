import * as types from './BenchmarkTypes';
//import httpHelper from "./helper/httpHelper";
import axios from 'axios';
//import { UserAssessmentReport } from './UserAssessmentReport'

export const setActive = (dispatch, payload) => {
  dispatch({type: types.SET_ACTIVE, payload: payload});
}
export const setPrefix = (dispatch, payload) => {
  dispatch({type: types.SET_PREFIX, payload: payload});
}
export const setLabels = (dispatch, payload) => {
  const PartnerName = payload
  var labelPosition = ''
  var labelFunctionGroup = ''
  var labelLine = ''
  var labelCompetency = ''
  if (PartnerName === 'General Mills') {
    labelPosition = 'Job Band'
    labelFunctionGroup = 'Function Group' //'Segment',
    labelLine = 'Capabilities Group' //'Line',
    labelCompetency = 'Capability' //'Competency',
  }
  else {
    labelPosition = 'Position'
    labelFunctionGroup = 'Segment'
    labelLine = 'Line'
    labelCompetency = 'Competency'
  }
  dispatch({type: types.SET_LABELS, payload: {
    labelPosition,
    labelFunctionGroup,
    labelLine,
    labelCompetency,
  }});
}
export const setAll = (dispatch, payload) => {

  function evaluateAverageOfUser(userSet) {
    userSet.forEach(user => {
        let total = 0;
        if (user.skillRatings && user.skillRatings.length > 0) {
            user.skillRatings.forEach(skillRating => {
                total += skillRating;
            });
            user.skillRatingAverage = total / user.skillRatings.length;
        } else {
            user.skillRatingAverage = 0;
        }
    });

    return userSet;
  }

  const evaluateIndividualGraph = (
    userSkillData,
    allUsersData,
    targetUsers,
    targetSkillSet,
    positionTargetData,
    positionData,
    // skillData,
    // userData
    ) => {
    const targetUserIdArr = [];
    const targetSkillIdArr = [];
    targetUsers.forEach(user => targetUserIdArr.push(user.user_id));
    targetSkillSet.forEach(skill => targetSkillIdArr.push(skill.skill_id));

    userSkillData.forEach(item => {
        if (targetUserIdArr.indexOf(item.user_id) > -1 && targetSkillIdArr.indexOf(item.skill_id) > -1) {
            const selectedUser = targetUsers.filter(user => user.user_id === item.user_id)[0];
            if (!selectedUser.skillRatings) {
                selectedUser.skillRatings = [];
            }
            selectedUser.skillRatings.push(item.rating);
        }
    });
    targetUsers = evaluateAverageOfUser(targetUsers);
    let graphResult = {
        category: [], dataset: [
            { seriesname: 'Individual', data: [] },
            { seriesname: 'Target Rating', data: [] },
            { seriesname: 'Group Avg', data: [] },
            { seriesname: 'Manager Rating', data: [] }
        ]
    };
    graphResult = evaluateIndividualDataSet(targetUsers, graphResult);
    graphResult = evaluateTargetRatingDataSet(targetUsers, positionTargetData, positionData, targetSkillIdArr, graphResult);
    graphResult = evaluateGroupRatingDataSet(targetUsers, allUsersData, userSkillData, positionData, targetSkillIdArr, graphResult);
    graphResult = evaluateDirectorRatingDataSet(targetUsers, allUsersData, userSkillData, positionData, targetSkillIdArr, graphResult);

    console.log(graphResult)
    return graphResult;
  }

  function evaluateIndividualDataSet(targetUsers, graphResult) {
    targetUsers.forEach(user => {
        graphResult.category.push({ label: user.user_name });
        if (user.skillRatingAverage > 0) {
            graphResult.dataset[0].data.push({
                value: user.skillRatingAverage,
                displayValue: `<div>Name: ${user.user_name}, Individual Rating: ${user.skillRatingAverage.toFixed(2)}</div>`
            });
        } else {
            graphResult.dataset[0].data.push({
                value: '',
                displayValue: `<div>Name: ${user.user_name}, Individual Rating: ${''}</div>`
            });
        }
    });
    return graphResult;
  }

  function evaluateTargetRatingDataSet(targetUsers, positionTargetData, positionData, targetSkillIdArr, graphResult) {
    let distinctPositions = [...new Set(targetUsers.map(user => user.position_id))];
    let postionObjArr = [];
    targetUsers.forEach(user => {
      //debugger
        const isPosition = postionObjArr.filter(position => position.position_id === user.position_id).length;
        if (!isPosition) {
            const selectedPosition = positionData.filter(pos => pos.position_id === user.position_id)[0];
            //console.log(user)
            //console.log(selectedPosition)
            const positionObj = {
                position_name: selectedPosition.position_name,
                position_id: selectedPosition.position_id,
                target_rating_set: [],
            }
            postionObjArr.push(positionObj);
        }
    });

    positionTargetData.forEach(element => {
        if (element.target_rating && distinctPositions.indexOf(element.position_id) > -1 && targetSkillIdArr.indexOf(element.skill_id) > -1) {
            const targetPositionObj = postionObjArr.filter(positionObj => positionObj.position_id === element.position_id)[0];
            targetPositionObj.target_rating_set.push(element.target_rating);
        }
    });

    postionObjArr.forEach(positionObj => {
        let totalTargetRating = 0;
        positionObj.target_rating_set.forEach((rating) => {
            totalTargetRating += rating;
        });
        positionObj.targetAverageRating = totalTargetRating / positionObj.target_rating_set.length;
    });

    targetUsers.forEach(user => {
        const selectedPosition = postionObjArr.filter(position => position.position_id === user.position_id)[0];
        let targetAverageRatingValue = isNaN(selectedPosition.targetAverageRating) ? '' : selectedPosition.targetAverageRating.toFixed(2);
        graphResult.dataset[1].data.push({
            value: targetAverageRatingValue, displayValue: `<div>Target Rating: ${targetAverageRatingValue}</div>`
        });
    });

    return graphResult;
  }

  function evaluateGroupRatingDataSet(targetUsers, allUsersData, userSkillData, positionData, targetSkillIdArr, graphResult) {
    let distinctPositions = [...new Set(targetUsers.map(user => user.position_id))];
    let postionObjArr = [];

    var allUsersData = targetUsers;

    allUsersData.forEach(user => {
        if (distinctPositions.indexOf(user.position_id) > -1) {
            const selectedPositionObj = postionObjArr.filter(position => position.position_id === user.position_id);

            if (selectedPositionObj && selectedPositionObj.length === 0) {
                const selectedPosition = positionData.filter(pos => pos.position_id === user.position_id)[0];
                const positionObj = {
                    position_name: selectedPosition.position_name,
                    position_id: selectedPosition.position_id,
                    user_id_set: [user.user_id],
                    skill_rating_set: [],
                }
                postionObjArr.push(positionObj);
            } else if (selectedPositionObj && selectedPositionObj.length > 0) {
                selectedPositionObj[0].user_id_set.push(user.user_id);
            }
        }
    });

    userSkillData.forEach(element => {
        if (targetSkillIdArr.indexOf(element.skill_id) > -1) {
            postionObjArr.forEach((positionObj) => {
                if (positionObj.user_id_set.indexOf(element.user_id) > -1) {
                    positionObj.skill_rating_set.push(element.rating);
                }
            });
        }
    });

    postionObjArr.forEach(positionObj => {
        let totalSkillRating = 0;
        positionObj.skill_rating_set.forEach((rating) => {
            totalSkillRating += rating;
        });
        positionObj.skillAverageRating = totalSkillRating / positionObj.skill_rating_set.length;
    });

    targetUsers.forEach(user => {
        const selectedPosition = postionObjArr.filter(position => position.position_id === user.position_id)[0];
        let skillAverageRatingValue = isNaN(selectedPosition.skillAverageRating) ? '' : selectedPosition.skillAverageRating.toFixed(2);
        graphResult.dataset[2].data.push({
            value: selectedPosition.skillAverageRating,
            displayValue: `<div>Position: ${selectedPosition.position_name}, Position Rating: ${skillAverageRatingValue}</div>`
        });
    });
    return graphResult;
  }

  function evaluateDirectorRatingDataSet(targetUsers, allUsersData, userSkillData, positionData, targetSkillIdArr, graphResult) {
  let distinctManagers = [...new Set(targetUsers.map(user => user.manager_name))];
  let managersObjArr = [];
  //var allUsersData = targetUsers;
  //allUsersData.forEach(user => {
  targetUsers.forEach(user => {
      if (distinctManagers.indexOf(user.manager_name) > -1) {
          const selectedManager = managersObjArr.filter(manager => manager.manager_name === user.manager_name);
          if (selectedManager && selectedManager.length > 0) {
              selectedManager[0].user_id_set.push(user.user_id);
          } else {
              const managerObj = {
                  manager_name: user.manager_name,
                  user_id_set: [user.user_id],
                  skill_rating_set: [],
              }
              managersObjArr.push(managerObj);
          }
      }
  });

  userSkillData.forEach(element => {
      if (targetSkillIdArr.indexOf(element.skill_id) > -1) {
          managersObjArr.forEach((managerObj) => {
              if (managerObj.user_id_set.indexOf(element.user_id) > -1) {
                  managerObj.skill_rating_set.push(element.rating);
              }
          });
      }
  });

  managersObjArr.forEach(managerObj => {
      let managerTotalRating = 0;
      managerObj.skill_rating_set.forEach(rating => {
          managerTotalRating += rating;
      });
      managerObj.skill_average = managerTotalRating / managerObj.skill_rating_set.length;
  });

  targetUsers.forEach(user => {
      const selectedManager = managersObjArr.filter(manager => manager.manager_name === user.manager_name)[0];
      let skill_averageValue = isNaN(selectedManager.skill_average) ? '' : selectedManager.skill_average.toFixed(2);
      graphResult.dataset[3].data.push({
          value: selectedManager.skill_average,
          displayValue: `<div>Manager: ${user.manager_name}, Manager Rating: ${skill_averageValue}</div>`
      });
    });
    return graphResult;
  }

  async function getData(what,prefix) {
    try {
      const resp = await axios.get(`/data/${prefix}/api/user/get${what}.json`);
      return resp.data
    } catch (err) {console.error(err);}
  }

  const callAll = async (dispatch,payload) => {
    const {prefix,outputId} = payload;
    var users = await getData('AllUser',prefix)
    var positions = await getData('AllPosition',prefix)
    var userskills = await getData('UserSkill',prefix)
    var skills = await getData('AllSkill',prefix)
    var positiontargets = await getData('PositionTarget',prefix)

    var userskills2 = await getData('UserSkill',prefix)

    // for (let i = 0; i < users.length; i++) {
    //   const foundmanager = users.find(user => users[i].manager_name == user.user_name);
    //   if (foundmanager == undefined) {
    //     users[i].manager_id = 0
    //   }
    //   else {
    //     users[i].manager_id = foundmanager.user_id
    //   }
    //   const foundposition = positions.find(position => users[i].position_id == position.position_id);
    //   if (foundposition == undefined) {
    //     users[i].position_name = 'null'
    //   }
    //   else {
    //     users[i].position_name = foundposition.position_name
    //   }
    // }

    // for (let i = 0; i < userskills.length; i++) {
    //   userskills[i].user_skill_rating = userskills[i].rating
    //   userskills[i].user_skill_is_self = userskills[i].is_self
    //   const founduser = users.find(user => userskills[i].user_id == user.user_id);
    //   if (founduser !== undefined) {
    //     userskills[i].user_name = founduser.user_name
    //     userskills[i].user_average = founduser.average
    //     userskills[i].user_manager_id = founduser.manager_id
    //     userskills[i].user_manager_name = founduser.manager_name
    //     userskills[i].user_position_id = founduser.position_id
    //     userskills[i].user_position_name = founduser.position_name
    //     userskills[i].user_is_eb = founduser.is_eb
    //     userskills[i].user_geo_location = founduser.geo_location
    //     userskills[i].user_job_band = founduser.job_band
    //     userskills[i].user_segment = founduser.segment
    //     userskills[i].user_sub_function = founduser.sub_function
    //     userskills[i].user_function = founduser.function
    //   }

    //   const foundskill = skills.find(skill => userskills[i].skill_id == skill.skill_id);
    //   if (foundskill !== undefined) {
    //     userskills[i].skill_name = foundskill.skill_name
    //     userskills[i].skill_segement = foundskill.segement
    //     userskills[i].skill_line = foundskill.line
    //     userskills[i].skill_is_core = foundskill.is_core
    //     userskills[i].skill_competency = foundskill.competency
    //   }

    //   const foundpositiontarget = positiontargets.find(positiontarget => userskills[i].skill_id == positiontarget.skill_id  && userskills[i].position_id == positiontarget.position_id);
    //   if (foundpositiontarget !== undefined) {
    //     userskills[i].position_skill_target_rating = foundpositiontarget.target_rating
    //   }

    // }
    console.log(userskills2)

    //const targetDataSet = userskills.filter(item => item.user_skill_is_self == 0);
    const targetDataSet = userskills2.filter(item => item.is_self === outputId);
    //console.log(targetDataSet)

    //const targetDataSet = this.userSkillData.filter(item => filterObj.rating === item.is_self);
    //console.log(targetDataSet)
    //targetGraphData = evaluateIndividualGraph(targetDataSet, userData, userDataClone, skillDataClone, positionTargetData, positionData);
    var targetGraphData = evaluateIndividualGraph(
      targetDataSet,
      null, //users,
      users,
      skills,
      //users,
      //skills,
      positiontargets,
      positions
    );

    var payload = {
      targetGraphData: targetGraphData,
      users: users,
      positions: positions,
      skills: skills,
      positiontargets: positiontargets,
      userskills: userskills
    }
    dispatch({type: types.SET_ALL, payload: payload});
    dispatch({type: types.SET_ACTIVE, payload: false});
  };

  callAll(dispatch,payload)
}

export const setOutputId = (dispatch, payload) => {
  dispatch({type: types.SET_OUTPUTID, payload: payload});
}








export const setClearFilterObj = (dispatch, payload) => {
  dispatch({type: types.SET_FILTEROBJECTCLEARALL, payload: payload})
}
// export const setUserData = (dispatch, payload) => {
//   var prefix = payload
//   const httpObj = {
//     url: `data/${prefix}/api/user/getAllUser`,
//     method: "GET",
//   };
//   httpHelper(httpObj, setUserDataResult, requestFailure, dispatch, false);
// }
// const setUserDataResult = (dispatch, data) => {
//   dispatch({type: types.SET_USERDATA, payload: data})
// };

// export const setSkillData = (dispatch, payload) => {
//   var prefix = payload
//   const httpObj = {
//     url: `data/${prefix}/api/user/getAllSkill`,
//     method: "GET",
//   };
//   httpHelper(httpObj, setSkillDataResult, requestFailure, dispatch, false);
// }
// const setSkillDataResult = (dispatch, data) => {
//   dispatch({type: types.SET_SKILLDATA, payload: data})
// };

// export const setPositionData = (dispatch, payload) => {
//   var prefix = payload
//   const httpObj = {
//     url: `data/${prefix}/api/user/getAllPosition`,
//     method: "GET",
//   };
//   httpHelper(httpObj, setPositionDataResult, requestFailure, dispatch, false);
//   //mjg this.props.showLoader(true);
// }
// const setPositionDataResult = (dispatch, data) => {
//   dispatch({type: types.SET_POSITIONDATA, payload: data})
// };

// export const setPositionTargetData = (dispatch, payload) => {
//   var prefix = payload
//   const httpObj = {
//     url: `data/${prefix}/api/user/getPositionTarget`,
//     method: "GET",
//   };
//   httpHelper(httpObj, setPositionTargetDataResult, requestFailure, dispatch, false);
// }
// const setPositionTargetDataResult = (dispatch, data) => {
//   dispatch({type: types.SET_POSITIONTARGETDATA, payload: data})
// };

// export const setUserSkillData = (dispatch, payload) => {
//   var prefix = payload
//   const httpObj = {
//     url: `data/${prefix}/api/user/getUserSkill`,
//     method: "GET",
//   };
//   httpHelper(httpObj, setUserSkillDataResult, requestFailure, dispatch, false);
// }
// const setUserSkillDataResult = (dispatch, data) => {
//   dispatch({type: types.SET_USERSKILLDATA, payload: data})
//   dispatch({type: types.SET_ACTIVE, payload: false});
// };

// const requestFailure = (e) => {
//   console.log(e)
//   //this.props.showLoader(false);
//   let error = {
//     status: false,
//     message: e.message,
//   };
//   console.log(error)
//   //this.setState({ error: error });
// };

// export const setUserAssessmentReport = (dispatch) => {

//   async function getUserAssessmentReport() {
//     let promise = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(UserAssessmentReport)
//       }, 1000)
//     });
//     let result = await promise; // wait until the promise resolves (*)
//     return result; // "done!"
//   }

//   const callAll = async () => {
//     var UserAssessmentReport = await getUserAssessmentReport()
//     //console.log(UserAssessmentReport)
//     dispatch({type: types.SET_USERASSESSMENTREPORT, payload: UserAssessmentReport});
//     dispatch({type: types.SET_ACTIVE, payload: false});
//   }

//   callAll()
// }

