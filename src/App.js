import React, { useState, useEffect } from 'react';
import TrainingMatrix from './trainingmatrix/TrainingMatrix'
import axios from "axios";

export const App = (props) => {
  const [multiplier, setMultiplier] = useState(0);
  const [textMessage, setTextMessage] = useState('');
  const [showLegend, setShowLegend] = useState(false);
  const [skillsData, setSkillsData] = useState(null);
  const [operatorsData, setOperatorsData] = useState(null);
  const [certificationsData, setCertificationsData] = useState(null);

  var newCertificationsData = [
    {"operatorID": "1","skillID": "7","meta": {"type":"solid","color":"green","strokecolor":"black","letter":"","start":"8/3/2021","status":"started","trainer":false},"data": []},
    {"operatorID": "2","skillID": "7","meta": {"type":"solid","color":"green","strokecolor":"black","letter":"","start":"8/3/2021","status":"started","trainer":false},"data": []},
  ]

  useEffect(() => {
    async function fetchData() {
      const skillsResult = await axios("data/trainingmatrix/data/skills.json");
      const operatorsResult = await axios("data/trainingmatrix/data/operators.json");
      const certificationsResult = await axios("data/trainingmatrix/data/certifications.json");

      setSkillsData(skillsResult.data)
      setOperatorsData(operatorsResult.data)
      setCertificationsData(certificationsResult.data)
    }
    fetchData();

    if (window.innerWidth < 1200) { setMultiplier(5) } else
    if (window.innerWidth < 1500) { setMultiplier(6) } else
    { setMultiplier(7) }
  },[])

  const cellClicked = (id) => {
    setTextMessage('cellClicked: ' + id)
  }

  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%',width:'100%'}}>

      <div style={{display:'flex',flexDirection:'row',height:'40px',padding:'5px',background:'gray'}}>
        <button onClick={()=>{setCertificationsData(newCertificationsData)}}>replace matrix data</button>
        <button onClick={()=>{setShowLegend(!showLegend)}}>Legend</button>
        <button style={{marginLeft:'10px'}} onClick={()=>{setMultiplier(multiplier-1)}}>smaller</button>
        <button onClick={()=>{setMultiplier(multiplier+1)}}>bigger</button>
        <div style={{marginLeft:'70px',marginTop:'10px'}}>cell clicked:</div>
        <input
          type="text"
          value={textMessage}
          onChange={()=>{}}
        />
        <div style={{margin:'10px'}}>v2021-10-07-b</div>
      </div>

      <div style={{flex:'1'}}>
        {certificationsData !== null &&
        <TrainingMatrix
          multiplier={multiplier}
          showLegend={showLegend}
          operatorsData={operatorsData}
          skillsData={skillsData}
          certificationsData={certificationsData}
          cellClicked={cellClicked}
        />
        }
      </div>

    </div>
  )
}