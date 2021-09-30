import React, { useEffect, useState } from 'react';
import { useMatrixState } from './state/MatrixProvider';
import { Auth } from 'aws-amplify';
import LoadingOverlay from 'react-loading-overlay';
import { Legend } from './Legend';
import "flex-splitter-directive"
import "flex-splitter-directive/styles.min.css"
import Drawer from '@material-ui/core/Drawer';
//import { Log } from './Log';
import { Toolbar } from './Toolbar';
import { Row1Col1 } from './Row1Col1';
import { Row1Col2 } from './Row1Col2';
import { Row1Col3 } from './Row1Col3';
import { Row2Col1 } from './Row2Col1';
import { Row2Col2 } from './Row2Col2';
import { Row2Col3 } from './Row2Col3';
import { Row3Col1 } from './Row3Col1';
import { Row3Col2 } from './Row3Col2';
import { Row3Col3 } from './Row3Col3';
import { styles } from './styles';
import { useResizeEvent } from './useResizeEvent';
import { withAuthenticator } from '@aws-amplify/ui-react'

import { MatrixProvider } from './state/MatrixProvider';

// import { API, graphqlOperation } from 'aws-amplify';
// import { getOperator } from '../graphql/queries';
// import * as queries from '../graphql/queries';

export const TrainingMatrix = (() => (<MatrixProvider><Main/></MatrixProvider>))


//export const TrainingMatrix = React.memo(({widgetData}) => {
const Main = () => {
  const matrixState = useMatrixState();
  const [draweropen, setDrawerOpen] = useState(false)
  useResizeEvent()

  useEffect(() => {
    Auth.currentAuthenticatedUser()
    .then(user => {
      matrixState.setAuthenticatedUser(user.username)
    })
    .catch(ex => {
      matrixState.setAuthenticatedUser(ex)
    });
  },[])

  useEffect(() => {
    matrixState.setActive(true)
    matrixState.setAll(true)
  },[])

  //<div className='' style={{...styles.vertical,width:'100%',height:'100%',fontSize:matrixState.dimensions.fontsize+'pt'}}>
  return (
    <div className='trainingmatrix' style={{...styles.v,width:'100%',height:'100%',background:'lightgray'}}>
      {matrixState.showTheLegend && <Legend/>}

      <Toolbar/>

      {/* <button style={{marginLeft:'40px',width:'120px',height:'30px'}}
        onClick={(e)=> {
          setDrawerOpen(!draweropen)
        }}
      >open</button> */}



      <button style={{display:'none',marginLeft:'40px',width:'120px',height:'30px'}}
        onClick={async (e)=> {
          //setDrawerOpen(!draweropen)

          const getOperatorL = /* GraphQL */ `
          query GetOperatorL($id: ID!) {
            getOperator(id: $id) {
              id
              operatorName
              goal
              certifications {
                items {
                  id
                  skill {
                    skillName
                    id
                    goal
                  }
                }
              }
            }
          }
        `;


        const byOperatorL = /* GraphQL */ `
        query byOperator {
          byOperator(
            type: "Certification"
            sortDirection: ASC
          ) {
            id
            operatorID
            skillID
          }
        }
      `;


          //var r = await API.graphql(graphqlOperation(queries.operatorsByName, { operatorName: { ne: "08/20/2018" } } ))
          //var r = await API.graphql(graphqlOperation(getOperatorL, { id: 1 }))

          // var r = await API.graphql({
          //   query: getOperatorL,
          //   variables: { id: 1 },
          //   //authMode: 'AWS_IAM'
          // })

          //var r = await API.graphql(graphqlOperation(byOperatorL))


          //console.log(r)
        }}
      >GraphQL</button>

      {/* main area start */}
      {matrixState.dimensions !== null &&
      <div className='mainarea' data-flex-splitter-horizontal style={{...styles.horizontal,padding:'20px',width:'100%',height:'100%'}}>

        {/* left area - matrix - start */}
        <div data-flex-splitter-horizontal className='left' style={{...styles.v,flex:1,boxSizing:'border-box'}}>

          <div className='leftrow1' height={matrixState.dimensions.row1} style={{...styles.h,height:matrixState.dimensions.row1+'px',background:'lightgray'}}>
            <Row1Col1/>
            <Row1Col2 data={matrixState.byOperator}/>
            <Row1Col3 data={[['Goal','# Certified','Gap']]}/>
          </div>

          <div className='leftrow2' style={{...styles.h,height:(matrixState.dimensions.row2Orig)+'px',background:'lightgray'}}>
            <Row2Col1 data={matrixState.bySkill}/>

            {/* <Log data={matrixState.active}/> */}
            <LoadingOverlay
              style={{width:'100%',height:'100%',zIndex:'10'}}
              active={matrixState.active}
              spinner
              text='Loading...'
              >
              <Row2Col2 data={matrixState.bySkill}/>
            </LoadingOverlay>
            <Row2Col3 data={matrixState.righttotals}/>
          </div>

          <div className='leftrow3' style={{...styles.h,height: matrixState.dimensions.row3+'px',minHeight:matrixState.dimensions.row3+'px',background:'lightgray'}}>
            <Row3Col1 data={[['Goal'],['# Certified'],['Gap']]}/>
            <Row3Col2 data={matrixState.bottomtotals}/>
            <Row3Col3/>
          </div>

        </div>
        {/* left area - matrix - end */}

        <div role="separator"></div>

        {/* right area - details - start */}
        <div className='right' style={{width:'400px'}}>
          <div style={{width:'100%', height:'100%', padding:'25px', background:'white', boxSizing:'border-box'}}>
            <div style={{width:'100%', height:'100%', boxSizing:'border-box', padding:'10px', boxShadow: '0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)'}}>
              {matrixState.specific}
            </div>
          </div>
        </div>
        {/* right area - details - end */}


        <Drawer anchor={'right'} open={draweropen}
          // onClose={

          //   //toggleDrawer(anchor, false)
          // }
        >
          <div style={{display:'flex',flexDirection:'column',width:'500px',height:'100%',boxSizing:'border-box',border:'10px solid green'}}>
            <div style={{height:'50px'}}>Any Settings Would be Here</div>
            <div style={{flex:1}}></div>
            <div>
              <button style={{marginLeft:'0',width:'120px',height:'30px'}}
                onClick={(e)=> {
                  setDrawerOpen(!draweropen)
                }}
              >
                close
              </button>
            </div>
          </div>


        </Drawer>


      </div>
      }
      {/* main area end */}

    </div>
  )
}

//export default withAuthenticator(TrainingMatrix)
export default TrainingMatrix
