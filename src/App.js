import React from 'react';
import { AppProvider } from './state/AppProvider';
import { useAppState } from './state/AppProvider';

import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css'
import Horizontal from './layout/Horizontal'
import Vertical from './layout/Vertical'

import Top from './Top';
import TopMenu from './TopMenu';
import TrainingMatrix from './trainingmatrix/TrainingMatrix'
import CsvData from './trainingmatrix/csv/CsvData'
import Admin from './trainingmatrix/admin/Admin'

import { Simple } from './pages/simple/Simple'
import { Benchmark } from './pages/benchmark/Benchmark'
import { CardReport } from './pages/cardreport/CardReport'



//import { withAuthenticator } from '@aws-amplify/ui-react'
//import {Auth} from 'aws-amplify';
//import { Authenticator, SignIn, SignUp, ConfirmSignUp, Greetings } from 'aws-amplify-react';
// https://docs.amplify.aws/ui/customization/theming/q/framework/react

export const App = (() => (<AppProvider><Main/></AppProvider>))

function Main(props) {
  const appState = useAppState();

  var PartnerCNA = {
    PartnerID: 395,
    PartnerShort: 'CNA',
    PartnerName: 'CNA',
    PersonID: 275399,
    GroupID: 33582,
    showratings: false,
    ratingsources: '4' //ManagerRating
  }

  var PartnerGMIsb = {
    PartnerID: 434,
    PartnerShort: 'GMIsb',
    PartnerName: 'General Mills',
    PersonID: 281326,
    GroupID: 33931,
    showratings: true,
    ratingsources: '1000' //SelfRating
  }

  return (
      <Vertical style={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}}>
        {/* <div>{appState.userName}</div> */}
        <Top/>
        <TopMenu/>
        <div className="routehost" style={{flex: 'auto', display:'flex', flexDirection:'row',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
          <Switch>
            <Route exact path="/"><Redirect to="/trainingmatrix"/></Route>
            <Route path="/trainingmatrix" default component={TrainingMatrix}/>
            <Route path="/csv" component={() => <CsvData/>}/>
            <Route path="/admin" component={() => <Admin/>}/>
            <Route path="/simple" component={() => <Simple/>}/>
            <Route path="/benchmark" component={() => <Benchmark Partner={PartnerGMIsb}/>}/>
            <Route path="/cardreport" component={() => <CardReport Partner={PartnerCNA} PartnerID='395' SMEOnly={true} showlob={false}/>} />}/>
          </Switch>
        </div>
      </Vertical>
  );
}

//export default App;
