import React from 'react'

const Horizontal = (props) => (
  <div data-flex-splitter-horizontal style={{flex: 'auto', display:'flex', flexDirection:'row',border:'0px solid red'}}>
    {props.children}
  </div>
)

export default Horizontal
