import React, { useEffect } from 'react';
import { useMatrixState } from './state/MatrixProvider';
import LoadingOverlay from 'react-loading-overlay';
import { Legend } from './Legend';
import "flex-splitter-directive"
import "flex-splitter-directive/styles.min.css"
import { Row1Col1 } from './Row1Col1';
import { Row1Col1a } from './Row1Col1a';
import { Row1Col2 } from './Row1Col2';
import { Row1Col3 } from './Row1Col3';
import { Row2Col1 } from './Row2Col1';
//import { Row2Col1a } from './Row2Col1a';
import { Row2Col1a } from './Row2Col1a';
import { Row2Col2 } from './Row2Col2';
import { Row2Col3 } from './Row2Col3';
import { Row3Col1 } from './Row3Col1';
import { Row3Col1a } from './Row3Col1a';
import { Row3Col2 } from './Row3Col2';
import { Row3Col3 } from './Row3Col3';
//import { Main } from './Main';
import { styles } from './styles';
import { useResizeEvent } from './useResizeEvent';
import { MatrixProvider } from './state/MatrixProvider';

export const TrainingMatrix = ((props) => {
  return(<MatrixProvider><MainMatrixProvider props={props}/></MatrixProvider>)
})

const MainMatrixProvider = (props) => {
  const matrixState = useMatrixState();
  var certificationsData = props.props.certificationsData
  useResizeEvent()
  var multiplier = props.props.multiplier

  useEffect(() => {
    if (multiplier === '') return

    var certificationsData = props.props.certificationsData;
    var certificationsDataCreated = []
    var certID = 0
    for (let s = 0; s < props.props.skillsData.length; s++) {
      for (let o = 0; o < props.props.operatorsData.length; o++) {
        certID++
        certificationsDataCreated.push({"id": String(certID),"operatorID": String(o+1),"skillID": String(s+1),"meta": {"type":"solid","certification":"notapplicable"},"data": []})
      }
    }

    for (let o = 0; o < certificationsData.length; o++) {
      var found = certificationsDataCreated.find(element => {
        if (element.skillID === certificationsData[o].skillID && element.operatorID === certificationsData[o].operatorID) {
          return certificationsData[o]
        }
      });
      found.meta = certificationsData[o].meta
      found.data = certificationsData[o].data
    }

    matrixState.setActive(true)
    matrixState.setAll({
      'first':true,
      'operatorsData':props.props.operatorsData,
      'skillsData':props.props.skillsData,
      'certificationsData':certificationsDataCreated,
      'multiplier':multiplier
    })
  },[certificationsData,multiplier])

  // useEffect(() => {
  //   if (matrixState.specific !== null) {
  //     //console.log('matrixState.specific:',matrixState.specific.props.data)
  //   }
  // },[matrixState.specific])

  const cellClicked = (id) => {
    props.props.cellClicked(id)
  }

  return (
    <div className='trainingmatrix' style={{...styles.v,width:'100%',height:'100%',background:'lightgray'}}>
      {props.props.showLegend && <Legend/>}

      {/* main area start */}
      {matrixState.dimensions !== null &&
      <div className='mainarea' data-flex-splitter-horizontal style={{...styles.horizontal,padding:'20px',width:'100%',height:'100%'}}>

        {/* left area - matrix - start */}
        <div data-flex-splitter-horizontal className='left' style={{...styles.v,flex:1,boxSizing:'border-box',display:'flex'}}>

          <div className='leftrow1' height={matrixState.dimensions.row1} style={{...styles.h,overflow:'hidden',height:matrixState.dimensions.row1+'px',background:'lightgray'}}>
            <Row1Col1/>
            <Row1Col1a data={[['Rev#']]}/>
            <Row1Col2 data={matrixState.byOperator}/>
            <Row1Col3 data={[['Goal','# Certified','Gap']]}/>
          </div>

          <div className='leftrow2' style={{...styles.h,flex:'1',xheight:(matrixState.dimensions.row2Orig)+'px',background:'lightgray'}}>
            <Row2Col1 data={matrixState.bySkill}/>
            {/* <Row2Col1a/> */}
            <Row2Col1a data={[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}/>

            {/* <Log data={matrixState.active}/> */}
            <LoadingOverlay
              style={{width:'100%',height:'100%',zIndex:'10'}}
              active={matrixState.active}
              spinner
              text='Loading...'
              >
              <Row2Col2 data={matrixState.bySkill} cellClicked={cellClicked}/>
            </LoadingOverlay>
            <Row2Col3 data={matrixState.righttotals}/>
          </div>

          <div className='leftrow3' style={{...styles.h,height: matrixState.dimensions.row3+'px',minHeight:matrixState.dimensions.row3+'px',background:'lightgray'}}>
            <Row3Col1 data={[['Goal'],['# Certified'],['Gap']]}/>
            <Row3Col1a/>
            <Row3Col2 data={matrixState.bottomtotals}/>
            <Row3Col3/>
          </div>

        </div>
        {/* left area - matrix - end */}

        <div role="separator"></div>

        {/* right area - details - start */}
        <div className='right' style={{display:'flex',flexDirection:'row',overflow: 'hidden',padding:'0px', background:'white', boxSizing:'border-box',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'}}>
          {/* <div style={{display:'flex',flexDirection:'row',width:'100%', height:'100%', padding:'25px', background:'white', boxSizing:'border-box',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'}}> */}
            <div style={{display: matrixState.skillDialog, width:'300px', height:'100%', boxSizing:'border-box', xpadding:'10px', xboxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'}}>
              {matrixState.specific}
            </div>
            <div style={{display: matrixState.operatorDialog, width:'300px', height:'100%', boxSizing:'border-box', xpadding:'10px', xboxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'}}>
              {matrixState.specific}
            </div>
            <div style={{display: matrixState.mainDialog, width:'300px', height:'100%', boxSizing:'border-box', xpadding:'10px', xboxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'}}>
            {matrixState.main}
            </div>
          {/* </div> */}
        </div>
        {/* right area - details - end */}
      </div>
      }
      {/* main area end */}
    </div>
  )
}

export default TrainingMatrix
