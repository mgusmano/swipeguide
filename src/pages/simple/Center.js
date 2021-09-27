import { useSimpleState } from './state/SimpleProvider';

export const Center = (() => {
  const simpleState = useSimpleState();

  return (
    <div style={{display:'flex',flex:'1',flexDirection:'column',height:'100%',width:'100%',overflow:'hidden'}}>
      {simpleState.operators !== null &&
        simpleState.operators.map((operator,i) => {
          return <div key={i}>{operator.operatorName}</div>
        })
      }
    </div>
  )
})
