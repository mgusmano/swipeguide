import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

import {AmplifyAuthenticator} from "@aws-amplify/ui-react";

ReactDOM.render(
  <React.StrictMode>
    <AmplifyAuthenticator>
      
    <App />
    </AmplifyAuthenticator>
  </React.StrictMode>,
  document.getElementById('root')
);
