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
      const groupsResult = await axios(`data/trainingmatrix/data/groups.json`);


      //http://skillnetusersapi.azurewebsites.net//api/PortalCertificationsRating?groupid=34750

      //http://localhost:51186//api/PortalGroupUpdateOperatorCertification?groupid=34750&skillID=44222&operatorID=284496&certificationData=2

     // http://skillnetusersapi.azurewebsites.net//api/portalgroups?partnerid=448

     // http://skillnetusersapi.azurewebsites.net//api/PortalGroupSkills?partnerid=448&groupid=33784

     // http://skillnetusersapi.azurewebsites.net//api/PortalGroupOperators?groupid=33784




      const portalGroupOperatorsResult = await axios(
        'https://skillnetusersapi.azurewebsites.net//api/PortalGroupOperators?groupid=34707',
        {
          auth: {username: 'skillnet',password: 'demo'}
        }
      );
      console.log('portalGroupOperatorsResult')
      console.log(portalGroupOperatorsResult)

      const portalGroupSkillsResult = await axios(
        'https://skillnetusersapi.azurewebsites.net//api/PortalGroupSkills?partnerid=448&groupid=34707',
        {
          auth: {username: 'skillnet',password: 'demo'}
        }
      );
      console.log('portalGroupSkillsResult')
      console.log(portalGroupSkillsResult)
      console.log(JSON.parse(portalGroupSkillsResult.data))


      const portalGroupsResult = await axios(
        'https://skillnetusersapi.azurewebsites.net//api/portalgroups?partnerid=448',
        {
          auth: {username: 'skillnet',password: 'demo'}
        }
      );
      console.log('portalGroupsResult')
      console.log(portalGroupsResult)


      //https://skillnetusersapi.azurewebsites.net//api/PortalCertificationsRating?groupid=34750
      const portalCertificationsRatingResult = await axios(
        'https://skillnetusersapi.azurewebsites.net/api/PortalCertificationsRating?groupid=34707',
        {
          auth: {username: 'skillnet',password: 'demo'}
        }
      );
      console.log('portalCertificationsRatingResult')
      console.log(portalCertificationsRatingResult)


      // const attributesResult = await axios(
      //   //'https://skillnetusersapi.azurewebsites.net/api/PartnerLocations?partnerid=434',
      //   'http://skillnetusersapi.azurewebsites.net//api/customattributes?partnerid=409',
      //   {
      //     auth: {username: 'skillnet',password: 'demo'}
      //   }
      // );
      // console.log(attributesResult)


      appState.setOperators(operatorsResult.data)
      appState.setSkills(skillsResult.data)
      appState.setCertifications(certificationsResult.data)
      //appState.setGroups(groupsResult.data)
      appState.setGroups(portalGroupsResult.data)
    }
    fetchData();

    if (window.innerWidth < 1200) { appState.setMultiplier(4) } else
    if (window.innerWidth < 1500) { appState.setMultiplier(5) } else
    { appState.setMultiplier(7) }
  },[appState.groupid])

  const cellClicked = (data) => {
    //console.log(data)
  }

  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%',width:'100%'}}>
    <div style={{height:'50px'}}><img style={{margin:'10px',width:'150px'}} src="toshiba.png" alt="Toshiba"/></div>
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






    // var url = 'https://skillnetusersapi.azurewebsites.net/api/PartnerLocations?partnerid=434'
    // axios
    // .get(url, {
    //   auth: {username: 'skillnet',password: 'demo'}
    // })
    // .then((response) => {
    //   console.log('result: ', response)
    // })
