import React, { useCallback } from 'react';
import { Matrix } from './Matrix';
import { MatrixCell } from './MatrixCell';
import { useMatrixState } from './state/MatrixProvider';
import { Diamond } from './Diamond';
import { Main } from './Main';

export const Row2Col2 = (props) => {
  const {data} = props;
  const matrixState = useMatrixState();
  const {row2Orig,row2,col2,fontsize,topHeight,bandX,bandY} = matrixState.dimensions;

  const onScroll = (e) => {
    var vert = document.getElementById('skill')
    var vert2 = document.getElementById('skilltotals')
    var horz = document.getElementById('student')
    var horz2 = document.getElementById('studenttotals')
    if (vert.scrollTop !== e.target.scrollTop) {
      vert.scrollTop = e.target.scrollTop;
      vert2.scrollTop = e.target.scrollTop;
    }
    else {
      horz.scrollLeft = e.target.scrollLeft;
      horz2.scrollLeft = e.target.scrollLeft;
    }
  }

  const renderMainRow = (props,r,row,sTop) => {
    var header2 = ''
    if (row.meta !== undefined) {
      if (row.meta.skillName !== undefined) {
        header2 = row.meta.skillName
      }
    }
    return (
      <>
      {sTop !== 0 && <text dominantBaseline="auto" style={{fontSize: matrixState.dimensions.fontsize+'px'}} x={5} y={props.bandY-10} height={props.sTop} >{header2}</text>}
      </>
    )
  }

  const clickMainCell = useCallback((e,colid,rowid,type,data,col) => {
    matrixState.setCurrentCertification(data.certificationID)
    matrixState.setSpecific(<Main data={data}/>)
  })

  const renderMainCell = (props,c,col,r,row,sTop,data,clickCellFunction,fontsize) => {
    // console.log(row)
    // console.log(col)
    //var certificationID = col.certificationID;

    const {bandX, bandY} = props
    return (
      <g key={r+c} transform={"translate(" + (c*bandX) + "," + sTop + ")"} className="group" >
        <Diamond meta={col.meta} data={col.data} boxSize={bandX} padding={30}/>
        <MatrixCell
          clickCellFunction={clickCellFunction}
          rowid={row.meta.id}
          colid={col.meta.id}
          bandX={bandX}
          bandY={bandY}
          type="pie"
          col={col}
          data={data}
        />
      </g>
    )
  }


  return (
    <div style={{width:(col2)+'px',maxWidth:(col2)+'px',height:(row2Orig)+'px',maxHeight:(row2Orig)+'px',overflow:'auto'}} onScroll={onScroll} >
      <div width={(col2)+'px'} height={(row2)+'px'}>
      <svg width={(col2)+'px'} height={(row2 === 0 ? 0 : row2-4)+'px'}>
        {data !== null &&
        <Matrix
          renderRowFunction={renderMainRow}
          renderCellFunction={renderMainCell}
          clickCellFunction={clickMainCell}
          data={data}
          params={{
            name:'main',fontsize:fontsize,top:topHeight,
            translateX:0,translateY:0,bandX:bandX,bandY:bandY
          }}
        />
        }
      </svg>
      </div>
    </div>
  )
}
