import React, { useEffect } from 'react';
import { MatrixProvider } from './state/MatrixProvider';
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
import { Row2Col1a } from './Row2Col1a';
import { Row2Col2 } from './Row2Col2';
import { Row2Col3 } from './Row2Col3';
import { Row3Col1 } from './Row3Col1';
import { Row3Col1a } from './Row3Col1a';
import { Row3Col2 } from './Row3Col2';
import { Row3Col3 } from './Row3Col3';
import { styles } from './styles';
import { useResizeEvent } from './useResizeEvent';


export const TrainingMatrix = ((props) => {
  return(<MatrixProvider><MainMatrixProvider props={props}/></MatrixProvider>)
})

const MainMatrixProvider = (props) => {
  const matrixState = useMatrixState();
  var certificationsData = props.props.certificationsData
  var multiplier = props.props.multiplier
  useResizeEvent()

  // const calcTotals = (certificationsDataCreated) => {
  //   var rowsArray = []
  //   var currentRow = -1;
  //   var rowCount = -1;

  //   var colsArray = []
  //   var currentCol = -1;
  //   var colCount = -1;

  //   for (let i = 0; i < certificationsDataCreated.length; i++) {

  //     if (certificationsDataCreated[i].row > currentRow) {
  //       currentRow = certificationsDataCreated[i].row
  //       //console.log('currentRow: ',currentRow)
  //       rowCount = rowsArray.push([certificationsDataCreated[i].operator.goal,0,0])
  //       //console.log('count: ',rowCount)
  //       //console.log(rowsArray)
  //     }
  //     switch(certificationsDataCreated[i].meta.certification) {
  //       case 'certified':
  //       case 'trainer':
  //       case 'supertrainer':
  //         rowsArray[rowCount-1][1] = rowsArray[rowCount-1][1] + 1;
  //         break;
  //       default:
  //         break;
  //     }
  //     rowsArray[rowCount-1][2] = rowsArray[rowCount-1][0] - rowsArray[rowCount-1][1];

  //     //console.log(certificationsDataCreated[i].meta.certification)
  //     //console.log(certificationsDataCreated[i])


  //     if (certificationsDataCreated[i].col > currentCol) {
  //       currentCol = certificationsDataCreated[i].col
  //       //colCount = colsArray.push(0)
  //       colCount = colsArray.push([certificationsDataCreated[i].skill.goal,0,0])
  //     }
  //     switch(certificationsDataCreated[i].meta.certification) {
  //       case 'certified':
  //       case 'trainer':
  //       case 'supertrainer':
  //         colsArray[colCount-1][1] = colsArray[colCount-1][1] + 1;
  //         break;
  //       default:
  //         break;
  //     }
  //     colsArray[colCount-1][2] = colsArray[colCount-1][0] - colsArray[colCount-1][1];
  //   }
  //   console.log(rowsArray)
  //   console.log(colsArray)
  //   matrixState.setRowsArray(rowsArray)
  //   var transpose = m => m[0].map((x,i) => m.map(x => x[i]))
  //   var colsArraytransposed = transpose(colsArray)
  //   matrixState.setColsArray(colsArraytransposed)
  // }



  useEffect(() => {
    if (multiplier === '') return

    //var certificationsData = props.props.certificationsData;
    var certificationsDataCreated = []
    var certID = 0
    for (let s = 0; s < props.props.skillsData.length; s++) {
      for (let o = 0; o < props.props.operatorsData.length; o++) {
        //console.log(props.props.skillsData[s])
        certID++
        certificationsDataCreated.push({
          "id": String(certID),
          "row":s,
          "col":o,
          "skill":props.props.skillsData[s],
          "operator":props.props.operatorsData[o],
          "skillID": String(s+1),
          "operatorID": String(o+1),
          "meta": {
            "type":"solid",
            "certification":"notapplicable",
            "strokecolor":"black",
            "letter":"",
            "start":"",
            "certstate": "disabled"
          },
          "data": []
        })
      }
    }
    //console.log(certificationsDataCreated)

    for (let o = 0; o < certificationsData.length; o++) {
      var found = certificationsDataCreated.find(element => {
        var c;
        if (element.skillID === certificationsData[o].skillID && element.operatorID === certificationsData[o].operatorID) {
          c = certificationsData[o]
        }
        return c
      });
      found.meta = certificationsData[o].meta
      found.data = certificationsData[o].data
    }

    //console.log(certificationsDataCreated)


    //calcTotals(certificationsDataCreated)


    // var rowsArray = []
    // var currentRow = -1;
    // var rowCount = -1;

    // var colsArray = []
    // var currentCol = -1;
    // var colCount = -1;

    // for (let i = 0; i < certificationsDataCreated.length; i++) {

    //   if (certificationsDataCreated[i].row > currentRow) {
    //     currentRow = certificationsDataCreated[i].row
    //     //console.log('currentRow: ',currentRow)
    //     rowCount = rowsArray.push([certificationsDataCreated[i].operator.goal,0,0])
    //     //console.log('count: ',rowCount)
    //     //console.log(rowsArray)
    //   }
    //   switch(certificationsDataCreated[i].meta.certification) {
    //     case 'certified':
    //     case 'trainer':
    //     case 'supertrainer':
    //       rowsArray[rowCount-1][1] = rowsArray[rowCount-1][1] + 1;
    //       break;
    //     default:
    //       break;
    //   }
    //   rowsArray[rowCount-1][2] = rowsArray[rowCount-1][0] - rowsArray[rowCount-1][1];

    //   //console.log(certificationsDataCreated[i].meta.certification)
    //   //console.log(certificationsDataCreated[i])


    //   if (certificationsDataCreated[i].col > currentCol) {
    //     currentCol = certificationsDataCreated[i].col
    //     //colCount = colsArray.push(0)
    //     colCount = colsArray.push([certificationsDataCreated[i].skill.goal,0,0])
    //   }
    //   switch(certificationsDataCreated[i].meta.certification) {
    //     case 'certified':
    //     case 'trainer':
    //     case 'supertrainer':
    //       colsArray[colCount-1][1] = colsArray[colCount-1][1] + 1;
    //       break;
    //     default:
    //       break;
    //   }
    //   colsArray[colCount-1][2] = colsArray[colCount-1][0] - colsArray[colCount-1][1];
    // }
    // console.log(rowsArray)
    // console.log(colsArray)
    // matrixState.setRowsArray(rowsArray)
    // var transpose = m => m[0].map((x,i) => m.map(x => x[i]))
    // var colsArraytransposed = transpose(colsArray)
    // matrixState.setColsArray(colsArraytransposed)



    matrixState.setActive(true)

    matrixState.setAll({
      //'certificationsDataCreated': certificationsDataCreated,
      'first':true,
      'operatorsData':props.props.operatorsData,
      'skillsData':props.props.skillsData,
      'certificationsData':certificationsDataCreated,
      'multiplier':multiplier
    })
  },[certificationsData,multiplier])

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
            <LoadingOverlay
              style={{width:'100%',height:'100%',zIndex:'10'}}
              active={false}
              spinner
              text='Loading...'
              >
              <Row1Col2 data={matrixState.byOperator}/>
            </LoadingOverlay>
            <Row1Col3 data={[['Goal','# Certified','Gap']]}/>
          </div>

          <div className='leftrow2' style={{...styles.h,xflex:'1',height:(matrixState.dimensions.row2Orig)+'px',background:'lightgray'}}>
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
            {matrixState.rowsArray !== null &&
              <Row2Col3 data={matrixState.rowsArray}/>
            }
          </div>

          <div className='leftrow3' style={{...styles.h,height: matrixState.dimensions.row3+'px',minHeight:matrixState.dimensions.row3+'px',background:'lightgray'}}>
            <Row3Col1 data={[['Goal'],['# Certified'],['Gap']]}/>
            <Row3Col1a/>
            {matrixState.colsArray !== null &&
              <Row3Col2 data={matrixState.colsArray}/>
            }
            <Row3Col3/>
          </div>

        </div>
        {/* left area - matrix - end */}

        <div role="separator"></div>

        {/* right area - details - start */}
        {/* <div className='right' style={{display:'flex',flexDirection:'row',overflow: 'hidden',padding:'0px', background:'white', boxSizing:'border-box',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'}}>
          <div style={{display: matrixState.skillDialog, width:'300px', height:'100%', boxSizing:'border-box', xpadding:'10px', xboxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'}}>
            {matrixState.specific}
          </div>
          <div style={{display: matrixState.operatorDialog, width:'300px', height:'100%', boxSizing:'border-box', xpadding:'10px', xboxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'}}>
            {matrixState.specific}
          </div>
          <div style={{display: matrixState.mainDialog, width:'300px', height:'100%', boxSizing:'border-box', xpadding:'10px', xboxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'}}>
          {matrixState.main}
          </div>
        </div> */}
        {/* right area - details - end */}

        {/* right area - details - start */}

        <div className='right' style={{display:'flex',flexDirection:'column',overflow: 'hidden',padding:'0px', background:'white', boxSizing:'border-box',boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'}}>

          <div style={{height:'200px',display: matrixState.topDialog}}>
            {matrixState.top}
          </div>

          <div className='right' style={{flex: '1',display:'flex',flexDirection:'row',overflow: 'hidden',padding:'0px', background:'white', boxSizing:'border-box',xboxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'}}>
            <div style={{display: matrixState.skillDialog, width:'350px', height:'100%', boxSizing:'border-box', xpadding:'10px', xboxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'}}>
              {matrixState.specific}
            </div>
            <div style={{display: matrixState.operatorDialog, width:'350px', height:'100%', boxSizing:'border-box', xpadding:'10px', xboxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'}}>
              {matrixState.specific}
            </div>
            <div style={{display: matrixState.mainDialog, width:'350px', height:'100%', boxSizing:'border-box', xpadding:'10px', xboxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'}}>
              {matrixState.main}
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

export default TrainingMatrix
