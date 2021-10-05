import * as types from './BenchmarkTypes';
// import evaluateLocationGraph from './helper/locationGraphHelper';
// import evaluatePositionGraph from './helper/positionGraphHelper';
// import evaluateManagerGraph from './helper/managerGraphHelper';
// import evaluateIndividualGraph from './helper/individualGraphHelper';

export const BenchmarkReducer = (state, action) => {
  const { type, payload } = action;
  var s;
  var data;
  var options;
  var dataSource;
  switch (type) {

    case types.SET_OUTPUTID:
      var filterObj = state.filterObj
      filterObj.outputId = payload


      return {...state,
        filterObj
      }



    case types.SET_ALL:
      dataSource = {
        chart: {
          caption: "Assessment Report",
          scrollColor: "#32CD32",
          subcaption: "2020, Quarter - 1",
          theme: state.theme,
          //theme: 'fusion',
          adjustDiv: "0",
          yAxisValueDecimals: "2",
          forceYAxisValueDecimals: "1",
          yAxisMaxValue: "5.00",
          yAxisMinValue: "0.00",
          numDivLines: "9",
          labelDisplay: "rotate",
          canvasPadding: "30",
          baseFontSize: "16",
          showToolTip: "1",
          lineThickness: "3",
          flatScrollBars: "1",
          scrollheight: "10",
          numVisiblePlot: "20",
          plottooltext: "$displayValue",
          decimals: "2"
        },
        categories: [
          {
            category: payload.targetGraphData.category
          }
        ],
        dataset: payload.targetGraphData.dataset
      }
      console.log(dataSource)
      //this.setState({ dataSource });






      return {
        ...state,
        dataSource: dataSource,
        users: payload.users,
        positions: payload.positions,
        skills: payload.skills,
        positiontargets: payload.positiontargets,
        userskills: payload.userskills
      }
    case types.SET_LABELS:
      return {
        ...state,
        labelPosition: payload.labelPosition,
        labelFunctionGroup: payload.labelFunctionGroup,
        labelLine: payload.labelLine,
        labelCompetency: payload.labelCompetency,
      }
    case types.SET_PREFIX:
      return {...state,prefix:payload}
    case types.SET_FILTEROBJECTCLEARALL:
      return {...state,filterObjClearAll:JSON.stringify(state.filterObj)}
    case types.SET_USERDATA:
      data = payload;
      options = state.options;
      if (data && data.length > 0) {
        data.forEach((d) => {
          options.userOption.push({
            label: d.user_name,
            value: d.user_id,
          });
          options.filterUserOptions.push({
            label: d.user_name,
            value: d.user_id,
          });
        });
        return {...state,
          userDataClone: [...data],
          userData: [...data],
          options,
        }
        // this.setState(
        //   {
        //     userDataClone: [...data],
        //     userData: [...data],
        //     options,
        //   },
        //   () => {
        //     this.setUniqueOptions();
        //   }
        // )
      }
      else {
        let errorMessage = (data && data.sqlMessage) ? data.sqlMessage : 'User data not found!';
        console.log(errorMessage)
        return {...state,
          error: errorMessage,
        }
        //toast.error(errorMessage);
      }
    case types.SET_SKILLDATA:
      //const { options } = this.state;
      data = payload;
      options = state.options;
      if (data && data.length > 0) {
        data.forEach((d) => {
          let obj = { value: d.skill_id, label: d.skill_name };
          options.skillOption.push(obj);
          options.filterSkillOptions.push(obj);
        });
        return {...state,
          options,
          skillData: [...data],
          skillDataClone: [...data],
        }
        // this.setState(
        //   {
        //     options,
        //     skillData: [...data],
        //     skillDataClone: [...data],
        //   },
        //   () => {
        //     this.setSkillFilterData();
        //   }
        // )
      }
      else {
        let errorMessage = (data && data.sqlMessage) ? data.sqlMessage : 'Skill data not found!';
        console.log(errorMessage)
        return {...state,
          error: errorMessage,
        }
      }


      case types.SET_POSITIONDATA:
        data = payload;
        options = state.options;

        const customizePositionData = (data) => {
          //console.log(JSON.stringify(data))
          //debugger
          let array = [];
          if (data.length > 0) {
            data.forEach((d) => {
              if (!array.some((el) => el.label === d.position_name)) {
                array.push({
                  label: d.position_name,
                  value: d.position_id,
                });
              }
            });
          }
          return array;
        };

        //const { options } = this.state;
        options.positionOption = customizePositionData(data);
        return {...state,
          positionData: [...data],
          options,
        }
        // this.setState({
        //   positionData: [...data],
        //   options,
        // });


      case types.SET_POSITIONTARGETDATA:
        data = payload;
        return {...state,
          positionTargetData: data,
        }

        // case types.SET_USERSKILLDATA:
        //   var userSkillData = payload;

        //   //generateGraphData = (userSkillData) => {
        //     //console.log('generateGraphData')

        //    //console.log(state)
        //     const { filterObj, userData, userDataClone, skillDataClone, positionTargetData, positionData } = state;
        //     let targetGraphData = null;

        //     userDataClone.forEach(user => {
        //       if (user.skillRatings && user.skillRatings.length > 0) {
        //         user.skillRatings = []
        //         user.skillRatingAverage = 0
        //       }
        //     })
        //     if (filterObj.outputId === 4) {
        //       const targetDataSet = userSkillData.filter(item => filterObj.rating === item.is_self);
        //       targetGraphData = evaluateLocationGraph(targetDataSet, userDataClone, skillDataClone, positionTargetData, positionData);
        //     } else if (filterObj.outputId === 3) {
        //       const targetDataSet = userSkillData.filter(item => filterObj.rating === item.is_self);
        //       targetGraphData = evaluatePositionGraph(targetDataSet, userDataClone, skillDataClone, positionTargetData, positionData);
        //     } else if (filterObj.outputId === 2) {
        //       const targetDataSet = userSkillData.filter(item => filterObj.rating === item.is_self);
        //       targetGraphData = evaluateManagerGraph(targetDataSet, userData, userDataClone, skillDataClone, positionTargetData, positionData);
        //     } else if (filterObj.outputId === 1) {
        //       const targetDataSet = userSkillData.filter(item => filterObj.rating === item.is_self);
        //       targetGraphData = evaluateIndividualGraph(targetDataSet, userData, userDataClone, skillDataClone, positionTargetData, positionData);
        //     }

        //     const dataSource = {
        //       chart: {
        //         caption: "Assessment Report",
        //         scrollColor: "#32CD32",
        //         subcaption: "2020, Quarter - 1",
        //         //theme: state.theme,
        //         "theme": "fusion",
        //         adjustDiv: "0",
        //         yAxisValueDecimals: "2",
        //         forceYAxisValueDecimals: "1",
        //         yAxisMaxValue: "5.00",
        //         yAxisMinValue: "0.00",
        //         numDivLines: "9",
        //         labelDisplay: "rotate",
        //         canvasPadding: "30",
        //         baseFontSize: "16",
        //         showToolTip: "1",
        //         lineThickness: "3",
        //         flatScrollBars: "1",
        //         scrollheight: "10",
        //         numVisiblePlot: "20",
        //         plottooltext: "$displayValue",
        //         decimals: "2"
        //       },
        //       categories: [
        //         {
        //           category: targetGraphData.category
        //         }
        //       ],
        //       dataset: targetGraphData.dataset
        //     }
        //     //console.log(dataSource)
        //     //this.setState({ dataSource });

        //     // return {...state,
        //     //   dataSource: dataSource,
        //     // }
    case types.SET_ERROR:
      return {...state,error:payload}

    // case types.SET_USERASSESSMENTREPORT:
    //   return {...state,userAssessmentReportData:payload}
    case types.SET_ACTIVE:
      if (payload === true) {
        s = {...state,active:true}
      }
      else {
        s = {...state,active:false}
      }
      return s
    default:
      return state;
  }
}