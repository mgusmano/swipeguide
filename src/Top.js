import React from 'react';
//import logoImg from "./images/SkillNetBall.jpeg";
//import { Logo } from "./components/AuthForms";
//import SKILLNETBALL from './images/SkillNetBall.jpeg';
import SWIPE from './images/swipe-logo-normal.svg';

const Top = (props) => {

  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',xjustifyContent:'center',xheight:'60px',background:'white',color:'rgb(51,124,182)',fontSize:'24px'}}>
      {/* <img src={SKILLNETBALL} style={{marginLeft:'80px',width:'50px'}} alt="SKILLNETBALL" /> */}
      <div style={{display:'flex',flexDirection:'row'}}>
        <img src={SWIPE} style={{marginLeft:'20px',width:'200px'}} alt="SWIPE" />
        <div style={{fontSize:'18px',marginLeft:'28px',marginTop:'14px'}}>Skill Certification</div>

      </div>
      <div style={{margin:'30px 15px 5px 1px',fontSize:'11px'}}>08-03-2021(a)</div>
    </div>
  )
}

export default Top