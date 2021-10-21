import React, { useState, useEffect } from 'react';
import TrainingMatrix from './trainingmatrix/TrainingMatrix'
import axios from "axios";
//import Select from 'react-select';

export const App = (props) => {
  const [multiplier, setMultiplier] = useState(0);
  const [textMessage, setTextMessage] = useState('');
  const [showLegend, setShowLegend] = useState(false);
  const [skillsData, setSkillsData] = useState(null);
  const [operatorsData, setOperatorsData] = useState(null);
  const [certificationsData, setCertificationsData] = useState(null);
  const [groupsData, setGroupsData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const skillsResult = await axios("data/trainingmatrix/data/skills.json");
      const operatorsResult = await axios("data/trainingmatrix/data/operators.json");
      const certificationsResult = await axios("data/trainingmatrix/data/certifications.json");
      const groupsResult = await axios("data/trainingmatrix/data/groups.json");

      setSkillsData(skillsResult.data)
      setOperatorsData(operatorsResult.data)
      setCertificationsData(certificationsResult.data)
      setGroupsData(groupsResult.data)
      //console.log(groupsResult.data)
    }
    fetchData();

    if (window.innerWidth < 1200) { setMultiplier(5) } else
    if (window.innerWidth < 1500) { setMultiplier(6) } else
    { setMultiplier(7) }
  },[])

  const cellClicked = (id) => {
    setTextMessage(id)
  }

  const replaceMatrixData = () => {
    async function fetchData() {
      const certificationsnewResult = await axios("data/trainingmatrix/data/certificationsnew.json");
      setCertificationsData(certificationsnewResult.data)
    }
    fetchData();
  }

  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%',width:'100%'}}>

      <div style={{display:'flex',flexDirection:'row',height:'40px',padding:'5px',background:'gray'}}>
        <button onClick={replaceMatrixData}>replace matrix data</button>
        <button onClick={()=>{setShowLegend(!showLegend)}}>Legend</button>
        <button style={{marginLeft:'10px'}} onClick={()=>{setMultiplier(multiplier-1)}}>smaller</button>
        <button onClick={()=>{setMultiplier(multiplier+1)}}>bigger</button>
        <div style={{marginLeft:'30px',marginTop:'10px'}}>cell clicked:</div>
        <input
          style={{width:'30px'}}
          type="text"
          value={textMessage}
          onChange={()=>{}}
        />
        {/* <Select style={{width:'250px'}} options={options} /> */}

        <div style={{marginLeft:'30px',marginTop:'10px'}}>groups:</div>
        <select style={{width:'100px'}} onChange={(event) => {console.log(event)}}>
          {groupsData !== null &&
            groupsData.map((group,i) => {
              return <option key={i} value={group.id}>{group.groupName}</option>
            })
          }
        </select>
        <div style={{margin:'10px',marginLeft:'70px'}}>v2021-10-21-e</div>
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