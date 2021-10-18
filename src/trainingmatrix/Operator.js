import React, { useState, useEffect } from 'react';
import { useMatrixState } from './state/MatrixProvider';

import { Diamond } from './Diamond';
import { MatrixCell } from './MatrixCell';

export const Operator = React.memo((props) => {
  const matrixState = useMatrixState();
  const [goal, setGoal] = useState(0);
  const operatorID = props.data.id;

  console.log(props)

  useEffect(() => {
    setGoal(props.data.goal)
  },[props])

  const {data} = props
  //const goal = props.data.goal;
  var bandX=50, bandY=50;
  var fontsize=14
  //var img = 'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/' + data.id + '.jpg'
  //var img = 'data/trainingmatrix/pictures/Aaron Cariaga.JPG'
  var img = 'data/trainingmatrix/pictures/' + data.picture + ''

  return (
    <div style={{display:'flex',flexDirection:'column',padding:'10px',width:'100%',height:'100%'}}>
      <div style={{height:'230px'}}>
        <div style={{fontSize:'20px'}}>{data.operatorName}</div>
        <div>
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
        <img alt="pic" src={img} style={{marginTop:'30',borderRadius: '50%', x: '125px', y: '250px', width: '140px', height: '140px'}}/>

      </div>

      <div style={{flex:'1', overflow: 'hidden'}}>
        <div>Select a Skill<br/>to Load Certification Data<br/>for this Operator</div>
        <select size="15" onChange={(event)=>{
          var val = event.target.options[ event.target.selectedIndex ].value
          console.log(val)

          console.log(matrixState.certifications)

          var found = matrixState.certifications.find(element => element.id == val.toString());

          const foundoperator = matrixState.operators.find(element => element.id == found.operatorID.toString());
          const foundskill = matrixState.skills.find(element => element.id == found.skillID.toString());

          found.operator = foundoperator
          found.skill = foundskill

          console.log(found)
          matrixState.setCellData(found)
          matrixState.showMainDialog('block')
        }}>
        {data.data.map((item,i) => {
          console.log(item)

console.log(item.operator.id)
console.log(item.skill.id)

//console.log(matrixState.certifications)

  const found = matrixState.certifications.find((element) => {
    if (element.operatorID === item.operator.id && element.skillID === item.skill.id) {
      return element
    }
  });
  console.log(found)

          return (
            <option key={i} value={found.id}>
              {item.skill.skillName}
            </option>
          )
        })}
        </select>
      </div>


      <div style={{flex:'1',overflow:'none',display: 'none'}}>
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
