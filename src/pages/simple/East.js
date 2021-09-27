import { useAppState } from '../../state/AppProvider';
import { useSimpleState } from './state/SimpleProvider';

export const East = (() => {
  const appState = useAppState();
  const simpleState = useSimpleState();

  return (
    <div style={{...simpleState.styles.v,background:'gray',flex:1, height:'100%',justifyContent:'space-between',alignItems:'center'}}>
      <div>
      {simpleState.userName}
      </div>
      <div>
      {appState.userName}
      </div>
    </div>
  )
})
