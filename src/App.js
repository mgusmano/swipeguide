import React, { useEffect, useState } from 'react';
import { Diamond } from './Diamond';
import { getDates } from './util';
import { API, graphqlOperation } from 'aws-amplify'

import { listSkills } from './graphql/queries'
import { createSkill, updateSkill, deleteSkill } from './graphql/mutations'

import { listOperators} from './graphql/queries'
import { createOperator, deleteOperator } from './graphql/mutations'

//import { createScore } from './graphql/mutations'

import { listCertifications} from './graphql/queries'
import { createCertification, deleteCertification, updateCertification } from './graphql/mutations'

function App() {
  const [skills, setSkills] = useState([])
  const [operators, setOperators] = useState([])
  const [certifications, setCertifications] = useState([])

  const [greendate, yellowdate, reddate] = getDates();

  var bandX=50
  var item = {
    skillID:10,
    operatorID:1,
    meta:{status:'started',start:greendate,trainer:true},
    data:[
      {p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}
    ]
  }

  useEffect(() => {
    getDataSkills()
    getDataOperators()
    getDataCertifications()

  },[])


  async function getDataCertifications() {
    const result = await API.graphql(graphqlOperation(listCertifications))
    setTimeout(function(){

      setCertifications(result.data.listCertifications.items)
    }, 100);

  }

  async function getDataSkills() {
    const skillData = await API.graphql(graphqlOperation(listSkills))
    //console.log(skillData.data.listSkills.items)
    setSkills(skillData.data.listSkills.items)
  }

  async function onClickAddAllSkills() {
    var skillsX = [
      {skillID:10,line:'S',skillName:'Core Loading'},
      {skillID:20,line:'S',skillName:'Phase Paper Insertion (VW)'},
      // {skillID:30,line:'S',skillName:'Lead Wire Setting'},
      // {skillID:40,line:'S',skillName:'Neutral Tube Insertion'},
      // {skillID:50,line:'S',skillName:'Neutral Crimp'},
      // {skillID:60,line:'S',skillName:'Pre-Lacing'},
      // {skillID:70,line:'S',skillName:'Lacing'},
      // {skillID:80,line:'S',skillName:'Lead Terminal Crimp'},
      // {skillID:90,line:'S',skillName:'Lead Wire Forming'},
    ]
    Promise.allSettled(skillsX.map((item, i) => {
      return API.graphql(graphqlOperation(createSkill, { input: {id: i+1, skillName: item.skillName} }))
    }))
    .then((results) => {
      results.forEach((result) => {
        if (result.status !== 'fulfilled') {console.log(result)}
      })
      getDataSkills()
    })
  }

  async function onClickDeleteAllSkills() {
    Promise.allSettled(skills.map(item => {
      return API.graphql(graphqlOperation(deleteSkill, { input: {id: item.id} } ))
    }))
    .then((results) => {
      results.forEach((result) => {
        if (result.status !== 'fulfilled') {console.log(result)}
      })
      getDataSkills()
    })
  }

  async function getDataOperators() {
    const operatorData = await API.graphql(graphqlOperation(listOperators))
    setOperators(operatorData.data.listOperators.items)
  }

  async function onClickAddAllOperators() {
    var operatorsX = [
      {operatorID:1,operatorName:'Joe Smith'},
      {operatorID:2,operatorName:'Marc Ester'},
      // {operatorID:3,operatorName:'Ted White'},
      // {operatorID:4,operatorName:'Betty Green'},
      // {operatorID:5,operatorName:'Bob Jones'},
      // {operatorID:6,operatorName:'Frank Davis'},
      // {operatorID:7,operatorName:'Jane Johnson'},
      // {operatorID:8,operatorName:'Mary Bird'},
      // {operatorID:9,operatorName:'Zoya Lee'},
      // {operatorID:10,operatorName:'Joe Adams'},
    ]
    Promise.allSettled(operatorsX.map((item,i) => {
      //var i = id+1;setId(i);
      return API.graphql(graphqlOperation(createOperator, { input: {id: i+1, operatorName: item.operatorName} }))
    }))
    .then((results) => {
      results.forEach((result) => {
        if (result.status !== 'fulfilled') {console.log(result)}
      })
      getDataOperators()
    })
  }


  async function onClickDeleteAllOperators() {
    Promise.allSettled(operators.map(item => {
      return API.graphql(graphqlOperation(deleteOperator, { input: {id: item.id } } ))
      //return API.graphql(graphqlOperation(deleteOperator, { input: {id: item.id} } ))
    }))
    .then((results) => {
      results.forEach((result) => {
        if (result.status !== 'fulfilled') {console.log(result)}
      })
      getDataOperators()
    })
  }


  async function onClickAddAllCertifications() {
    console.log('onClickAddAllCertifications')
    var id = 1;

    Promise.allSettled(skills.map((skill, s) => {
      return operators.map((operator,o) => {
        var c = {
          id: id,
          skillID: skill.id,
          operatorID: operator.id,
          meta: `{"status":"started","start":"${greendate}","trainer":"true"}`,
          data: `[{"p":25,"s":1},{"p":50,"s":1},{"p":75,"s":1},{"p":100,"s":1}]`
        }
        id++;
        console.log('create',c)
        return API.graphql(graphqlOperation(createCertification, { input: c }))
      })
    }))
    .then((results) => {
      console.log('in then of onClickAddAllCertifications')
      console.log(results)
      results.forEach((result) => {
        if (result.status !== 'fulfilled') {console.log(result)}
      })
      getDataCertifications()
    })
    .catch((error) => {
      console.log(error)
    })
  }

  async function onClickDeleteAllCertifications() {
    Promise.allSettled(certifications.map(item => {
      return API.graphql(graphqlOperation(deleteCertification, { input: {id: item.id } } ))
      //return API.graphql(graphqlOperation(deleteOperator, { input: {id: item.id} } ))
    }))
    .then((results) => {
      results.forEach((result) => {
        if (result.status !== 'fulfilled') {console.log(result)}
      })
      getDataCertifications()
    })
    .catch((error) => {
      console.log(error)
    })
  }






  async function onClickCreate() {
    console.log('click')
    var skill = {skillName: 'Skill01'}
    await API.graphql(graphqlOperation(createSkill, { input: skill }))
    getDataSkills()
  }

  async function onClickUpdate() {
    console.log('click')
    var skill = {id: "7e323d72-0420-40af-9f67-b625924682e6", skillName: "Marc"}
    await API.graphql(graphqlOperation(updateSkill, { input: skill }))
    getDataSkills()
  }

  async function onClickDelete() {
    console.log('click')
    var skill = {id: "ec1a0cd8-2825-419b-acae-242115d8527b"}
    await API.graphql(graphqlOperation(deleteSkill, { input: skill } ))
    getDataSkills()
  }


  async function onClickUpdateCertification() {
    var c = {
      id: "1",
      meta: `{"status":"started","start":"${reddate}","trainer":"false"}`,
      data: `[{"p":25,"s":1},{"p":50,"s":1},{"p":75,"s":1},{"p":100,"s":0}]`
    }
    await API.graphql(graphqlOperation(updateCertification, { input: c } ))
    getDataCertifications()
  }

  async function onClickGetOneCertification() {
    var c = await API.graphql(graphqlOperation(listCertifications,{filter: {id: {eq: "3"}}}))
    var certification = c.data.listCertifications.items[0]

    var s = await API.graphql(graphqlOperation(listSkills,{filter: {id: {eq: certification.skillID}}}))
    var skill = s.data.listSkills.items[0]

    var o = await API.graphql(graphqlOperation(listOperators,{filter: {id: {eq: certification.operatorID}}}))
    var operator = o.data.listOperators.items[0]

    console.log(certification,skill,operator)
  }

  const onChangePercent = (event) => {
    console.log(event.target.value);
  }

  const onChangeTrainer = (event) => {
    console.log(event.target.value);
  }



// const onClick = async (() => {
//     console.log('click')
//     var skill = {skillName: 'Skill01'}
//     await API.graphql(graphqlOperation(CreateSkill, { input: skill }))
//   })

  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <button onClick={onClickDeleteAllSkills}>Delete All Skills</button>
        <button onClick={onClickDeleteAllOperators}>Delete All Operators</button>
        <button onClick={onClickDeleteAllCertifications}>Delete All Certifications</button>
      </header>
      <header>
        <button onClick={onClickAddAllSkills}>Add All Skills</button>
        <button onClick={onClickAddAllOperators}>Add All Operators</button>
        <button onClick={onClickAddAllCertifications}>Add All Certifications</button>
      </header>

      <header>
        <button onClick={onClickGetOneCertification}>get One Certification</button>
      </header>


      <header>
        <button onClick={onClickCreate}>Create</button>
        <button onClick={onClickUpdate}>Update</button>
        <button onClick={onClickDelete}>Delete</button>
      </header>

      <header>
        <button onClick={onClickUpdateCertification}>Update Certification</button>
      </header>

      <Diamond meta={item.meta} data={item.data} boxSize={bandX} padding={30}/>

      <div onChange={onChangePercent}>
        Percent:
        <input type="radio" value="0" name="percent" /> 0%
        <input type="radio" value="25" name="percent" /> 25%
        <input type="radio" value="75" name="percent" /> 75%
        <input type="radio" value="100" name="percent" /> 100%
      </div>

      <div onChange={onChangePercent}>
        Certification:
        <input style={{marginLeft:'20px'}} type="radio" value="0" name="percent" /> Started
        <input style={{marginLeft:'20px'}} type="radio" value="25" name="percent" /> Apprentice
        <input style={{marginLeft:'20px'}} type="radio" value="50" name="percent" /> Beginner
        <input style={{marginLeft:'20px'}} type="radio" value="75" name="percent" /> Intermediate
        <input style={{marginLeft:'20px'}} type="radio" value="100" name="percent" /> Certified
      </div>

      <div onChange={onChangeTrainer}>
        Trainer:
        <input type="radio" value="true" name="trainer" /> true
        <input type="radio" value="false" name="trainer" /> false
      </div>



Skills:
      {
        skills.map((item, index) => (
          <div key={index}>
            <h5>{item.id} - {item.skillName}</h5>
          </div>
        ))
      }

Operators:
      {
        operators.map((item, index) => (
          <div key={index}>
            <h5>{item.id} - {item.operatorName}</h5>
          </div>
        ))
      }

Certifications:
      {
        certifications.map((item, index) => {
          return (
            <div key={index}>
              <br/>
              <Diamond meta={item.meta} data={item.data} boxSize={bandX} padding={30}/>

              {/* id:{item.id} skillID:{item.skillID} operatorID:{item.operatorID}<br/> meta:{item.meta}<br/> data:{item.data} */}

            </div>
          )
        })
      }

    </div>
  );
}

export default App;
