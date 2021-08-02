import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {Auth} from 'aws-amplify';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { useHistory } from "react-router-dom";

const TopMenu = (props) => {
  const [loggedinuser, setLoggedInUser] = useState('')
  const history = useHistory();

  useEffect(() => {

    //let user = Auth.currentAuthenticatedUser();

    Auth.currentAuthenticatedUser()
    .then(user => {
      //console.log(user.username)
      setLoggedInUser(user.username);
    })
    .catch(ex => {
      setLoggedInUser(ex);
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
            {/* <Link style={{marginLeft:'50px',color:'white',textDecoration:'none'}} to="/admin">Admin</Link> */}
        </div>
      </div>

      <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{fontSize:'14px',marginTop:'29px',marginRight:'9px',color:'white',textDecoration:'none'}}>Logged In User: {loggedinuser}</div>
        <AmplifySignOut
          handleAuthStateChange = {(nextAuthState,data) => {
            console.log(nextAuthState)
            if (nextAuthState == 'signedout') {
              history.push("/admin");
              history.push("/trainingmatrix");
              //Auth.signOut();
            }

          }}
        />
      </div>
      {/* <i style={{marginRight:'20px',cursor:'pointer'}} className="fa fa-bars" onClick={props.filterClick}></i> */}
    </div>
  )
}

export default TopMenu