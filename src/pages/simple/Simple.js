import React, { useEffect } from 'react';
import { SimpleProvider } from './state/SimpleProvider';
import { useAppState } from '../../state/AppProvider';
import { useSimpleState } from './state/SimpleProvider';
import LoadingOverlay from 'react-loading-overlay';
import { North } from './North'
import { West } from './West'
import { Center } from './Center'
import { East } from './East'
import { South } from './South'
import "flex-splitter-directive"
import "flex-splitter-directive/styles.min.css"

export const Simple = (() => (<SimpleProvider><Main/></SimpleProvider>))

const Main = (() => {
  const appState = useAppState();
  const simpleState = useSimpleState();

  useEffect(() => {
    simpleState.setActive(true)
    simpleState.setAll(false,false)
  },[])

  return (
    <LoadingOverlay
      styles={{wrapper: {width:'100%',height:'100%',zIndex:'10'}}}
      active={simpleState.active}
      spinner
      text='Loading...'
    >
      <div className='app' data-flex-splitter-vertical style={{...simpleState.styles.v,width:'100%',height:'100%'}}>
        <div className='north' style={{...simpleState.styles.v,height:'50px'}}>
          <North/>
        </div>
        <div role="separator"></div>
        <div data-flex-splitter-horizontal style={{...simpleState.styles.h,flex:1,overflow:'hidden'}}>
          <div className='west' style={{...simpleState.styles.v,width:'200px',height:'100%',background:'rgb(51, 124, 182)'}}>
            <West/>
          </div>
          <div role="separator"></div>
          <div className='center' style={{...simpleState.styles.v,flex:1,width:'100%',height:'100%',overflow:'auto'}}>
            <Center/>
          </div>
          <div role="separator"></div>
          <div className='east' style={{...simpleState.styles.v,width:'200px',height:'100%'}}>
            <East/>
          </div>
        </div>
        <div role="separator"></div>
        <div className='south' style={{height:'50px'}}>
          <South/>
        </div>
      </div>
    </LoadingOverlay>
  )
})
