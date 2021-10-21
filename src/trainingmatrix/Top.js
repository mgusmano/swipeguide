import React, { useState, useEffect } from 'react';
import { useMatrixState } from './state/MatrixProvider';

export const Top = React.memo((props) => {
  const {data} = props
  const matrixState = useMatrixState();
  const [goal, setGoal] = useState(0);
  const operatorID = props.data.id;

  useEffect(() => {
    setGoal(props.data.goal)
  },[props])

  console.log(matrixState.celldata)

  //var img = 'data/trainingmatrix/pictures/' + matrixState.celldata.operator.picture + ''
  var img = 'data/trainingmatrix/pictures/' + matrixState.celldata.picture + ''

  //var img = 'data/trainingmatrix/pictures/' + data.picture + ''

  return (
    <div style={{display:'flex',flexDirection:'column',padding:'10px',width:'100%',xheight:'500px',background:'gainsboro'}}>
      <div style={{marginLeft:'30px',marginTop:'5',height:'400px', borderBottom: '4px solid black'}}>
        <img alt="pic" src={img} style={{borderRadius: '50%', x: '125px', y: '250px', width: '140px', height: '140px'}}/>
        <div style={{marginTop:'10px',fontSize:'20px'}}>{matrixState.celldata.operatorName}</div>
      </div>

      <div  style={{flex: '1', marginLeft: '30px', overflow: 'hidden'}}>
          Goal for Certifications:<br/>
          <input
            type="text"
            value={goal}
            onChange={(event)=> {
              setGoal(event.target.value)
            }}
            style={{marginLeft:'10px',marginTop:5,width:'26px',height:'15px'}}
          />
          <button
            onClick={(event)=> {
              matrixState.setActive(true)
              var payload = {
                id: operatorID,
                goal: goal
              }
              matrixState.updateOperatorGoal(payload)
            }}
          >
            Update
          </button>
        </div>
    </div>
  )
})
