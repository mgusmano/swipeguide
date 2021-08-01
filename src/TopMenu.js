import React, { useState, useEffect } from 'react';
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from "react-router-dom";

import {Auth} from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
//https://docs.amplify.aws/lib/auth/getting-started/q/platform/js

const TopMenu = (props) => {
  const [loggedinuser, setLoggedInUser] = useState('')

  useEffect(() => {

    //let user = Auth.currentAuthenticatedUser();

    Auth.currentAuthenticatedUser()
    .then(user => {
      //console.log(user.username)
      setLoggedInUser(user.username);
    })
    .catch(ex => {
      console.log(ex);
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
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',xjustifyContent:'center',height:'50px',color:'white',background:'black',fontSize:'24px'}}>
      <div style={{display:'flex',flexDirection:'row'}}>
        <div>
            <Link style={{marginLeft:'60px',color:'white',textDecoration:'none'}} to="/trainingmatrix">Training Matrix</Link>
            <Link style={{marginLeft:'50px',color:'white',textDecoration:'none'}} to="/csv">CSV</Link>
        </div>
      </div>


      <div style={{marginLeft:'50px',color:'white',textDecoration:'none'}}>Logged In User: {loggedinuser}</div>
      <AmplifySignOut />
      {/* <i style={{marginRight:'20px',cursor:'pointer'}} className="fa fa-bars" onClick={props.filterClick}></i> */}
    </div>
  )
}

export default TopMenu