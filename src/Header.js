import React from 'react';

const Header = (props) => {
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',xjustifyContent:'center',height:'50px',color:'white',background:'rgb(51,124,182)',fontSize:'24px'}}>
      <div style={{display:'flex',flexDirection:'row'}}>
        <i style={{marginLeft:'20px',cursor:'pointer'}} className="fa fa-bars" onClick={props.menuClick}></i>
        <div style={{fontSize:'18px',marginLeft:'18px',marginTop:'2px'}}>Skill Certification</div>
      </div>
      {/* <i style={{marginRight:'20px',cursor:'pointer'}} className="fa fa-bars" onClick={props.filterClick}></i> */}
    </div>
  )
}

export default Header