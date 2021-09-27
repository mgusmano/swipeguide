import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';

import Amplify from 'aws-amplify'
import config from './aws-exports'
Amplify.configure(config)

ReactDOM.render(
  // <React.StrictMode>
    <Router>
      <App/>
    </Router>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

//https://docs.amplify.aws/ui/q/framework/react
//https://docs.amplify.aws/lib/auth/customui/q/platform/js
//https://docs.amplify.aws/lib/auth/getting-started/q/platform/js
//https://docs.amplify.aws/ui/customization/theming/q/framework/react
//https://docs.aws.amazon.com/amplify/latest/userguide/reuse-backends.html
