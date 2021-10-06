import React, { useState, useEffect } from 'react';
import TrainingMatrix from '../../trainingmatrix/TrainingMatrix'

export const TrainingMatrixPage = (props) => {
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

    var skillsDataA = [
      {"id": "1","skillName": "Core2 Loading","goal": 8,},
      {"id": "2","skillName": "Phase Paper Insertion (VW)","goal": 2,},
      {"id": "3","skillName": "Lead Wire Setting","goal": 8,},
      {"id": "4","skillName": "Neutral Tube Insertion","goal": 3,},
      {"id": "5","skillName": "Neutral Crimp","goal": 7,},
      {"id": "6","skillName": "Pre-Lacing","goal": 4,},
      {"id": "7","skillName": "Lacing","goal": 5,},
      {"id": "8","skillName": "Lead Terminal Crimp","goal": 6,},
      {"id": "9","skillName": "Lead Wire Forming","goal": 1,}
    ]
    var operatorsDataA = [
      {"id": "1","operatorName": "Aaron Cariaga","picture": "Aaron Cariaga.jpg","goal": 7,},
      {"id": "2","operatorName": "Ahmed Al Talabani","picture": "Ahmed Al Talabani.jpg","goal": 7,},
      {"id": "3","operatorName": "Baltazar Garcia","picture": "Baltazar Garcia.jpg","goal": 7,},
      {"id": "4","operatorName": "Blaise Chancellor Podehole","picture": "Blaise Chancellor Podehale.jpg","goal": 7,},
      {"id": "5","operatorName": "Brian Phetnavong","picture": "Brian Phetnavong.jpg","goal": 7,},
      {"id": "6","operatorName": "Christopher Corvera","picture": "Christopher Corvera.jpg","goal": 7,},
      {"id": "7","operatorName": "Patricia Wandemberg","picture": "Patricia Wandemberg.jpg","goal": 7,},
      {"id": "8","operatorName": "Evanson Kirathe","picture": "Evanson Kirathe.jpg","goal": 7,},
      {"id": "9","operatorName": "Jawwad Mushtaq","picture": "Jawwad Mushtaq.jpg","goal": 7,},
      {"id": "10","operatorName": "Jesus Gonzalez","picture": "Jesus Gonzalez.jpg","goal": 7,},
      {"id": "11","operatorName": "Linda Davila","picture": "Linda Davila.jpg","goal": 7,},
      {"id": "12","operatorName": "Maria Flores","picture": "Maria Flores.jpg","goal": 7,},
      {"id": "13","operatorName": "Maribel Briggs","picture": "Maribel Briggs.jpg","goal": 7,},
      {"id": "14","operatorName": "Osvaldo Cabrera","picture": "Osvaldo Cabrera.jpg","goal": 7,},
      {"id": "15","operatorName": "Richard Genova","picture": "Richard Genova.jpg","goal": 7,},
      {"id": "16","operatorName": "Roger Rivas","picture": "Roger Rivas.jpg","goal": 7,},
      {"id": "17","operatorName": "Sheny Alecio","picture": "Sheny Alecio.jpg","goal": 7,},
      {"id": "18","operatorName": "Trung Nguyen","picture": "Trung Nguyen.jpg","goal": 7,},
      {"id": "19","operatorName": "Shakira Shakir","picture": "Shakira Shakir.jpg","goal": 7,},
      {"id": "20","operatorName": "Jeremy Washington","picture": "Jeremy Washington.jpg","goal": 7,},
    ]
    //https://www.compart.com/en/unicode/block/
    var certificationsDataA = [
      {"operatorID": "1","skillID": "1","meta": {"type":"solid","color":"green","strokecolor":"black","letter":"","start":"8/3/2021",},"data": []},
      {"operatorID": "2","skillID": "1","meta": {"type":"solid","color":"gold","strokecolor":"black","letter":"","start":"8/3/2021",},"data": []},
      {"operatorID": "3","skillID": "1","meta": {"type":"solid","color":"red","strokecolor":"black","letter":"","start":"8/3/2021",},"data": []},
      {"operatorID": "4","skillID": "1","meta": {"type":"solid","color":"goldenrod","strokecolor":"black","letter":"C","start":"8/3/2021",},"data": []},
      {"operatorID": "5","skillID": "1","meta": {"type":"solid","color":"blue","strokecolor":"black","letter":"T","start":"8/3/2021",},"data": []},

      {"operatorID": "5","skillID": "5","meta": {"type":"solid","color":"green","strokecolor":"black","letter":"","start":"8/3/2021",},"data": []},
      {"operatorID": "5","skillID": "6","meta": {"type":"solid","color":"white","strokecolor":"black","letter":"\uD83D\uDC04","start":"8/3/2021",},"data": []},
      {"operatorID": "5","skillID": "7","meta": {"type":"solid","color":"white","strokecolor":"white","letter":"\uD83C\uDF45","start":"8/3/2021",},"data": []},
      {"operatorID": "5","skillID": "9","meta": {"type":"solid","color":"white","strokecolor":"green","letter":"\uD83D\uDD14","start":"8/3/2021",},"data": []},
      {"operatorID": "19","skillID": "9","meta": {"type":"solid","color":"white","strokecolor":"green","letter":"\uD83D\uDD14","start":"8/3/2021",},"data": []},
    ]

    setSkillsData(skillsDataA)
    setOperatorsData(operatorsDataA)
    setCertificationsData(certificationsDataA)
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