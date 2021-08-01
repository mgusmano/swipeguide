import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { listOperators as ListOperators } from './graphql/queries'

function App() {
  const [operators, setOperators] = useState([])

  useEffect(() => {
    getData()

  },[])

  async function getData() {
    const operatorData = await API.graphql(graphqlOperation(ListOperators))
    setOperators(operatorData.data.listOperators.items)
  }




  return (
    <div style={{ textAlign: 'center' }}>
      <header>
      {
        operators.map((item, index) => (
          <div key={index}>

            <h5>{item.name}</h5>

          </div>
        ))
      }
      </header>
    </div>
  );
}

export default App;
