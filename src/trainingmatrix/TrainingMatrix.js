import React, { useEffect } from 'react';
import { useMatrixState } from './state/MatrixProvider';
import LoadingOverlay from 'react-loading-overlay';
import { Legend } from './Legend';
//import { Log } from './Log';
import { Toolbar } from './Toolbar';
import { Row1Col1 } from './Row1Col1';
import { Row1Col2 } from './Row1Col2';
import { Row1Col3 } from './Row1Col3';
import { Row2Col1 } from './Row2Col1';
import { Row2Col2 } from './Row2Col2';
import { Row2Col3 } from './Row2Col3';
import { Row3Col1 } from './Row3Col1';
import { Row3Col2 } from './Row3Col2';
import { Row3Col3 } from './Row3Col3';
import { styles } from './styles';
import { useResizeEvent } from './useResizeEvent';

//export const TrainingMatrix = React.memo(({widgetData}) => {
export const TrainingMatrix = () => {
  const matrixState = useMatrixState();
  useResizeEvent()

  useEffect(() => {
    matrixState.setActive(true)
    matrixState.setAll(true)
  },[])

  //<div className='' style={{...styles.vertical,width:'100%',height:'100%',fontSize:matrixState.dimensions.fontsize+'pt'}}>
  return (
    <div className='trainingmatrix' style={{...styles.v,width:'100%',height:'100%'}}>
      {matrixState.showTheLegend && <Legend/>}
      <Toolbar/>

      {/* main area start */}
      {matrixState.dimensions !== null &&
      <div className='mainarea' data-flex-splitter-horizontal style={{...styles.horizontal,width:'100%',height:'100%'}}>

        {/* left area - matrix - start */}
        <div className='left' style={{...styles.v,flex:1,boxSizing:'border-box'}}>

          <div className='leftrow1' height={matrixState.dimensions.row1} style={{...styles.h,height:matrixState.dimensions.row1+'px'}}>
            <Row1Col1/>
            <Row1Col2 data={matrixState.byOperator}/>
            <Row1Col3 data={[['Goal','# Certified','Gap']]}/>
          </div>

          <div className='leftrow2' style={{...styles.h,height:(matrixState.dimensions.row2Orig)+'px'}}>
            <Row2Col1 data={matrixState.bySkill}/>

            {/* <Log data={matrixState.active}/> */}
            <LoadingOverlay
              style={{width:'100%',height:'100%',zIndex:'10'}}
              active={matrixState.active}
              spinner
              text='Loading...'
              >
              <Row2Col2 data={matrixState.bySkill}/>
            </LoadingOverlay>
            <Row2Col3 data={matrixState.righttotals}/>
          </div>

          <div className='leftrow3' style={{...styles.h,height: matrixState.dimensions.row3+'px',minHeight:matrixState.dimensions.row3+'px'}}>
            <Row3Col1 data={[['Goal'],['# Certified'],['Gap']]}/>
            <Row3Col2 data={matrixState.bottomtotals}/>
            <Row3Col3/>
          </div>

        </div>
        {/* left area - matrix - end */}

        <div role="separator"></div>

        {/* right area - details - start */}
        <div className='right' style={{width:'400px'}}>
          <div style={{width:'100%', height:'100%', padding:'25px', background:'white', boxSizing:'border-box'}}>
            <div style={{width:'100%', height:'100%', boxSizing:'border-box', padding:'10px', boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'}}>
              {matrixState.specific}
            </div>
          </div>
        </div>
        {/* right area - details - end */}

      </div>
      }
      {/* main area end */}

    </div>
  )
}
