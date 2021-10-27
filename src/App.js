import React, { useEffect } from 'react';
import { useAppState } from './state/AppProvider';
import { Toolstrip } from './Toolstrip.js';
import TrainingMatrix from './trainingmatrix/TrainingMatrix';
import axios from "axios";

export const App = (props) => {
  const appState = useAppState();

  useEffect(() => {
    async function fetchData() {
      const operatorsResult = await axios(`data/trainingmatrix/data/${appState.groupid}/operators.json`);
      const skillsResult = await axios(`data/trainingmatrix/data/${appState.groupid}/skills.json`);
      const certificationsResult = await axios(`data/trainingmatrix/data/${appState.groupid}/certifications.json`);
      const groupsResult = await axios(`data/trainingmatrix/data/${appState.groupid}/groups.json`);

      appState.setOperators(operatorsResult.data)
      appState.setSkills(skillsResult.data)
      appState.setCertifications(certificationsResult.data)
      appState.setGroups(groupsResult.data)
    }
    fetchData();

    if (window.innerWidth < 1200) { appState.setMultiplier(4) } else
    if (window.innerWidth < 1500) { appState.setMultiplier(5) } else
    { appState.setMultiplier(7) }
  },[appState.groupid])

  const cellClicked = (data) => {
    console.log(data)
  }

  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%',width:'100%'}}>
      <Toolstrip/>
      <div style={{flex:'1'}}>
        {appState.certifications !== null &&
        <TrainingMatrix
          multiplier={appState.multiplier}
          showLegend={appState.legend}
          operatorsData={appState.operators}
          skillsData={appState.skills}
          certificationsData={appState.certifications}
          cellClicked={cellClicked}
        />
        }
      </div>
    </div>
  )
}