import React, { useState, useEffect } from 'react';
import { useAppState } from './state/AppProvider';
import TrainingMatrix from './trainingmatrix/TrainingMatrix'
import { Toolstrip } from './Toolstrip.js'
import axios from "axios";
//import Select from 'react-select';

export const App = (props) => {
  const appState = useAppState();
  //const [multiplier, setMultiplier] = useState(0);
  //const [textMessage, setTextMessage] = useState('');
  //const [showLegend, setShowLegend] = useState(false);
  const [skillsData, setSkillsData] = useState(null);
  const [operatorsData, setOperatorsData] = useState(null);
  const [certificationsData, setCertificationsData] = useState(null);
  //const [groupsData, setGroupsData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const skillsResult = await axios("data/trainingmatrix/data/skills.json");
      const operatorsResult = await axios("data/trainingmatrix/data/operators.json");
      const certificationsResult = await axios("data/trainingmatrix/data/certifications.json");
      const groupsResult = await axios("data/trainingmatrix/data/groups.json");

      setSkillsData(skillsResult.data)
      setOperatorsData(operatorsResult.data)
      setCertificationsData(certificationsResult.data)
      //setGroupsData(groupsResult.data)
    }
    fetchData();

    if (window.innerWidth < 1200) { appState.setMultiplier(5) } else
    if (window.innerWidth < 1500) { appState.setMultiplier(6) } else
    { appState.setMultiplier(7) }
  },[])

  const cellClicked = (data) => {
    console.log(data)
    //setTextMessage(id)
  }

  // const replaceMatrixData = () => {
  //   async function fetchData() {
  //     const certificationsnewResult = await axios("data/trainingmatrix/data/certificationsnew.json");
  //     setCertificationsData(certificationsnewResult.data)
  //   }
  //   fetchData();
  // }

  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%',width:'100%'}}>
      <Toolstrip/>
      <div style={{flex:'1'}}>
        {certificationsData !== null &&
        <TrainingMatrix
          multiplier={appState.multiplier}
          showLegend={appState.legend}
          //showLegend={showLegend}
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