import React, { useEffect } from 'react';
import { useMatrixState } from '../state/MatrixProvider';
import {Auth} from 'aws-amplify';
import LoadingOverlay from 'react-loading-overlay';
import { styles } from '../styles';
import CsvDataOperator from './CsvDataOperator';
import CsvDataSkill from './CsvDataSkill';
import CsvDataCertification from './CsvDataCertification';
import './CsvData.css'
import { withAuthenticator } from '@aws-amplify/ui-react'

const CsvData = (props) => {
  const matrixState = useMatrixState();

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
    matrixState.setAll(false,false)
  },[])

  return (
    <LoadingOverlay
      styles={{wrapper: {width:'100%',height:'100%',zIndex:'10'}}}
      active={matrixState.active}
      spinner
      text='Loading...'
    >
      <div className='csv' style={{...styles.v,width:'100%',height:'100%',overflow:'auto'}}>
        <CsvDataOperator/>
        <CsvDataSkill/>
        <CsvDataCertification/>
      </div>
    </LoadingOverlay>
  )
}

export default withAuthenticator(CsvData)