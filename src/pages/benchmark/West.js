import { useAppState } from '../../state/AppProvider';
import { useBenchmarkState } from './state/BenchmarkProvider';

export const West = (() => {
  const appState = useAppState();
  const benchmarkState = useBenchmarkState();

  return (
    <div style={{...benchmarkState.styles.v,background:'gray',flex:1, height:'100%',justifyContent:'space-between',alignItems:'center'}}>
      <div>
      {benchmarkState.userName}
      </div>
      <div>
      {appState.userName}
      </div>
    </div>
  )
})
