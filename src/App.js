import React, { useState, useEffect } from 'react';
import TrainingMatrix from './trainingmatrix/TrainingMatrix'
import axios from "axios";

export const App = (props) => {
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
  },[])

  const cellClicked = (id) => {
    setTextMessage('cellClicked: ' + id)
  }

  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%',width:'100%'}}>

      <div style={{display:'flex',flexDirection:'row',height:'40px',padding:'5px',background:'gray'}}>
        <button onClick={()=>{setCertificationsData(newCertificationsData)}}>replace matrix data</button>
        <button onClick={()=>{setShowLegend(!showLegend)}}>Legend</button>
        <input
          style={{marginLeft:'70px'}}
          type="text"
          value={textMessage}
          onChange={()=>{}}
        />
        <div style={{margin:'10px'}}>v2021-10-06-a</div>
      </div>

      <div style={{flex:'1'}}>
        {certificationsData !== null &&
        <TrainingMatrix
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