import React, { useState, useEffect } from 'react';
import { useAppState } from './state/AppProvider';

import { Link } from "react-router-dom";
import {Auth} from 'aws-amplify';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { useHistory } from "react-router-dom";

const TopMenu = (props) => {
  const appState = useAppState();

  //const matrixState = useMatrixState();
  //const [loggedinuser, setLoggedInUser] = useState('')
  const history = useHistory();

  useEffect(() => {
    Auth.currentAuthenticatedUser()
    .then(user => {
      console.log('auth')
      appState.setAuthenticatedUser(user.username)
    })
    .catch(ex => {
      appState.setAuthenticatedUser(ex)
    });
  },[])

  // function signOut() {
  //   //let user = Auth.currentAuthenticatedUser();

  //   Auth.signOut()
  //   .then(user => {
  //     //console.log(user);
  //     setLoggedInUser('');
  //     Auth.signIn();
  //     //return user;
  //   })
  //   .catch(ex => {
  //     console.log(ex);
  //     console.log("inside signOut catch, calling federatedSignIn");
  //     //Auth.federatedSignIn({ provider: "Federate" });
  //   });
  //   //alert(user)
  // }




  return (
    <div className="topmenu" style={{display:'flex',justifyContent:'space-between',alignItems:'center',xjustifyContent:'center',height:'50px',color:'white',background:'black',fontSize:'24px'}}>
      <div style={{display:'flex',flexDirection:'row'}}>
        <div>
            <Link style={{marginLeft:'60px',color:'white',textDecoration:'none'}} to="/trainingmatrix">Training Matrix</Link>
            <Link style={{marginLeft:'50px',color:'white',textDecoration:'none'}} to="/csv">Load Data</Link>


            {/* <Link style={{marginLeft:'50px',color:'white',textDecoration:'none'}} to="/simple">Simple</Link>
            <Link style={{marginLeft:'50px',color:'white',textDecoration:'none'}} to="/benchmark">Benchmark</Link>
            <Link style={{marginLeft:'50px',color:'white',textDecoration:'none'}} to="/cardreport">Card Report</Link> */}


            {/* <Link style={{marginLeft:'50px',color:'white',textDecoration:'none'}} to="/admin">Admin</Link> */}
        </div>
      </div>

      <div style={{display:'flex',flexDirection:'row'}}>

        <button style={{display:'none',marginLeft:'10px',width:'120px',height:'30px'}}
          onClick={(e)=> {
            appState.setUserName('newAppUserName')
          }}
        >Set All</button>


        <div style={{display:'none'}} >{appState.userName}</div>
        <div style={{display:'none',fontSize:'14px',marginTop:'29px',marginRight:'9px',color:'white',textDecoration:'none'}}>Logged In User: {appState.authenticatedUser}</div>


        {/* <AmplifySignOut
          handleAuthStateChange = {(nextAuthState,data) => {
            console.log(nextAuthState)
            if (nextAuthState == 'signedout') {
              appState.setAuthenticatedUser('')
              history.push("/admin");
              history.push("/trainingmatrix");
              //Auth.signOut();
            }
          }}
        /> */}





      </div>
      {/* <i style={{marginRight:'20px',cursor:'pointer'}} className="fa fa-bars" onClick={props.filterClick}></i> */}
    </div>
  )
}

export default TopMenu