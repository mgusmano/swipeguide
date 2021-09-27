import { useSimpleState } from './state/SimpleProvider';

export const North = (() => {
  const simpleState = useSimpleState();

  return (
    <div style={{...simpleState.styles.h,background:'gray',flex:1, height:'100%',justifyContent:'space-between',alignItems:'center'}}>
      <div style={{...simpleState.styles.h,justifyContent: 'flex-end'}}>
        <button style={{marginLeft:'10px',width:'120px',height:'30px'}}
          onClick={(e)=> {
            simpleState.setUserName('Marc')
          }}
        >Name {simpleState.userName}</button>
        <button style={{marginLeft:'10px',width:'120px',height:'30px'}}
          onClick={(e)=> {
            simpleState.setAll(false)
          }}
        >Set All</button>
        <button style={{marginLeft:'10px',width:'120px',height:'30px'}}
          onClick={(e)=> {
            simpleState.setOperators(false)
          }}
        >Set Operators</button>
      </div>
      <div>

      </div>
    </div>
  )
})
