import React, { useState, useEffect } from 'react';
import { useMatrixState } from './state/MatrixProvider';

import { Diamond } from './Diamond';
import { MatrixCell } from './MatrixCell';

export const Operator = React.memo((props) => {
  const matrixState = useMatrixState();
  const [goal, setGoal] = useState(0);
  const operatorID = props.data.id;

  useEffect(() => {
    setGoal(props.data.goal)
  },[props])

  const {data} = props
  console.log(props)
  //const goal = props.data.goal;
  var bandX=50, bandY=50;
  var fontsize=14
  var img = 'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/' + data.id + '.jpg'
  return (
    <div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%'}}>
      <div style={{height:'200px'}}>
        <div style={{fontSize:'20px'}}>Operator: {data.operatorName}</div>
        <div>
          Goal for Certifications:
          {/* <input value={goal} type="input" style={{marginLeft:'10px',marginTop:5,marginBottom:5,width:'16px',height:'16px'}}
          /> */}
          <input
            type="text"
            value={goal}
            onChange={(event)=> {
              setGoal(event.target.value)
            }}
            style={{marginLeft:'10px',marginTop:5,width:'26px',height:'16px'}}
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
        <img alt="pic" src={img} style={{marginTop:'30',borderRadius: '50%', x: '125px', y: '250px', width: '140px', height: '140px'}}/>

      </div>
      <div style={{flex:'1',overflow:'none'}}>
        <svg width="100%" height="100%">
        {data.data.map((item,i) => {
          return (
            <g key={i} transform={"translate(200," + (i*bandX) + ")"} className="group" >
              <text
                dominantBaseline="left"
                textAnchor="end"
                stroke="black"
                x={1}
                y={bandY-(bandY/3)}
                className="text"
                style={{fontSize:fontsize+'px'}}>
                  {item.skill.skillName}
              </text>
              <Diamond meta={item.meta} data={item.data} boxSize={bandX} padding={30}/>
              <MatrixCell
                rowid={item.meta.id}
                colid={1}
                bandX={bandX}
                bandY={bandY}
                type="pie"
                data={data}
              />
            </g>
          )
        })}
        </svg>
      </div>
    </div>
  )
})
