import React, { useState, useEffect } from 'react';
import { useMatrixState } from './state/MatrixProvider';
import { Main } from './Main';

//import { Diamond } from './Diamond';
//import { MatrixCell } from './MatrixCell';

export const Operator = React.memo((props) => {
  const matrixState = useMatrixState();
  const [goal, setGoal] = useState(0);
  const operatorID = props.data.id;

  useEffect(() => {
    setGoal(props.data.goal)
  },[props])

  const {data} = props
  //const goal = props.data.goal;
  //var bandX=50, bandY=50;
  //var fontsize=14
  //var img = 'https://examples.sencha.com/extjs/7.4.0/examples/kitchensink/resources/images/staff/' + data.id + '.jpg'
  //var img = 'data/trainingmatrix/pictures/Aaron Cariaga.JPG'
  var img = 'data/trainingmatrix/pictures/' + data.picture + ''

  return (
    <div style={{display:'flex',flexDirection:'column',padding:'10px',width:'100%',height:'100%'}}>
      <div style={{marginLeft:'30px',marginTop:'5',height:'200px', borderBottom: '4px solid black'}}>
        <img alt="pic" src={img} style={{borderRadius: '50%', x: '125px', y: '250px', width: '140px', height: '140px'}}/>
        <div style={{marginTop:'10px',fontSize:'20px'}}>{data.operatorName}</div>
      </div>

      <div style={{flex:'1', display:'flex',flexDirection:'column',overflow: 'hidden',marginLeft:'30px',marginTop:'30px', marginRight:'30px'}}>
        Stations:
        <select size="15" onChange={(event)=>{
          var val = event.target.options[ event.target.selectedIndex ].value
          var found = matrixState.certifications.find(element => element.id === val.toString());
          const foundoperator = matrixState.operators.find(element => element.id === found.operatorID.toString());
          const foundskill = matrixState.skills.find(element => element.id === found.skillID.toString());
          found.operator = foundoperator
          found.skill = foundskill
          found.certificationID = found.id

          console.log(found)
          matrixState.setCellData(found)
          matrixState.setMain(<Main data={found}/>)
          matrixState.showMainDialog('block')
        }}>
        {data.data.map((item,i) => {
          const found = matrixState.certifications.find((element) => {
            var theElement = null
            if (element.operatorID === item.operator.id && element.skillID === item.skill.id) {
              theElement = element
            }
            return theElement
          });
          return (
            <option key={i} value={found.id}>
              {item.skill.skillName}
            </option>
          )
        })}
        </select>
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


      {/* <div style={{flex:'1',overflow:'none',display: 'none'}}>
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
      </div> */}




    </div>
  )
})
