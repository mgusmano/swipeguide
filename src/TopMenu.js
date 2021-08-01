import React from 'react';
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from "react-router-dom";

const TopMenu = (props) => {
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',xjustifyContent:'center',height:'50px',color:'white',background:'black',fontSize:'24px'}}>
      <div style={{display:'flex',flexDirection:'row'}}>
        <div>
            <Link style={{marginLeft:'60px',color:'white',textDecoration:'none'}} to="/trainingmatrix">Training Matrix</Link>
            <Link style={{marginLeft:'50px',color:'white',textDecoration:'none'}} to="/csv">CSV</Link>
            </div>
      </div>
      {/* <i style={{marginRight:'20px',cursor:'pointer'}} className="fa fa-bars" onClick={props.filterClick}></i> */}
    </div>
  )
}

export default TopMenu