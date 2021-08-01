import React from 'react';
import { Diamond } from './Diamond';
import { MatrixCell } from './MatrixCell';

export const Skill = React.memo((props) => {
  const {data} = props;
  const {num} = props;
  var bandX=30;
  var bandY=30;
  var fontsize=14;
  const result = num % 2;
  var src;
  if (result === 1) {
    src="https://app.swipeguide.com/guide/example-guide-line-1-wort-cooling-wort-aeration/safety/attach-lock/2"
  }
  else {
    src="https://app.swipeguide.com/guide/multipacker-ocme/getting-started/copy%20500e%20of%20prepare-the-machine"
  }
  return (
    <div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%'}}>
      <div style={{height:'30px',fontSize:'18px'}}>
        <div style={{fontSize:'24px'}}>Skill: {data.skill.skillName}</div>
      </div>
      <div style={{flex:'1'}}>
        <svg width="100%" height="100%">
        {data.skill.data.map((item,i) => {
          //console.log(data)
          return (
            <g key={i} transform={"translate(100," + (i*bandY) + ")"} className="group" >
              <text
                dominantBaseline="left"
                textAnchor="end"
                stroke="black"
                x={-5}
                y={bandY-(bandY/3)}
                className="text"
                style={{fontSize:fontsize+'px'}}>
                  {item.operator.operatorName}
              </text>
              <Diamond meta={item.meta} data={item.data} boxSize={bandX} padding={20}/>
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

      <div style={{flex:'1',display:'flex'}}>
        <iframe
          title={'SwipeGuide'}
          width="100%"
          style={{flex:'1',border:'1'}}
          src={src}
          xsrc={"https://app.swipeguide.com/embed/guide/46e3b328-9e74-4875-a774-99418940d9f4/279b3f82-e4e1-4468-b166-419372c57c39?embed=true&locale=EN_US&isolatedInstruction=true"}>
        </iframe>
      </div>
    </div>
  )
})
