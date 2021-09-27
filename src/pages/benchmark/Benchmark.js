import React, { useEffect } from 'react';
import { BenchmarkProvider } from './state/BenchmarkProvider';

import { useAppState } from '../../state/AppProvider';
import { useBenchmarkState } from './state/BenchmarkProvider';
import LoadingOverlay from 'react-loading-overlay';
import { North } from './North'
import BenchmarkProperties from './BenchmarkProperties';
import { West } from './West'
import { Center } from './Center'
import { East } from './East'
import { South } from './South'
import "flex-splitter-directive"
import "flex-splitter-directive/styles.min.css"
//import { withStyles } from "@material-ui/core/styles";
//import UploadCSVStyle from "./uploadCSV";
//import PropTypes from "prop-types";

export const Benchmark = ((props) => {
  console.log(props)
  return (
  <BenchmarkProvider><Main props={props}/></BenchmarkProvider>
)
})

// Benchmark.propTypes = {
//   classes: PropTypes.object,
//   //showLoader: PropTypes.func,
// };

// Benchmark.defaultProps = {};

// export  default withStyles(UploadCSVStyle)(Benchmark);

//export  default withStyles(UploadCSVStyle)(  Benchmark = ((props) => (<BenchmarkProvider><Main props={props}/></BenchmarkProvider>)));
//

const Main = (({props}) => {
  //console.log(props)
  const appState = useAppState();
  const benchmarkState = useBenchmarkState();

  useEffect(() => {
    //benchmarkState.setMe();
    //return

    benchmarkState.setActive(true)
    var prefix = props.Partner.PartnerShort
    benchmarkState.setLabels(props.Partner)
    benchmarkState.setAll({
      prefix: prefix,
      outputId: benchmarkState.filterObj.outputId
    })
    return


    benchmarkState.setPrefix(prefix)
    benchmarkState.setClearFilterObj();

    // benchmarkState.setUserData(prefix);
    // benchmarkState.setSkillData(prefix);

    // benchmarkState.setPositionData(prefix);
    // benchmarkState.setPositionTargetData(prefix);

    //benchmarkState.setUserSkillData(prefix);
    //benchmarkState.getAllUserSkill(prefix);

    //benchmarkState.setUserAssessmentReport()
  },[])

  return (
    <LoadingOverlay
      styles={{wrapper: {width:'100%',height:'100%',zIndex:'10'}}}
      active={benchmarkState.active}
      spinner
      text='Loading...'
    >
      <div className='app' data-flex-splitter-vertical style={{...benchmarkState.styles.v,width:'100%',height:'100%'}}>
        <div className='north' style={{...benchmarkState.styles.v,height:'50px'}}>
          <North/>
        </div>
        <div role="separator"></div>
        <div data-flex-splitter-horizontal style={{...benchmarkState.styles.h,flex:1,overflow:'hidden'}}>
          <div className='west' style={{...benchmarkState.styles.v,width:'200px',height:'100%',background:'rgb(51, 124, 182)'}}>
            <West/>
          </div>
          <div role="separator"></div>
          <div className='center' style={{...benchmarkState.styles.v,flex:1,width:'100%',height:'100%',overflow:'auto'}}>
            <Center/>
          </div>
          <div role="separator"></div>
          <div className='east' style={{...benchmarkState.styles.v,width:'300px',height:'100%'}}>
            {/* <East/> */}
            <BenchmarkProperties
              Partner={props.Partner}
              //classes={classes}
              // state={this.state}
              // skillSelectChangeHandler={this.skillSelectChangeHandler}
              // selectChangeHandler={this.selectChangeHandler}
              // userSelectChangeHandler = {this.userSelectChangeHandler}
              // handleRadioChange = {this.handleRadioChange}
              // userMultiSelectChangeHandler = {this.userMultiSelectChangeHandler}
              // skillMultiSelectChangeHandler = {this.skillMultiSelectChangeHandler}
            />
          </div>
        </div>
        <div role="separator"></div>
        <div className='south' style={{height:'50px'}}>
          <South/>
        </div>
      </div>
    </LoadingOverlay>
  )
})
