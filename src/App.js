import React from 'react';
import { MatrixProvider } from './trainingmatrix/state/MatrixProvider';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css'
import Horizontal from './layout/Horizontal'
import Vertical from './layout/Vertical'

import Top from './Top';
import TopMenu from './TopMenu';
import TrainingMatrix from './trainingmatrix/TrainingMatrix'
import CsvData from './trainingmatrix/csv/CsvData'
import Admin from './trainingmatrix/admin/Admin'



//import { withAuthenticator } from '@aws-amplify/ui-react'
//import {Auth} from 'aws-amplify';
//import { Authenticator, SignIn, SignUp, ConfirmSignUp, Greetings } from 'aws-amplify-react';
// https://docs.amplify.aws/ui/customization/theming/q/framework/react


function App(props) {

  return (
      <MatrixProvider>
      <Vertical style={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}}>
        <Top/>
        <TopMenu/>
        <div className="routehost" style={{flex: 'auto', display:'flex', flexDirection:'row',alignItems:'center',justifyContent:'center',overflow:'hidden'}}>
          <Switch>
            <Route exact path="/"><Redirect to="/trainingmatrix"/></Route>
            <Route path="/trainingmatrix" default component={TrainingMatrix}/>
            <Route path="/csv" component={() => <CsvData/>}/>
            <Route path="/admin" component={() => <Admin/>}/>
          </Switch>
        </div>
      </Vertical>
      </MatrixProvider>
  );
}

export default App;
