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

      var skills = skillsResult.data
      if (typeof skillsResult.data === 'string') {
        skills = JSON.parse(skillsResult.data)
      }
      var operators = operatorsResult.data
      if (typeof operatorsResult.data === 'string') {
        operators = JSON.parse(operatorsResult.data)
      }
      var certifications = certificationsResult.data
      if (typeof certificationsResult.data === 'string') {
        certifications = JSON.parse(certificationsResult.data)
      }
      //console.log(skills)
      //console.log(operators)
      //console.log(certifications)

      setSkillsData(skills)
      setOperatorsData(operators)
      setCertificationsData(certifications)
    }
    fetchData();


    //setSkillsData(skillsDataA)
    //setOperatorsData(operatorsDataA)
    //setCertificationsData(certificationsDataA)
  },[])

  const cellClicked = (id) => {
    setTextMessage('cellClicked: ' + id)
  }

  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%',width:'100%'}}>

      <div style={{height:'40px',paddingLeft:'15px',paddingTop:'15px',background:'gray'}}>
        <button onClick={()=>{setCertificationsData(newCertificationsData)}}>replace matrix data</button>
        <button onClick={()=>{setShowLegend(!showLegend)}}>Legend</button>
        <input
          style={{marginLeft:'70px'}}
          type="text"
          value={textMessage}
          onChange={()=>{}}
        />
        {/* <textarea name="body"
          value={textMessage}
          onChange={()=>{}}
        /> */}
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